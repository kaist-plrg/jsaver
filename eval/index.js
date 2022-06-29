const fs = require("fs");
const prettier = require("prettier");
const child_process = require("child_process");

function path() {}
path.join = (...args) => {
	return args.join("/");
}

// PATH
const JISET_HOME = process.env.JISET_HOME;
const RAW_HOME = "./raw" // path for raw data
const ERROR_HOME = path.join(RAW_HOME, "error");

// test262
const TEST262_HOME = path.join(JISET_HOME, "tests", "test262");
const TEST_HOME = path.join(TEST262_HOME, "test");
const HARNESS_HOME = path.join(TEST262_HOME, "harness");
const TEST262_INFO_PATH = "./test262";
const TEST262_DIFF_PATH = path.join(TEST262_INFO_PATH, "test262.diff");
const TEST_DESC_PATH = path.join(TEST262_INFO_PATH, "test_desc.json");
const TEST_DATE_PATH = path.join(TEST262_INFO_PATH, "test_date.json");
const TEST_LOC_PATH = path.join(TEST262_INFO_PATH, "test_loc.csv");
const TEMP_FILE_PATH = "./jsaver_temp.js";

// tajs
const TAJS_HOME = process.env.TAJS_HOME;
const TAJS_DIFF_PATH = "./tajs.diff";
const TAJS_JAR_PATH = path.join(TAJS_HOME, "dist", "tajs-all.jar");
const TAJS_RESULT_PATH = path.join(TAJS_HOME, "result.json");
const TAJS_RESULT_HOME = path.join(RAW_HOME, "tajs");
const TAJS_ERROR_HOME = path.join(ERROR_HOME, "tajs");

// concrete
const CONCRETE_LOG_HOME = path.join(JISET_HOME, "logs", "collect", "concrete");
const CONCRETE_RESULT_HOME = path.join(RAW_HOME, "concrete");

// jsaver
const JSAVER_LOG_HOME = path.join(JISET_HOME, "logs", "collect", "abstract");
const JSAVER_RESULT_HOME = path.join(RAW_HOME, "./jsaver");
const JSAVER_ERROR_HOME = path.join(ERROR_HOME, "jsaver");
const JSAVER_0_RESULT_HOME = path.join(RAW_HOME, "./jsaver_0");
const JSAVER_1_RESULT_HOME = path.join(RAW_HOME, "./jsaver_1");
const JSAVER_2_RESULT_HOME = path.join(RAW_HOME, "./jsaver_2");
const JSAVER_3_RESULT_HOME = path.join(RAW_HOME, "./jsaver_3");
const JSAVER_4_RESULT_HOME = path.join(RAW_HOME, "./jsaver_4");

// safe
const SAFE_HOME = process.env.SAFE_HOME;
const SAFE_DIFF_PATH = "./safe.diff";
const SAFE_RESULT_PATH = path.join(SAFE_HOME, "result.json");
const SAFE_RESULT_HOME = path.join(RAW_HOME, "safe");
const SAFE_ERROR_HOME = path.join(ERROR_HOME, "safe");

// babel
const COMPILED_TEST_HOME = path.join(TEST262_INFO_PATH, "compiled/test262");
const COMPILED_HARNESS_HOME = path.join(TEST262_INFO_PATH, "compiled/harness");
const COMPILED_ERROR_SET = new Set(`${fs.readFileSync(`${TEST262_INFO_PATH}/compiled/errors`)}`.split("\n"));
const COMPILED_TAJS_RESULT_HOME = `${TAJS_RESULT_HOME}-compiled`;
const COMPILED_TAJS_ERROR_HOME = `${TAJS_ERROR_HOME}-compiled`;
const COMPILED_SAFE_RESULT_HOME = `${SAFE_RESULT_HOME}-compiled`;
const COMPILED_SAFE_ERROR_HOME = `${SAFE_ERROR_HOME}-compiled`;
const COMPILED_TEST_LOC_PATH = path.join(TEST262_INFO_PATH, "test_loc-compiled.csv");

// consts
const TIMEOUT = 60 * 1000;

// utils
function loadHarness(harnesses, babel) {
  let baseDir = babel ? COMPILED_HARNESS_HOME : HARNESS_HOME;
  return harnesses
    .concat(["assert.js", "sta.js"])
    .map(h => fs.readFileSync(path.join(baseDir, h)))
    .join("\n");
}
function loadTest(test, harnesses, babel) {
  let harnessCode = loadHarness(harnesses, babel);
  let baseDir = babel ? COMPILED_TEST_HOME : TEST_HOME;
  let testCode = fs.readFileSync(path.join(baseDir, test));
  return `${harnessCode}\n${testCode}`;
}
function getDate(test) {
  const output = String(child_process.execSync(`cd ${TEST262_HOME} && git log -1 --format="%ai" --reverse test/${test}`)).trim();
  const rawDate = new Date(output);
  return Math.floor(rawDate.getTime() / DAY) * DAY;
}
function _getDateStr(year, month) {
  return `${year}-${month < 10 ? "0" + month : month}-01`;
}
function getDateStr(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return _getDateStr(year, month);
}
function exec(command, timeout = undefined) {
  return child_process.execSync(command, { timeout });
}
function applyPatch(dir, patchFile) {
  exec(`cp diff/${patchFile} ${dir}/${patchFile} && cd ${dir} && patch -p1 < ${patchFile}`);
}
function revertPatch(dir, patchFile) {
  exec(`cd ${dir} && git checkout -- . && rm ${patchFile}`);
}
const range = (start, end) => Array.from([...Array(end - start).keys()], i => i + start);
const adder = (n, m) => n + m;
function readJson(filename) { return JSON.parse(fs.readFileSync(filename)); }
function readFile(filename) { return fs.readFileSync(filename, "UTF-8"); }
function isSameValue (a, b) {
  if (a === b) { return a !== 0 || 1 / a === 1 / b; } // Handle +/-0 vs. -/+0
  return a !== a && b !== b; // Handle NaN vs. NaN
};
function cleanDir(dirname) {
  exec(`rm -rf ${dirname}`);
  exec(`mkdir -p ${dirname}`);
}

// prepare test262 test
function prepareTest(test, harnesses, babel) {
  // no success when, babel option is on and babel compilation is failed
  if (babel && COMPILED_ERROR_SET.has(test)) return false;

  // otherwise, load test
  const code = loadTest(test, harnesses, babel);
  fs.writeFileSync(TEMP_FILE_PATH, code);
  return true;
}

// get TAJS analyzer result
function setupTAJS(babel) {
  if (!babel) applyPatch(TEST262_HOME, TEST262_DIFF_PATH);
  applyPatch(TAJS_HOME, TAJS_DIFF_PATH);
  exec(`cp diff/commons-text-1.9.jar ${TAJS_HOME}/lib/`);
  exec(`cp diff/commons-lang3-3.12.0.jar ${TAJS_HOME}/lib/`);
  exec(`cd ${TAJS_HOME} && ant`);
  
  if (!babel) {
    cleanDir(TAJS_RESULT_HOME);
    cleanDir(TAJS_ERROR_HOME);
  } else {
    cleanDir(COMPILED_TAJS_RESULT_HOME);
    cleanDir(COMPILED_TAJS_ERROR_HOME);
  }
}
function cleanTAJS(babel) {
  exec(`rm ${TEMP_FILE_PATH}`);
  if (!babel) revertPatch(TEST262_HOME, TEST262_DIFF_PATH);
  revertPatch(TAJS_HOME, TAJS_DIFF_PATH);
  exec(`rm ${TAJS_HOME}/lib/commons-*`);
}
function getTAJS(babel) {
  // load test description
  const testDescs = readJson(TEST_DESC_PATH);
  const errorDir = babel ? COMPILED_TAJS_ERROR_HOME : TAJS_ERROR_HOME;
  const resultDir = babel ? COMPILED_TAJS_RESULT_HOME : TAJS_RESULT_HOME;

  // setup
  setupTAJS(babel);
  
  // run tests
  testDescs.forEach(([test, harnesses], id) => {
    console.log(test, id);

    // prepare test
    if (!prepareTest(test, harnesses, babel)) {
      fs.writeFileSync(
        path.join(resultDir, `${id}.json`), 
        JSON.stringify({ id, result: {compileError: true} })
      );
    }

    // start test
    const start = process.hrtime();
    try { 
      exec(`java -jar ${TAJS_JAR_PATH} ${TEMP_FILE_PATH}`, TIMEOUT); 
    } catch (e) {
      fs.writeFileSync(
        path.join(errorDir, `${id}`), 
        e.code === "ETIMEDOUT" ? "TIMEOUT" : String(e.stderr)
      );
    }
    const [sec, nano] = process.hrtime(start);
    const time =  sec + (nano / 1000000000);
    const result = readJson(TAJS_RESULT_PATH);

    // dump test result
    fs.writeFileSync(
      path.join(resultDir, `${id}.json`), 
      JSON.stringify({ id, time, result })
    );
    exec(`rm ${TAJS_HOME}/result.json`);
  });

  // clean
  cleanTAJS(babel);
}

// get SAFE analyzer result
function setupSAFE(babel) {
  if (!babel) applyPatch(TEST262_HOME, TEST262_DIFF_PATH);
  applyPatch(SAFE_HOME, SAFE_DIFF_PATH);
  exec(`cd ${SAFE_HOME} && sbt compile`);
  
  if (!babel) {
    cleanDir(SAFE_RESULT_HOME);
    cleanDir(SAFE_ERROR_HOME);
  } else {
    cleanDir(COMPILED_SAFE_RESULT_HOME);
    cleanDir(COMPILED_SAFE_ERROR_HOME);
  }
}
function cleanSAFE(babel) {
  exec(`rm ${TEMP_FILE_PATH}`);
  if (!babel) revertPatch(TEST262_HOME, TEST262_DIFF_PATH);
  revertPatch(SAFE_HOME, SAFE_DIFF_PATH);
}
function getSAFE(babel, SLICE_START = 0, SLICE_END = 18556) {
  // load test description
  const testDescs = readJson(TEST_DESC_PATH);
  const errorDir = babel ? COMPILED_SAFE_ERROR_HOME : SAFE_ERROR_HOME;
  const resultDir = babel ? COMPILED_SAFE_RESULT_HOME : SAFE_RESULT_HOME;

  // setup
  setupSAFE(babel);
  
  // run tests
  testDescs.slice(SLICE_START, SLICE_END).forEach(([test, harnesses], offset) => {
    const id = SLICE_START + offset;
    console.log(test, id);

    // prepare test
    if (!prepareTest(test, harnesses, babel)) {
      fs.writeFileSync(
        path.join(resultDir, `${id}.json`), 
        JSON.stringify({ id, result: {compileError: true} })
      );
    }

    // start test
    const start = process.hrtime();
    try { 
      exec(`safe analyze ${TEMP_FILE_PATH}`, TIMEOUT);
    } catch(e) {
      fs.writeFileSync(
        path.join(errorDir, `${id}`), 
        e.code === "ETIMEDOUT" ? "TIMEOUT" : String(e.stderr)
      );
    }
    const [sec, nano] = process.hrtime(start);
    const time =  sec + (nano / 1000000000);
    const result = readJson(SAFE_RESULT_PATH);

    // dump test result
    fs.writeFileSync(
      path.join(resultDir, `${id}.json`), 
      JSON.stringify({ id, time, result })
    );
    exec(`rm ${SAFE_RESULT_PATH}`);
  });

  // clean
  cleanSAFE(babel);
}

// possible types
const TYPES = ["absent", "undefined", "null", "bool", "num", "str", "addr", "bigint"];

// concrete value
class Value {
  constructor(raw) {
    this.v = raw;
    if (typeof raw === "boolean") this.type = "bool";
    else if (typeof raw === "string") this.type = "str";
    else if (typeof raw === "number") this.type = "num";
    else if (typeof raw === "object") {
      if (raw === null) this.type = "null";
      else if (raw.hasOwnProperty("neginf")) { this.type = "num"; this.v = -Infinity }
      else if (raw.hasOwnProperty("posinf")) { this.type = "num"; this.v = Infinity }
      else if (raw.hasOwnProperty("negzero")) { this.type = "num"; this.v = -0 }
      else if (raw.hasOwnProperty("nan")) { this.type = "num"; this.v = NaN }
      else if (raw.hasOwnProperty("bigint")) { this.type = "bigint"; this.v = BigInt(raw.bigint); }
      else if (raw.hasOwnProperty("undefined")) { this.type = "undefined"; this.v = undefined }
      else throw new Error(`Unknown value: ${raw}`);
    }
    else throw new Error(`Unknown value: ${raw}`);
  }
}

// abstract value
class AbsValue {
  constructor(json) {
    try {
    this.absent = json.absent;
    this.undefined = json.undefined;
    this.null = json.null;
    this.bool = json.bool;
    this.num = json.num;
    this.str = json.str;
    this.addr = json.addr;
    this.bigint = json.bigint;
    } catch (e) {
      console.log(json);
      throw e;
    }
  }
  
  checkBot(type) { return this[type].hasOwnProperty("BOT"); }
  checkTop(type) { return this[type].hasOwnProperty("TOP"); }

  // test with concrete value
  test(value) {
    let [refined, precise] = this.refine(value.type);
    if (refined.hasOwnProperty("BOT")) return [false, false]; // unsound
    else {
      try {
        if (isSameValue(this.getSingle(value.type), value.v)) {
          // console.log(precise, value.v, this.getSingle(value.type), this);
          return [true, precise]; // sound
        }
        else return [false, false]; // unsound
      } catch(e) { return [true, false]; } // sound but not precise(TOP)
    }
  }
  

  // refine abs value to specific type
  refine(type) {
    if (!TYPES.some(t => t === type))
      throw new Error(`Unknown type: ${type}`);
    let precise = TYPES.filter(t => t !== type).every(t => this.checkBot(t));
    return [this[type], precise];
  }

  // get singleton value
  getSingle(type) {
    const [refined, _] = this.refine(type);
    // refined should not be bottom
    if (refined.hasOwnProperty("BOT"))
      throw new Error(`${type} is bottom: ${this}`);
    switch (type) {
      case "absent": throw new Error("Can't get absent value");
      case "undefined": return undefined;
      case "null": return null;
      case "bool":
      case "num":
      case "bigint":
      case "str":
      case "addr": {
        // bool, num, str, addr might be TOP
        if (refined.hasOwnProperty("TOP")) 
          throw new Error(`${type} is top: ${this}`);
        // NaN
        if (type === "num" && refined.hasOwnProperty("nan")) return NaN;
        // +Infinity
        else if (type === "num" && refined.hasOwnProperty("posinf")) return Infinity;
        // -Infinity
        else if (type === "num" && refined.hasOwnProperty("neginf")) return -Infinity;
        // -0
        else if (type === "num" && refined.hasOwnProperty("negzero")) return -0;
        // bigint
        else if (type === "bigint") return BigInt(refined.bigint);
        // otherwise
        else return refined;
      }
      default: throw new Error(`Unknown type: ${type}`);
    }
  }
}

// compare state
function compareState(concrete, absState) {
  return concrete.map(([[base, ...path], raw]) => {
    // if variable is not defined, unsound
    if (absState.env[base] === undefined) return [false, false];

    // follow path and get abstract value
    let [sound, precise] = [true, true];
    let remains = path; 
    let absValue = new AbsValue(absState.env[base]);
    let value = new Value(raw);

    for (let i = 0 ; i < path.length ; i += 1) {
      if (absValue.checkBot("addr")) return [false, false]; // unsound
      else if (absValue.checkTop("addr")) return [true, false]; // sound but not precise
      else {
        let [addr, p] = absValue.refine("addr");
        let absObj = absState.heap[addr];
        let propName = path[i];

        // if property not exist
        if (absObj[propName] === undefined) return [false, false]; // unsound
        else {
          precise = precise & p; // update precison
          absValue = new AbsValue(absObj[propName]); // get abs value from addr
        }
      }
    }
    
    // check value with abs value
    return absValue.test(value);
  });
}

// result 
class Result {
  constructor(error, reachability, state, raw) {
    this.error = error;
    this.reachability = reachability; // [pass, fail]
    this.state = state; // Array of [sound, precise]
    this.raw = raw;

    // soundness & precision
    this.sound = !this.error && this.reachability[0] && this.state.every(([sound, _]) => sound);
    if (this.sound) {
      const precise = this.state.filter(([sound, precise]) => sound && precise).length + (this.reachability[1] ? 0 : 1);
      const total = this.state.length + 1;
      this.precision =  precise / total;
    }
    else this.precision = 0;
  }
  
  getTag() {
    if (this.error) return "ERROR";
    else return this.sound ? "SOUND" : "UNSOUND";
  }

  getData() {
    const time = this.getTag() === "ERROR" ? this.raw.time : this.raw.result.analysisTime;
    const tag = this.getTag();
    const precision = this.precision;
    return [time, tag, precision];
  }
  
  getPlotData() {
    const analysisTime = this.raw.result.analysisTime;
    return [this.precision, analysisTime, Math.log10(analysisTime * 1000)];
  }
}
function getResult(concrete, analyzer) {
  // error
  if (analyzer.result.hasOwnProperty("error") || analyzer.result.hasOwnProperty("compileError"))
    return new Result(true, [], [], analyzer);
  // top
  else if (analyzer.result.hasOwnProperty("top")) return new Result(false, [true, true], [], analyzer);
  // otherwise
  else {
    const {pass, fail} = analyzer.result;
    const reachability = [pass, fail];
    let state = [];
    if (pass) { 
      state = compareState(concrete, analyzer.result.state); 
      // for (let i = 0 ; i < concrete.length; i += 1) {
      //   console.log(concrete[i], state[i]);
      // }
    }
    return new Result(false, reachability, state, analyzer);
  }
}

function getSummary(babel) {
  const testDescs = readJson(TEST_DESC_PATH);
  const testDates = readJson(TEST_DATE_PATH);
  
  // load LoC
  const locFile = TEST_LOC_PATH;
  const compiledLocFile = COMPILED_TEST_LOC_PATH;
  const testLoC = fs
    .readFileSync(locFile, "UTF-8")
    .split("\n")
    .map(n => parseInt(n));
  const compiledTestLoc = fs
    .readFileSync(compiledLocFile, "UTF-8")
    .split("\n")
    .map(n => parseInt(n));
  
  const row = [["analyzer", "precision", "time", "time-log"]];
  const summary = testDescs.map(([test, _], id) => {
    const getRawData = (baseDir) =>
      readJson(path.join(baseDir, `${id}.json`))

    // read concrete raw data
    const concreteRaw = getRawData(CONCRETE_RESULT_HOME);
    
    // get result from analyzer's raw data
    const analyerResults =
      [TAJS_RESULT_HOME, COMPILED_TAJS_RESULT_HOME,
        SAFE_RESULT_HOME, COMPILED_SAFE_RESULT_HOME, JSAVER_RESULT_HOME]
      .map(baseDir => getResult(concreteRaw, getRawData(baseDir)));

    // plot data
    if (analyerResults.every(_ => _.sound))
      analyerResults.forEach((res, idx) => {
        row.push([idx + 1, ...res.getPlotData()]);
      })

    // summary data
    return [
      id, 
      test, 
      getDateStr(testDates[test]),
      testLoC[id],
      compiledTestLoc[id],
      ...analyerResults.map(_ => _.getData()).flat()
    ];
  });

  // summary 
  fs.writeFileSync(
    `./result/summary.csv`,
    summary.map(data => data.join(",")).join("\n")
  );

  // plot
  fs.writeFileSync(
    "./result/data.csv",
    row.map(r => r.join(",")).join("\n")
  );
}

// get configurability
function getConfigurability() {
  const testDescs = readJson(TEST_DESC_PATH);
  const testDates = readJson(TEST_DATE_PATH);
  const testLoC = fs
    .readFileSync(TEST_LOC_PATH, "UTF-8")
    .split("\n")
    .map(n => parseInt(n));
  
  const row = [[
    "id", "name", "#loc", 
    "0-time", "0-sound", "0-pre", 
    "1-time", "1-sound", "1-pre", 
    "2-time", "2-sound", "2-pre", 
    "3-time", "3-sound", "3-pre", 
    "4-time", "4-sound", "4-pre", 
    "20-perf", "20-sound", "20-pre"
  ]];
  testDescs.forEach(([test, _], id) => {
    // console.log(id, test);

    // read raw data
    const concrete = readJson(path.join(CONCRETE_RESULT_HOME, `${id}.json`));
    const jsaver_0 = readJson(path.join(JSAVER_0_RESULT_HOME, `${id}.json`));
    const jsaver_1 = readJson(path.join(JSAVER_1_RESULT_HOME, `${id}.json`));
    const jsaver_2 = readJson(path.join(JSAVER_2_RESULT_HOME, `${id}.json`));
    const jsaver_3 = readJson(path.join(JSAVER_3_RESULT_HOME, `${id}.json`));
    const jsaver_4 = readJson(path.join(JSAVER_4_RESULT_HOME, `${id}.json`));
    const jsaver_20 = readJson(path.join(JSAVER_RESULT_HOME, `${id}.json`));

    // result
    const j_0_res = getResult(concrete, jsaver_0);
    const j_1_res = getResult(concrete, jsaver_1);
    const j_2_res = getResult(concrete, jsaver_2);
    const j_3_res = getResult(concrete, jsaver_3);
    const j_4_res = getResult(concrete, jsaver_4);
    const j_20_res = getResult(concrete, jsaver_20);

    row.push([
      id, 
      test, 
      testLoC[id],

      // 0-CFA
      j_0_res.getTag() === "ERROR" ? jsaver_0.time : jsaver_0.result.analysisTime,
      j_0_res.getTag(),
      j_0_res.precision,

      // 1-CFA
      j_1_res.getTag() === "ERROR" ? jsaver_1.time : jsaver_1.result.analysisTime,
      j_1_res.getTag(),
      j_1_res.precision,

      // 2-CFA
      j_2_res.getTag() === "ERROR" ? jsaver_2.time : jsaver_2.result.analysisTime,
      j_2_res.getTag(),
      j_2_res.precision,

      // 3-CFA
      j_3_res.getTag() === "ERROR" ? jsaver_3.time : jsaver_3.result.analysisTime,
      j_3_res.getTag(),
      j_3_res.precision,

      // 4-CFA
      j_4_res.getTag() === "ERROR" ? jsaver_4.time : jsaver_4.result.analysisTime,
      j_4_res.getTag(),
      j_4_res.precision,

      // 20-CFA
      j_20_res.getTag() === "ERROR" ? jsaver_20.time : jsaver_20.result.analysisTime,
      j_20_res.getTag(),
      j_20_res.precision,
    ]);
  });

  // summary 
  fs.writeFileSync(
    "./result/configurability.csv",
    row.map(r => r.join(",")).join("\n")
  );
}

// extract summary by features
class Summary {
  constructor() {
    this.count = 0;
  }
  update(result) {
    if (result.getTag() === "SOUND") this.count ++;
  }
}

// extract features
function getFeatureSummary() {
  const testDescs = readJson(TEST_DESC_PATH);
  const summaryMap = new Map();
  
  // collect features and init summary
  const totalFeatures = new Set();
  totalFeatures.add("<NONE>");
  testDescs.forEach(_ => _[3].forEach(_ => totalFeatures.add(_)));
  Array.from(totalFeatures).forEach(f => {
    summaryMap.set(f, [new Summary(), new Summary(), new Summary()]);
  });

  // make summary
  testDescs.forEach(([test, _, es5, testFeatures], id)  => {
    // read raw data
    const concrete = readJson(path.join(CONCRETE_RESULT_HOME, `${id}.json`));
    const tajs = readJson(path.join(TAJS_RESULT_HOME, `${id}.json`));
    const safe = readJson(path.join(SAFE_RESULT_HOME, `${id}.json`));
    const jsaver = readJson(path.join(JSAVER_RESULT_HOME, `${id}.json`));

    // result
    const t_res = getResult(concrete, tajs);
    const s_res = getResult(concrete, safe);
    const j_res = getResult(concrete, jsaver);
    
    const features = testFeatures.length === 0 ? ["<NONE>"] : testFeatures;
    features.forEach(f => {
      const [t_sum, s_sum, j_sum] = summaryMap.get(f);
      t_sum.update(t_res);
      s_sum.update(s_res);
      j_sum.update(j_res);
    });
  });

  // summary 
  const row = [["feature", "tajs", "safe", "jsaver"]];
  Array.from(totalFeatures).forEach(f => {
    const [t_sum, s_sum, j_sum] = summaryMap.get(f);
    row.push([f, t_sum.count, s_sum.count, j_sum.count]);
  });
  fs.writeFileSync(
    "feature.csv",
    row.map(r => r.join(",")).join("\n")
  );
}

// get lines of code
function getLoC(babel) {
  if (!babel) applyPatch(TEST262_HOME, TEST262_DIFF_PATH);

  const testDescs = readJson(TEST_DESC_PATH);
  const summary = testDescs.map(([test, harnesses]) => {
    // prepare test
    if (!prepareTest(test, harnesses, babel)) return 0;
    
    const file = fs.readFileSync(TEMP_FILE_PATH, "utf-8");
    let formatted = "";
    
    const parsers = ["babel", "typescript", "espree"];
    for (let i = 0 ; i < parsers.length && formatted == ""; i += 1)
      try { formatted = prettier.format(file, { parser: parsers[i] }); } catch { }
    return formatted.split("\n").length;
  });

  const locFile = babel ? COMPILED_TEST_LOC_PATH : TEST_LOC_PATH;
  fs.writeFileSync(
    locFile,
    summary.join("\n")
  );
  exec(`rm ${TEMP_FILE_PATH}`);
  if (!babel) revertPatch(TEST262_HOME, TEST262_DIFF_PATH);
}

exec(`mkdir -p ${ERROR_HOME}`);
const argv = require('yargs')
  .scriptName('jsaver-eval')
  .option('tajs', {
    alias: 't',
    describe: 'get TAJS analyzer results',
    type: 'boolean',
  })
  .option('safe', {
    alias: 'e',
    describe: 'get SAFE analyzer results',
    type: 'boolean',
  })
  .option('summary', {
    alias: 's',
    describe: 'get summary',
    type: 'boolean',
  })
  .option('configurability', {
    alias: 'c',
    describe: 'get config',
    type: 'boolean',
  })
  .option('feature', {
    alias: 'f',
    describe: 'get feature summary',
    type: 'boolean',
  })
  .option('apply', {
    alias: 'a',
    describe: 'apply test262 patch',
    type: 'boolean',
  })
  .option('revert', {
    alias: 'r',
    describe: 'revert test262 patch',
    type: 'boolean',
  })
  .option('babel', {
    alias: 'b',
    describe: 'use babel result',
    type: 'boolean',
  })
  .option('loc', {
    alias: 'l',
    describe: 'calculates LoC of test262',
    type: 'boolean'
  })
  .alias('help', 'h')
  .argv;

if (argv.tajs) getTAJS(argv.babel);
if (argv.safe) getSAFE(argv.babel);
if (argv.apply) applyPatch(TEST262_HOME, TEST262_DIFF_PATH);
if (argv.revert) revertPatch(TEST262_HOME, TEST262_DIFF_PATH);
if (argv.configurability) getConfigurability();
if (argv.summary) getSummary();
if (argv.loc) getLoC(argv.babel);
if (argv.feature) getFeatureSummary();

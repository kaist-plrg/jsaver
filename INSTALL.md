# Installation Guide

We explain how to install JSAVER with necessary environment settings from the
scratch.  Before installation, please download [JDK
8](https://www.oracle.com/java/technologies/java8.html) and
[`sbt`](https://www.scala-sbt.org/1.x/docs/Installing-sbt-on-Linux.html).

## Download JSAVER

The source code of JSAVER and the dataset of our study are publicly available at
https://doi.org/10.5281/zenodo.6668789, and the latest version is maintained as
a GitHub repository:

```bash
$ git clone --recurse-submodules https://github.com/kaist-plrg/jsaver.git
```

Additionally, we packaged the artifact in a docker container.  If you want to
skip the environment setting, we recommend you to use it.  You can install the
docker by following the instruction in
[https://docs.docker.com/get-started/](https://docs.docker.com/get-started/)
and downlaod our docker image with the following command:
```
$ docker pull jhnaldo/fse22-jsaver
$ docker run -it -m=16g --rm jhnaldo/fse22-jsaver
# user: guest, password: guest
```
> **WARNING**: The docker image is 3GB large thus be patient when you download it
> and please assign more than 16GB memory for the docker engine.

## Environment Setting (!!IMPORTANT!!)

Insert the following commands to `~/.bashrc` (or `~/.zshrc`):
```bash
# for JSAVER
export JSAVER_HOME="<path to JSAVER>"
export PATH="$JSAVER_HOME/bin:$PATH"
source $JSAVER_HOME/jsaver-auto-completion
```
The `<path to JSAVER>` should be the _absolute path_ of JSAVER repository.


## Installation of JSAVER using `sbt`
```bash
$ sbt assembly
```

> **NOTE**: It might take several minutes at the first time because of the
> installation of a proper `sbt` version.


## Basic Commands

You can run the artifact with the following command:
```bash
$ jsaver <sub-command> <option>* <filename>?
```
with the following sub-commands:
- `help` shows the help message.
- `extract` represents **Definitional Interpreter Extraction** phase that extracts a
  definitional interpreter from ECMA-262 defined in `ecma262/spec.html`.
  - `-extract:version={string}` is given, set the git version of ecma262.
  - `-extract:genModel` is given, generate models of the extracted definitional interpreter.
- `analyze` represents **Meta-Level State Analysis** phase that performs a
  meta-level static analysis for a given JavaScript program with the fixed
  definitional interpreter.
  - `-analyze:version={string}` is given, set the git version of ecma262.
  - `-analyze:repl={string}` is given, use a REPL for meta-level static analysis.
  - `-analyze:num={string}` is given, set number domain (`flat` or `interval`).
  - `-analyze:str={string}` is given, set string domain (`set-k`, `char-inc`, or `prefix-suffix`).
  - `-analyze:loop-iter={number}` is given, set maximum loop iteration.
  - `-analyze:loop-depth={number}` is given, set maximum loop depth.
  - `-analyze:js-k-cfa={number}` is given, set k for JavaScript callsite sensitivity.
  - `-analyze:ir-k-cfa={number}` is given, set k for IRES callsite sensitivity.
  - `-analyze:timeout={number}` is given, set timeout of analyzer (second), 0 for unlimited.
- `collect` collects the final concrete/abstract state of a JavaScript program
    (used only for evaluation).
  - `-collect:concrete` is given, collect concrete state.
  - `-collect:js-k-cfa={number}` is given, set k for JavaScript callsite sensitivity.

and global options:
- `-silent` is given, do not show final results.
- `-time` is given, display the duration time.

## Simple Examples

### Definitional Interpreter Extraction

You can extract a definitional interpreter from ECMA-262 using the `extract`
command.  If you want to extract the definitional interpreter from ES12
(ES2021), please type the following script:
```bash
$ jsaver extract -extract:version=es2021 -extract:genModel
========================================
 extract phase
----------------------------------------
version: es2021
parsing spec.html... (14,540 ms)
generating models... (8,560 ms)
* version: es2021
* grammar:
  - lexical production: 146
  - non-lexical production: 187
* algorithms:
  - incomplete: 276
  - complete: 2364
  - total: 2640
* algorithm steps:
  - incompleted: 460
  - total: 13543
* intrinsics: 67
* symbols: 14
* aoids: 507
```
You can freely set the target git version of ecma262 by changing the argument of
the `-extract:version` option, and the `-extract:genModel` dumps the extracted
definitional interpreter to use it during meta-level static analysis.

In this artifact, we extracted the definitional interpreter from ES2021 (ES12),
the latest version of ECMA-262, and manually filled out essential steps of its
not-yet-compiled parts.  If you want to see the compiled $\text{IR}_\text{ES}$
functions, please see the following directory:
- [`$JSAVER_HOME/src/main/resources/es2021/generated/algorithm`](./src/main/resources/es2021/generated/algorithm)

### Meta-Level Static Analysis

You can analyze a JavaScript file using the `analyze` command as follows:
```bash
$ jsaver analyze tests/js/addition1.js
========================================
 parse phase
----------------------------------------
========================================
 analyze phase
----------------------------------------
RunJobs:[call: ][loop: ]:RET:Function[2289] -> undefined
globals: {
  CONTEXT -> null
  SCRIPT_BODY -> ☊[ScriptBody](var x =...) @ 0x0df5f5c0
}
heap: {
  ...
}
```
It shows the final abstract state at the program exit point.  In addition, it
provides a read-eval-print loop (REPL) with the `-analyze:repl` option for more
convenience:
```bash
$ jsaver analyze tests/js/addition1.js -analyze:repl
========================================
 parse phase
----------------------------------------
========================================
 analyze phase
----------------------------------------

command list:
- help                     Show help message.
- continue                 Continue static analysis.
- move                     Move to specified control point.
- break                    Add a break point.
- list-break               Show the list of break points.
- rm-break                 Remove a break point.
- jump                     Jump to a specific iteration.
- print                    Print specific information
- log                      Dump the state.
- graph                    Dump the current control graph.
- exit                     Exit the type checking.
- stop                     Stop the repl.
- info                     Show abstract state of node
- entry                    Show the set of entry functions of current function
- worklist                 Show all the control points in the worklist
- find-merged              Find merged analysis results.

[1] RunJobs:[call: 0][loop: 0]:Entry[25909] -> {
  locals: {}
  globals: {
    SCRIPT_BODY: ☊[ScriptBody](var x =...) @ 0x7fb9f71f
  }
  heaps: {}
}

analyzer> continue
* Static analysis finished. (# iter: 2294)

analyzer> print -expr REALM.GlobalObject.SubMap.x.Value
3.0

analyzer> exit
stop for debugging
```

## How To Reproduce Evaluation Results

Now, we explain how to reproduce evaluation results for each figure and table.
Please go to the `eval` directory and install npm and pip3 packages for the
reproduction process.
```bash
$ cd $JSAVER_HOME/eval
$ npm install
$ pip3 install seaborn
```
The data of figures and tables are archived in the `data` directory as follows:
```
data
├── figure-10
│   └── template-literal-example.js
├── figure-11
│   └── k-cfa-data.csv
├── figure-12
│   ├── pipeline-operator-example.js
│   └── proposal.md
├── figure-13
│   ├── observable-example.js
│   └── proposal.md
├── figure-8
│   └── sound.csv
├── figure-9
│   ├── a_precision.csv
│   └── b_performance.csv
├── table-1
│   ├── all
│   ├── applicable-tests
│   ├── early-errors
│   ├── in-progress-features
│   ├── inapplicable-tests
│   ├── inessential-built-in-objects
│   ├── non-strict-and-module
│   └── web-browser-and-internationalization
└── table-2
    └── string-abstract-domain.md
```

### Raw Data Creation

In the `$JSAVER_HOME/eval/raw` directory, we zipped and archived the raw data of
evaluation results. Please unzip them for the remaining parts:
```bash
$ unzip raw/concrete.zip -d raw
$ unzip raw/jsaver.zip -d raw
$ unzip raw/jsaver_0.zip -d raw
$ unzip raw/jsaver_1.zip -d raw
$ unzip raw/jsaver_2.zip -d raw
$ unzip raw/jsaver_3.zip -d raw
$ unzip raw/jsaver_4.zip -d raw
$ unzip raw/tajs.zip -d raw
$ unzip raw/tajs-compiled.zip -d raw
$ unzip raw/safe.zip -d raw
$ unzip raw/safe-compiled.zip -d raw
```
> **NOTE**: We recommend using the archived raw data because it requires more
> than **10 hours** to create them from scratch.  Nevertheless, if you want to
> do it yourself, please follow the below instructions.

#### 1) JSAVER

```bash
# apply Test262 patch
$ node index.js -a

# concrete (about 1 hour)
$ jsaver collect -collect:concrete && mv $JSAVER_HOME/logs/collect/concrete raw

# jsaver (about 1 hour)
$ jsaver collect && mv $JSAVER_HOME/logs/collect/jsaver raw

# jsaver_k (about 1 hour per k)
$ jsaver collect -collect:js-k-cfa=0 && mv $JSAVER_HOME/logs/collect/jsaver raw/jsaver_0
$ jsaver collect -collect:js-k-cfa=1 && mv $JSAVER_HOME/logs/collect/jsaver raw/jsaver_1
$ jsaver collect -collect:js-k-cfa=2 && mv $JSAVER_HOME/logs/collect/jsaver raw/jsaver_2
$ jsaver collect -collect:js-k-cfa=3 && mv $JSAVER_HOME/logs/collect/jsaver raw/jsaver_3
$ jsaver collect -collect:js-k-cfa=4 && mv $JSAVER_HOME/logs/collect/jsaver raw/jsaver_4

# revert Test262 patch
$ node index.js -r
```

#### 2) TAJS

For TAJS, you should first install [Ant](https://ant.apache.org/bindownload.cgi).

```bash
# install TAJS
$ git clone --recursive https://github.com/cs-au-dk/TAJS.git

# environment setting
$ export TAJS_HOME="$JSAVER_HOME/eval/TAJS"

# tajs (about 1 hour)
$ node index.js -t

# tajs-compiled (about 1 hour)
$ node index.js -t -b
```

#### 3) SAFE

```bash
# install SAFE
$ git clone --recursive https://github.com/sukyoung/safe.git

# environment setting
$ export SAFE_HOME="$JSAVER_HOME/eval/safe"

# safe (about 1 hour)
$ node index.js -e

# safe-compiled (about 1 hour)
$ node index.js -e -b
```

### RQ1) Soundness (Section 6.1 - Figure 8)

First, please create the `output/soundness.csv` file using the following command:
```bash
$ node index -s
```
Then, copy and paste the data in `output/soundness.csv` to the `data` tab in
the `output/soundness.xlsx` file. The remaining tabs show Figure 8 (a)-(e):
- **(a)** `tajs` tab
- **(b)** `safe` tab
- **(c)** `jsaver` tab
- **(d)** `tajs+babel` tab
- **(e)** `safe+babel` tab

### RQ2) Precision (Section 6.2 - Figure 9)

Please create the `output/plot-data.csv` file and draw Figure 9 using the
following commands:
```bash
# create output/plot-data.csv
$ node index -p

# draw Figure 9 (a) and (b)
$ python3 plot.py output/plot-data.csv
```

### RQ3) Configurability (Section 6.3 - Figure 10 / Figure 11)

#### Abstract Domain

The JavaScript code of Figure 10 is stored in
`data/figure-10/template-literal-example.js`. Please analyze it with a _String
Set_ ($\textsf{SS}_5$) domain and check the analysis result using REPL of
JSAVER:
```bash
$ jsaver analyze data/figure-10/template-literal-example.js \
    -analyze:repl -analyze:str=set-5
========================================
 parse phase
----------------------------------------
========================================
 analyze phase
----------------------------------------

command list: ...

analyzer> continue
...

analyzer> print -expr REALM.GlobalEnv.DeclarativeRecord.SubMap.x.BoundValue
{"a", "b"}

analyzer> print -expr REALM.GlobalEnv.DeclarativeRecord.SubMap.y.BoundValue
{"cad", "cbd"}

analyzer> print -expr REALM.GlobalEnv.DeclarativeRecord.SubMap.z.BoundValue
{"aea", "aeb", "bea", "beb"}

analyzer> exit
stop for debugging
```

Similarly, you can analyze this program with different abstract string domains,
such as _Character Inclusion_ ($\textsf{CI}$) and _Prefix-Suffix_
($\textsf{PS}$) with `-analyze:str=char-inc` and `-analyze:str=prefix-suffix`
options, respectively:
```bash
$ jsaver analyze data/figure-10/template-literal-example.js \
    -analyze:repl -analyze:str=char-inc
...

analyzer> continue
...

analyzer> print -expr REALM.GlobalEnv.DeclarativeRecord.SubMap.x.BoundValue
<[], [ab]>

analyzer> print -expr REALM.GlobalEnv.DeclarativeRecord.SubMap.y.BoundValue
<[cd], [abcd]>

analyzer> print -expr REALM.GlobalEnv.DeclarativeRecord.SubMap.z.BoundValue
<[e], [abe]>

analyzer> exit
stop for debugging

$ jsaver analyze data/figure-10/template-literal-example.js \
    -analyze:repl -analyze:str=prefix-suffix
...

analyzer> continue
...

analyzer> print -expr REALM.GlobalEnv.DeclarativeRecord.SubMap.x.BoundValue
str

analyzer> print -expr REALM.GlobalEnv.DeclarativeRecord.SubMap.y.BoundValue
<c*, *d>

analyzer> print -expr REALM.GlobalEnv.DeclarativeRecord.SubMap.z.BoundValue
str

analyzer> exit
stop for debugging
```

#### Analysis Sensitivities

First, please create the `output/configurability.csv` file using the following command:
```bash
$ node index -c
```
Then, copy and paste the data in `output/configurability.csv` to the
`output/configurability.xlsx` file. You can see charts in Figure 11.

### RQ4) Adaptability (Section 6.4 - Figure 12 / Figure 13)

#### Pipeline Operator (`|>`)

```bash
# change the git version
$ git checkout proposal-pipeline-operator

# re-build JSAVER
$ cd $JSAVER_HOME && sbt assembly && cd eval

# analysis of the example code in Figure 13 with
# the internval number domain (-analyze:num=interval)
$ jsaver analyze data/figure-12/pipeline-operator-example.js \
    -analyze:repl -analyze:num=interval
...

analyzer> continue
...

analyzer> print -expr REALM.GlobalEnv.DeclarativeRecord.SubMap.a.BoundValue
[2.0, 200.0]

analyzer> print -expr REALM.GlobalEnv.DeclarativeRecord.SubMap.b.BoundValue
absent

analyzer> print -return
{~throw~ -> ... @ {
  #18:... -> OrdinaryObject {
    ...
    [11] "Prototype" -> #GLOBAL.TypeError.prototype
    ...
  }

analyzer> exit
stop for debugging
```

#### `Observable` Library

```bash
# change the git version
$ git checkout proposal-observable

# re-build JSAVER
$ cd $JSAVER_HOME && sbt assembly && cd eval

# analysis of the example code in Figure 13 with
# the internval number domain (-analyze:num=interval)
# and the prefix-suffix string domain (-analyze:str=prefix-suffix)
$ jsaver analyze data/figure-13/observable-example.js \
    -analyze:repl -analyze:num=interval -analyze:str=prefix-suffix
...

analyzer> continue
...

analyzer> print -expr REALM.GlobalEnv.DeclarativeRecord.SubMap.x.BoundValue
[6.0, 12.0]

analyzer> print -expr REALM.GlobalEnv.DeclarativeRecord.SubMap.y.BoundValue
<*, *123>

analyzer> exit
stop for debugging
```

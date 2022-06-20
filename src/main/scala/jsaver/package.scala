package object jsaver {
  // Line seperator
  val LINE_SEP = System.getProperty("line.separator")

  // Base project directory root
  val BASE_DIR = System.getenv("JSAVER_HOME")

  // Log directory
  val LOG_DIR = s"$BASE_DIR/logs"
  val EXTRACT_LOG_DIR = s"$LOG_DIR/extract"
  val CFG_LOG_DIR = s"$LOG_DIR/cfg"
  val ANALYZE_LOG_DIR = s"$LOG_DIR/analyze"

  // Specification directory
  val ECMA262_DIR = s"$BASE_DIR/ecma262"
  val SPEC_HTML = s"$ECMA262_DIR/spec.html"

  // Tests directory root
  val TEST_DIR = s"$BASE_DIR/tests"
  val JS_DIR = s"$TEST_DIR/js"
  val TEST262_DIR = s"$TEST_DIR/test262"
  val TEST262_TEST_DIR = s"$TEST262_DIR/test"
  val TEST_DESC_PATH = s"$BASE_DIR/test_desc.json"

  // Current directory root
  val CUR_DIR = System.getProperty("user.dir")

  // ECMAScript version (ES12 / ECMASCript 2021 / es2021)
  var VERSION = "es2021"

  // Source code directory
  val SRC_DIR = s"$BASE_DIR/src/main/scala/jsaver"

  // Resource directory
  val RESOURCE_DIR = s"$BASE_DIR/src/main/resources"
  val VERSION_DIR = s"$RESOURCE_DIR/$VERSION"
  val ID_START_JSON = s"$RESOURCE_DIR/ID_Start.json"
  val ID_CONTINUE_JSON = s"$RESOURCE_DIR/ID_Continue.json"

  // Package name
  val PACKAGE_NAME = "jsaver"

  // Timeout
  val TIMEOUT = 10
  val ANALYSIS_TIMEOUT = 60L

  // Debugging mode
  var DEBUG: Boolean = false

  // Interactive debugging mode
  var INTERACTIVE: Boolean = false

  // Bugfix mode
  var BUGFIX: Boolean = true

  // Logging mode
  var LOG: Boolean = false

  // triple double quations marks
  val TRIPLE = "\"\"\""

  // Test mode
  var TEST_MODE: Boolean = false
}

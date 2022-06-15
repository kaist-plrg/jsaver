import scalariform.formatter.preferences._
import sbtassembly.AssemblyPlugin.defaultUniversalScript

ThisBuild / version       := "1.0"
ThisBuild / scalaVersion  := "2.13.1"
ThisBuild / organization  := "kr.ac.kaist.jsaver"
ThisBuild / useSuperShell := false
ThisBuild / scalacOptions := Seq(
  "-deprecation", "-feature", "-language:postfixOps",
  "-language:implicitConversions", "-language:existentials",
  "-language:reflectiveCalls", "-unchecked",
)
ThisBuild / javacOptions ++= Seq(
  "-encoding", "UTF-8"
)

// automatic reload
Global / onChangedBuildSource := ReloadOnSourceChanges

// test
lazy val basicTest = taskKey[Unit]("Launch basic analysis tests")
lazy val test262Test = taskKey[Unit]("Launch Test262 analysis tests")
lazy val test262BabelTest = taskKey[Unit]("Launch Test262 analysis tests with Babel")

// jsaver
lazy val jsaver = (project in file("."))
  .settings(
    name := "JSAVER",
    libraryDependencies ++= Seq(
      "io.circe" %%% "circe-core" % "0.14.1",
      "io.circe" %%% "circe-generic" % "0.14.1",
      "io.circe" %%% "circe-parser" % "0.14.1",
      "org.scala-lang.modules" %%% "scala-parser-combinators" % "1.1.2",
      "org.scalatest" %% "scalatest" % "3.0.8" % "test",
      "org.jsoup" % "jsoup" % "1.13.1",
      "org.jline" % "jline" % "3.13.3",
      "org.apache.commons" % "commons-text" % "1.8",
      "org.scala-js" %% "scalajs-stubs" % "1.0.0" % "provided",
    ),
    retrieveManaged := true,
    // test setting
    testOptions in Test += Tests.Argument("-fDG", baseDirectory.value + "/tests/detail"),
    parallelExecution in Test := true,
    // scalariform setting
    scalariformPreferences := scalariformPreferences.value
      .setPreference(DanglingCloseParenthesis, Force)
      .setPreference(DoubleIndentConstructorArguments, false),
    // assembly setting
    test in assembly := {},
    assemblyOutputPath in assembly := file("bin/jsaver"),
    assemblyOption in assembly := (assemblyOption in assembly).value
      .copy(prependShellScript = Some(defaultUniversalScript(shebang = false))),
    basicTest := (testOnly in Test).toTask(" *.analyzer.BasicTest").value,
    test262Test := (testOnly in Test).toTask(" *.analyzer.Test262Test").value,
    test262BabelTest := (testOnly in Test).toTask(" *.test262.Test262BabelTest").value,
  )

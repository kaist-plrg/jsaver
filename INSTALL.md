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
  - `-analyze:loop-iter={number}` is given, set maximum loop iteration.
  - `-analyze:loop-depth={number}` is given, set maximum loop depth.
  - `-analyze:js-k-cfa={number}` is given, set k for JavaScrpt callsite sensitivity.
  - `-analyze:ir-k-cfa={number}` is given, set k for IRES callsite sensitivity.
  - `-analyze:timeout={number}` is given, set timeout of analyzer (second), 0 for unlimited.

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

TODO

### Raw Data Creation

TODO

### RQ1) Soundness (Section 6.1)

TODO

### RQ2) Precision (Section 6.2)

TODO

### RQ3) Configurability (Section 6.3)

TODO

### RQ4) Adaptability (Section 6.4)

TODO

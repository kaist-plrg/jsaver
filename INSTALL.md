# Installation Guide

We explain how to install JSAVER with necessary environment settings from the
scratch.  Before installation, please download JDK 8 and
[`sbt`](https://www.scala-sbt.org/1.x/docs/Installing-sbt-on-Linux.html).

## Requirements

### Machine Requirements
| Name              | Requirements   |
|:-----------------:|:---------------|
| Memory            | ≥ 16GB         |
| Operating System  | Linux or macOS |

### Programming Language Environments
| Name                                                        | Description                          |
|:-----------------------------------------------------------:|:-------------------------------------|
| [jdk8](https://www.oracle.com/java/technologies/java8.html) | Java Standard Edition 8              |
| [sbt](https://www.scala-sbt.org/)                           | An interactive build tool for Scala  |
| [bash](https://www.gnu.org/software/bash/)                  | GNU Bash (version >= 3.2.57)         |


## Download JSAVER

TODO - Zenodo / Docker

```bash
$ git clone --recurse-submodules https://github.com/kaist-plrg/jsaver.git
```

## Environment Setting (!!IMPORTANT!!)

Insert the following commands to `~/.bashrc` (or `~/.zshrc`):
```bash
# for JSAVER
export JSAVER_HOME="<path to JSAVER>"
export PATH="$JSAVER_HOME/bin:$PATH"
```
The `<path to JSAVER>` should be the _absolute path_ of JSAVER repository.


## Installation of JSAVER using `sbt`
```bash
$ sbt assembly
```

_NOTE_: It might take several minutes at the first time because of the
installation of a proper `sbt` version.


## Basic Commands

TODO - remove or merge unnecessary commands

You can run the artifact with the following command:
```bash
$ jsaver <sub-command> <option>*
```
with the following sub-commands:
- `help` shows the help message.
- `extract` represents **Definitional Interpreter Extraction** phase that extracts a
  definitional interpreter from ECMA-262 defined in `ecma262/spec.html`.
  - `-extract:version={string}` is given, set the git version of ecma262.
- `build-cfg` builds control flow graph (CFG).
- `analyze` represents **Meta-Level State Analysis** phase that
  performs a meta-level static analysis for a given JavaScript program with the
  fixed definitional interpreter.
  - `-analyze:exec-level={number}` is given, use concrete execution to check soundness.
  - `-analyze:gc` is given, use abstract garbage collection.
  - `-analyze:inf-sens` is given, use infinite sensitivity.
  - `-analyze:loop-iter={number}` is given, set maximum loop iteration.
  - `-analyze:loop-depth={number}` is given, set maximum loop depth.
  - `-analyze:js-k-cfa={number}` is given, set k for JavaScrpt callsite sensitivity.
  - `-analyze:ir-k-cfa={number}` is given, set k for IRES callsite sensitivity.
  - `-analyze:timeout={number}` is given, set timeout of analyzer (second), 0 for unlimited.

and global options:
- `-silent` is given, do not show final results.
- `-debug` is given, turn on the debug mode.
- `-log` is given, turn on the logging mode.
- `-time` is given, display the duration time.

_NOTE_: We omitted several options for the brevity. Please see the other
options using `jsaver help` command.

## Simple Examples

TODO

## How To Reproduce Evaluation Results

TODO

### Raw Data Creation

TODO

### Drawing Figures and Tables

TODO

### RQX) ...

TODO

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
  - `-genModel` is given, generate models of the extracted definitional interpreter.
- `analyze` represents **Meta-Level State Analysis** phase that performs a
  meta-level static analysis for a given JavaScript program with the fixed
  definitional interpreter.
  - `-analyze:loop-iter={number}` is given, set maximum loop iteration.
  - `-analyze:loop-depth={number}` is given, set maximum loop depth.
  - `-analyze:js-k-cfa={number}` is given, set k for JavaScrpt callsite sensitivity.
  - `-analyze:ir-k-cfa={number}` is given, set k for IRES callsite sensitivity.
  - `-analyze:timeout={number}` is given, set timeout of analyzer (second), 0 for unlimited.

and global options:
- `-silent` is given, do not show final results.
- `-time` is given, display the duration time.

## Simple Examples

TODO

## How To Reproduce Evaluation Results

TODO

### Raw Data Creation

TODO

### RQX) ...

TODO

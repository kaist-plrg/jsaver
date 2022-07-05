# JSAVER: JavaScript Static Analyzer via ECMAScript Representation

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.6785678.svg)](https://doi.org/10.5281/zenodo.6785678)
[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/jhnaldo/fse22-jsaver)](https://hub.docker.com/repository/docker/jhnaldo/fse22-jsaver)

JSAVER is a JavaScript Static Analyzer via ECMAScript Representation.  It is the
first tool that automatically derives JavaScript static analyzers from language
specifications using an _interpreter_-based approach called meta-level static
analysis instead of traditional a _compiler_-based approach.

This artifact extends [JISET](https://github.com/kaist-plrg/jiset), a JavaScript
IR-based Semantics Extraction Toolchain, to extract JavaScript definitional
interpreters from diverse versions of ECMA-262, the standard specification of
ECMAScript (the official name of JavaScript) written in English. The extracted
definitional interpreter is written in IR<sub>ES</sub>, an Intermediate
Representations for ECMAScript Specifications.


## Getting Started Guide

The source code of JSAVER and the dataset of our study are publicly available at
https://doi.org/10.5281/zenodo.6785678, and the latest version is maintained as
a GitHub repository:

```bash
$ git clone --recurse-submodules https://github.com/kaist-plrg/jsaver.git
```

Please see `INSTALL.md` for the detailed guide on installation and how to use
this artifact.  We also provide a docker image as follows:

```bash
$ docker run -it -m=16g --rm jhnaldo/fse22-jsaver
```

## Overall Structure

![image](https://user-images.githubusercontent.com/6766660/173753671-01981c6d-9ab2-4640-b2a8-f045b50cfbb4.png)

JSAVER consists of two phases: 1) definitional interpreter extraction and 2)
meta-level static analysis.

### Definitional Interpreter Extraction

We utilize another tool [JISET](https://github.com/kaist-plrg/jiset), a
JavaScript IR-based Semantics Extraction Toolchain, to extract JavaScript
definitional interpreters from given [ECMA-262](`./ecma262/`).  In this
artifact, we extracted the definitional interpreter from ES2021 (ES12), the
latest version of ECMA-262, and manually filled out essential steps of its
not-yet-compiled parts.  It consists of two different main parts for semantics
and syntax of JavaScript. For semantics, it compiles abstract algorithms in
ECMA-262 to corresponding [IR<sub>ES</sub>
Functions](./src/main/resources/es2021/generated/algorithm/).  For syntax, it
generates a [JavaScript
Parser](./src/main/scala/kr/ac/kaist/jsaver/js/Parser.scala) in Scala.


### Meta-Level Static Analysis

JSAVER performs a _meta-level static analysis_ with JavaScript as its
_defined_-language and IR<sub>ES</sub> as its _defining_-language.  Thus,
it indirectly analyzes a JavaScript program by analyzing IR<sub>ES</sub>
functions with the AST of the program as an argument.  Using the generated
parser, it first parses a given JavaScript program to produce an [Abstract
Syntax Tree (AST)](./src/main/scala/kr/ac/kaist/jsaver/js/AST.scala). Then,
[Analysis
Initializer](./src/main/scala/kr/ac/kaist/jsaver/analyzer/Initialize.scala)
constructs an initial [Abstract
State](./src/main/scala/kr/ac/kaist/jsaver/analyzer/domain/state/BasicState.scala)
with the extracted IR<sub>ES</sub> functions and the produced AST.
Finally, JSAVER computes the fixpoint of the [Abstract Transfer
Function](./src/main/scala/kr/ac/kaist/jsaver/analyzer/AbsTransfer.scala) with
the initial abstract state.

It utilizes a
[Worklist](./src/main/scala/kr/ac/kaist/jsaver/util/Worklist.scala) algorithm to
update the abstract state per [Control
Point](./src/main/scala/kr/ac/kaist/jsaver/analyzer/ControlPoint.scala), a pair
of the following two components:
- A [Node](./src/main/scala/kr/ac/kaist/jsaver/cfg/Node.scala) in
    [Control-Flow Graph](./src/main/scala/kr/ac/kaist/jsaver/cfg/CFG.scala) of
    the extracted definitional interpreter
- A [View](./src/main/scala/kr/ac/kaist/jsaver/analyzer/View.scala)
    that represents an analysis sensitivity.

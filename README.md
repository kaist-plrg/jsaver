# JSAVER: JavaScript Static Analyzer via ECMAScript Representation

**JSAVER** is a **J**avaScript **S**tatic **A**nalyzer **v**ia **E**CMAScript
**R**epresentation.  It is the first tool that automatically derives JavaScript
static analyzers from language specifications using an _interpreter_-based
approach called **meta-level static analysis** instead of traditional a
_compiler_-based approach.

This artifact extends [JISET](https://github.com/kaist-plrg/jiset) to extract
JavaScript definitional interpeters written in Intermediate Representations for
ECMAScript Specifications (IRES) from diverse versions of ECMA-262.


## Getting Started Guide
The artifact is open-source and anonymized for a double-binded review process.
Please see `INSTALL.md` for the detailed guide of installation and how to use
this artifact.


## Overall Structure

![image](https://user-images.githubusercontent.com/6766660/173753671-01981c6d-9ab2-4640-b2a8-f045b50cfbb4.png)

JSAVER consists of two phases: 1) definitional interpreter extraction and 2)
meta-level static analysis:

### 1) Definitional Interpreter Extraction
We utilizes another tool [**JISET**](https://github.com/kaist-plrg/jiset), which
is a **J**avaScript **I**R-based **S**emantics **E**xtraction **T**oolchain, to
extract JavaScript definitional interpeters from given ECMA-262.  In this
artifact, we extracted the definitional interpreter from ES2021 (ES21), the
latest version of ECMA-262, to `$JSAVER_HOME/src/main/resources/es2021` and
manually filled out essential steps in its not-yet-compiled parts.

### 2) Meta-Level Static Analysis
JSAVER performs a meta-level static analysis; it first builds a **Control-Flow
Graph** for a given definitional interpeter, then, it computes the fixpoint of
**Abstract Transfer Function** with **Initial Abstract State** restricted with a
given JavaScript program.  It utilizes a **Worklist** algorithm to update the
abstract state per **Control Point**, a pair of a **Control-Flow Graph Node**
and a **View** representing an analysis sensitivity.

- **Abstract Transfer Function** - `$JSAVER_SRC/analyzer/AbsTransfer.scala`
- **Initial Abstract State** - `$JSAVER_SRC/analyzer/Initialize.scala`
- **Control Point** - `$JSAVER_SRC/analyzer/ControlPoint.scala`
- **Control-Flow Graph** - `$JSAVER_SRC/cfg/CFG.scala`
- **Control-Flow Graph Nodes** - `$JSAVER_SRC/cfg/Node.scala`
- **View** - `$JSAVER_SRC/analyzer/View.scala`
- **Worklist** - `$JSAVER_SRC/util/Worklist.scala`

where `$JSAVER_SRC` denotes `$JSAVER_HOME/src/jsaver`.

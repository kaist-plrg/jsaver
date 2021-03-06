var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright 2020 Toru Nagashima.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-optional-chaining-chain-evaluation
description: optional call invoked on eval function should be indirect eval.
info: |
  Runtime Semantics: ChainEvaluation
    OptionalChain: ?. Arguments
      1. Let thisChain be this OptionalChain.
      2. Let tailCall be IsInTailPosition(thisChain).
      3. Return ? EvaluateCall(baseValue, baseReference, Arguments, tailCall).

  Runtime Semantics: EvaluateCall ( func, ref, arguments, tailPosition )

  ...
  7. Let result be Call(func, thisValue, argList).
  ...

  eval ( x )

  ...
  4. Return ? PerformEval(x, callerRealm, false, false).

  Runtime Semantics: PerformEval ( x, callerRealm, strictCaller, direct )
features: [optional-chaining]
---*/
var a = 'global';

function fn() {
  var a = 'local';
  return eval === null || eval === void 0 ? void 0 : (0, eval)('a');
}

assert.sameValue(fn(), 'global', 'fn() returns "global" value from indirect eval');

var b = function (a) {
  _newArrowCheck(this, _this);

  return eval === null || eval === void 0 ? void 0 : (0, eval)('a');
}.bind(this)('local');

assert.sameValue(b, 'global', 'b is "global", from indirect eval not observing parameter');
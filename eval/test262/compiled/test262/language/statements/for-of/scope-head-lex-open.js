function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
description: >
    Creation of new lexical environment to serve as a temporal dead zone for
    the statement's AssignmentExpresson
info: |
    IterationStatement : for ( ForDeclaration of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ?
       ForIn/OfHeadEvaluation(BoundNames of ForDeclaration,
       AssignmentExpression, iterate).
    [...]

    13.7.5.12 Runtime Semantics: ForIn/OfHeadEvaluation

    [...]
    2. If TDZnames is not an empty List, then
       a. Assert: TDZnames has no duplicate entries.
       b. Let TDZ be NewDeclarativeEnvironment(oldEnv).
       c. Let TDZEnvRec be TDZ's EnvironmentRecord.
       d. For each string name in TDZnames, do
          i. Perform ! TDZEnvRec.CreateMutableBinding(name, false).
       e. Set the running execution context's LexicalEnvironment to TDZ.
    3. Let exprRef be the result of evaluating expr.
    [...]
features: [let]
---*/
var x = 'outside';

var probeBefore = function probeBefore() {
  return x;
};

var probeExpr;

for (var _i = 0, _arr = (probeExpr = function probeExpr() {
  _typeof(x);
}, []); _i < _arr.length; _i++) {
  var _x = _arr[_i];
}

assert.sameValue(probeBefore(), 'outside');
assert["throws"](ReferenceError, probeExpr);
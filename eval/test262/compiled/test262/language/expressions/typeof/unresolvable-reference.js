function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-typeof-operator-runtime-semantics-evaluation
description: If IsUnresolvableReference(val) is true, return "undefined".
info: |
  The typeof Operator

  Runtime Semantics: Evaluation

    ...
    If Type(val) is Reference, then
      If IsUnresolvableReference(val) is true, return "undefined".
    ...

---*/
assert.sameValue(typeof x === "undefined" ? "undefined" : _typeof(x), "undefined", "typeof x === 'undefined'");
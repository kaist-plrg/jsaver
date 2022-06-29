function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-typeof-operator-runtime-semantics-evaluation
description: typeof Symbol() and Object(Symbol)
info: |
  The typeof Operator

  Runtime Semantics: Evaluation

    ...
    Return a String according to Table 35.

  #table-35

  Symbol "symbol"
  Object(Symbol()) "object"

features: [Symbol]
---*/
assert.sameValue(_typeof(Symbol()), "symbol", "typeof Symbol() === 'symbol'");
assert.sameValue(_typeof(Symbol("A")), "symbol", "typeof Symbol('A') === 'symbol'");
assert.sameValue(_typeof(Object(Symbol())), "object", "typeof Object(Symbol()) === 'object'");
assert.sameValue(_typeof(Object(Symbol("A"))), "object", "typeof Object(Symbol('A')) === 'object'");
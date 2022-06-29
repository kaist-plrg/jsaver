function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
  Test the first argument(target) of Object.Assign(target,...sources),
  if target is Symbol,the return value should be a new Symbol object whose [[SymbolData]] value is target.
es6id:  19.1.2.1.1
features: [Symbol]
---*/
var target = Symbol('foo');
var result = Object.assign(target, {
  a: 1
});
assert.sameValue(_typeof(result), "object", "Return value should be a symbol object.");
assert.sameValue(result.toString(), "Symbol(foo)", "Return value should be 'Symbol(foo)'.");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2017 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Jordan Harband
description: >
  Promise.prototype.finally called with a `this` value that does not define a
  callable `then` property
esid: sec-promise.prototype.finally
features: [Symbol, Promise.prototype.finally]
---*/
assert.sameValue(_typeof(Promise.prototype["finally"]), 'function');
var symbol = Symbol();

var thrower = function thrower() {
  throw new Test262Error('this should never happen');
};

var p = new Promise(function () {});
p.then = undefined;
assert["throws"](TypeError, function () {
  Promise.prototype["finally"].call(p, thrower);
}, 'undefined');
p.then = null;
assert["throws"](TypeError, function () {
  Promise.prototype["finally"].call(p, thrower);
}, 'null');
p.then = 1;
assert["throws"](TypeError, function () {
  Promise.prototype["finally"].call(p, thrower);
}, 'number');
p.then = '';
assert["throws"](TypeError, function () {
  Promise.prototype["finally"].call(p, thrower);
}, 'string');
p.then = true;
assert["throws"](TypeError, function () {
  Promise.prototype["finally"].call(p, thrower);
}, 'boolean');
p.then = symbol;
assert["throws"](TypeError, function () {
  Promise.prototype["finally"].call(p, thrower);
}, 'symbol');
p.then = {};
assert["throws"](TypeError, function () {
  Promise.prototype["finally"].call(p, thrower);
}, 'ordinary object');
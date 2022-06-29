function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.5
description: >
    class basics
---*/
var C = /*#__PURE__*/_createClass(function C() {
  _classCallCheck(this, C);
});

assert.sameValue(_typeof(C), 'function', "`typeof C` is `'function'`");
assert.sameValue(Object.getPrototypeOf(C.prototype), Object.prototype, "`Object.getPrototypeOf(C.prototype)` returns `Object.prototype`");
assert.sameValue(Object.getPrototypeOf(C), Function.prototype, "`Object.getPrototypeOf(C)` returns `Function.prototype`");
assert.sameValue(C.name, 'C', "The value of `C.name` is `'C'`");

var D = /*#__PURE__*/_createClass(function D() {
  _classCallCheck(this, D);
});

assert.sameValue(_typeof(D), 'function', "`typeof D` is `'function'`");
assert.sameValue(Object.getPrototypeOf(D.prototype), Object.prototype, "`Object.getPrototypeOf(D.prototype)` returns `Object.prototype`");
assert.sameValue(Object.getPrototypeOf(D), Function.prototype, "`Object.getPrototypeOf(D)` returns `Function.prototype`");
assert.sameValue(D.name, 'D', "The value of `D.name` is `'D'`");

var D2 = /*#__PURE__*/_createClass(function D2() {
  _classCallCheck(this, D2);
});

assert.sameValue(D2.name, 'D2', "The value of `D2.name` is `'D2'`");

var E = /*#__PURE__*/_createClass(function E() {
  _classCallCheck(this, E);
});

assert.sameValue(E.name, 'E', "The value of `E.name` is `'E'`");

var F = /*#__PURE__*/_createClass(function F() {
  _classCallCheck(this, F);
});

assert.sameValue(F.name, 'F', "The value of `F.name` is `'F'`");
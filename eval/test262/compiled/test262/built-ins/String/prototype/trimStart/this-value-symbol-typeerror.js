function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2017 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.trimStart
description: Type error when "this" value is a Symbol
info: |
  Runtime Semantics: TrimString ( string, where )
  2. Let S be ? ToString(str).

  ToString ( argument )
  Argument Type: Symbol
  Result: Throw a TypeError exception
features: [string-trimming, String.prototype.trimStart]
---*/
assert.sameValue(_typeof(String.prototype.trimStart), "function");
var trimStart = String.prototype.trimStart;
var symbol = Symbol();
assert["throws"](TypeError, function () {
  trimStart.call(symbol);
}, 'String.prototype.trimStart.call(Symbol())');
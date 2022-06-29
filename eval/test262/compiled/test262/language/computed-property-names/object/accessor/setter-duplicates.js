var _a, _A, _mutatorMap, _b, _B, _mutatorMap2, _c, _c2, _C, _mutatorMap3, _d, _d2, _D, _mutatorMap4;

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } if (Object.getOwnPropertySymbols) { var objectSymbols = Object.getOwnPropertySymbols(descs); for (var i = 0; i < objectSymbols.length; i++) { var sym = objectSymbols[i]; var desc = descs[sym]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, sym, desc); } } return obj; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    In an object, duplicate computed property getter names produce only a single property of
    that name, whose value is the value of the last property of that name.
---*/
var calls = 0;
var A = (_A = {}, _a = 'a', _mutatorMap = {}, _mutatorMap[_a] = _mutatorMap[_a] || {}, _mutatorMap[_a].set = function (_) {
  calls++;
}, _defineEnumerableProperties(_A, _mutatorMap), _A);
A.a = 'A';
assert.sameValue(calls, 1, "The value of `calls` is `1`");
calls = 0;
var B = (_B = {
  set b(_) {
    $ERROR("The `b` setter definition in `B` is unreachable");
  }

}, _b = 'b', _mutatorMap2 = {}, _mutatorMap2[_b] = _mutatorMap2[_b] || {}, _mutatorMap2[_b].set = function (_) {
  calls++;
}, _defineEnumerableProperties(_B, _mutatorMap2), _B);
B.b = 'B';
assert.sameValue(calls, 1, "The value of `calls` is `1`");
calls = 0;
var C = (_C = {
  set c(_) {
    $ERROR("The `c` setter definition in `C` is unreachable");
  }

}, _c = 'c', _mutatorMap3 = {}, _mutatorMap3[_c] = _mutatorMap3[_c] || {}, _mutatorMap3[_c].set = function (_) {
  $ERROR("The first `['c']` setter definition in `C` is unreachable");
}, _c2 = 'c', _mutatorMap3[_c2] = _mutatorMap3[_c2] || {}, _mutatorMap3[_c2].set = function (_) {
  calls++;
}, _defineEnumerableProperties(_C, _mutatorMap3), _C);
C.c = 'C';
assert.sameValue(calls, 1, "The value of `calls` is `1`");
calls = 0;
var D = (_D = {}, _d = 'd', _mutatorMap4 = {}, _mutatorMap4[_d] = _mutatorMap4[_d] || {}, _mutatorMap4[_d].set = function (_) {
  $ERROR("The `['d']` setter definition in `D` is unreachable");
}, _d2 = "d", _mutatorMap4[_d2] = _mutatorMap4[_d2] || {}, _mutatorMap4[_d2].set = function (_) {
  calls++;
}, _defineEnumerableProperties(_D, _mutatorMap4), _D);
D.d = 'D';
assert.sameValue(calls, 1, "The value of `calls` is `1`");
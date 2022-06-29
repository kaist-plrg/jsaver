var _a, _A, _mutatorMap;

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
assert.sameValue(calls, 1, "The value of `calls` is `1`, after executing `A.a = 'A';`");
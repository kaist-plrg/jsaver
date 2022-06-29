var _target, _mutatorMap;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } if (Object.getOwnPropertySymbols) { var objectSymbols = Object.getOwnPropertySymbols(descs); for (var i = 0; i < objectSymbols.length; i++) { var sym = objectSymbols[i]; var desc = descs[sym]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, sym, desc); } } return obj; }

// Copyright (C) 2021 Alexey Shvayka. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-object.assign
description: >
  [[Set]] to existing accessor property of non-extensible `target` is successful.
info: |
  OrdinaryPreventExtensions ( O )

  1. Set O.[[Extensible]] to false.

  Object.assign ( target, ...sources )

  [...]
  3. For each element nextSource of sources, do
    a. If nextSource is neither undefined nor null, then
      [...]
      iii. For each element nextKey of keys, do
        1. Let desc be ? from.[[GetOwnProperty]](nextKey).
        2. If desc is not undefined and desc.[[Enumerable]] is true, then
          [...]
          b. Perform ? Set(to, nextKey, propValue, true).

  OrdinarySetWithOwnDescriptor ( O, P, V, Receiver, ownDesc )

  [...]
  7. Perform ? Call(setter, Receiver, « V »).
  8. Return true.
features: [Symbol]
---*/
var value1 = 1;
var target1 = Object.preventExtensions({
  set foo(val) {
    value1 = val;
  }

});
Object.assign(target1, {
  foo: 2
});
assert.sameValue(value1, 2);
var sym = Symbol();
var value2 = 1;
var target2 = (_target = {}, _mutatorMap = {}, _mutatorMap[sym] = _mutatorMap[sym] || {}, _mutatorMap[sym].set = function (val) {
  value2 = val;
}, _defineEnumerableProperties(_target, _mutatorMap), _target);
Object.preventExtensions(target2);
Object.assign(target2, _defineProperty({}, sym, 2));
assert.sameValue(value2, 2);
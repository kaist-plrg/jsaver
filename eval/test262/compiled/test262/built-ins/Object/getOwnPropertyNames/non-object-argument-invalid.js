var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.getownpropertynames
description: >
    Object.getOwnPropertyNames called with an invalid non-object value
info: |
  GetOwnPropertyKeys ( O, type )

  Let obj be ? ToObject(O).
  Let keys be ? obj.[[OwnPropertyKeys]]().
  Let nameList be a new empty List.
  For each element nextKey of keys, do
    If Type(nextKey) is Symbol and type is symbol or Type(nextKey) is String and type is string, then
      Append nextKey as the last element of nameList.
  Return CreateArrayFromList(nameList).

features: [Symbol]
---*/
var count = 0;
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  count++;
  Object.getOwnPropertyNames(undefined);
}.bind(this), '`Object.getOwnPropertyNames(undefined)` throws TypeError');
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  count++;
  Object.getOwnPropertyNames(null);
}.bind(this), '`Object.getOwnPropertyNames(null)` throws TypeError');
assert.sameValue(count, 2, 'The value of `count` is 2');
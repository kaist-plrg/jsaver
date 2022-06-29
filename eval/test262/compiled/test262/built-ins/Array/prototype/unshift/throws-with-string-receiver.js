var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2020 Sony Interactive Entertainment Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.unshift
description: >
  Array#unshift throws TypeError upon attempting to modify a string
info: |
  Array.prototype.unshift ( ...items )
  ...
  4. If argCount > 0, then
    ...
    c. Repeat, while k > 0,
      ...
      iv. If fromPresent is true, then
        ...
        2. Perform ? Set(O, to, fromValue, true).
      ...
    ...
    f. Repeat, while items is not empty
      ...
      Perform ? Set(O, ! ToString(j), E, true).
      ...
  5. Perform ? Set(O, "length", len + argCount, true).

  Set ( O, P, V, Throw )
  ...
  4. Let success be ? O.[[Set]](P, V, O).
  5. If success is false and Throw is true, throw a TypeError exception.
---*/
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  Array.prototype.unshift.call('');
}.bind(this), "Array.prototype.unshift.call('')");
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  Array.prototype.unshift.call('', 1);
}.bind(this), "Array.prototype.unshift.call('', 1)");
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  Array.prototype.unshift.call('abc');
}.bind(this), "Array.prototype.unshift.call('abc')");
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  Array.prototype.unshift.call('abc', 1);
}.bind(this), "Array.prototype.unshift.call('abc', 1)");
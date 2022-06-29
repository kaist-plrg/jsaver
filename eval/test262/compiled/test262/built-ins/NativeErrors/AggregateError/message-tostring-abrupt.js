var _case,
    _this = this,
    _case2,
    _case3;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-aggregate-error
description: >
  Abrupt completions of ToString(message)
info: |
  AggregateError ( errors, message )

  ...
  5. If message is not undefined, then
    a. Let msg be ? ToString(message).
    b. Perform ! CreateMethodProperty(O, "message", msg).
  6. Return O.
features: [AggregateError, Symbol.toPrimitive]
---*/
var case1 = (_case = {}, _defineProperty(_case, Symbol.toPrimitive, function () {
  throw new Test262Error();
}), _defineProperty(_case, "toString", function toString() {
  throw 'toString called';
}), _defineProperty(_case, "valueOf", function valueOf() {
  throw 'valueOf called';
}), _case);
assert["throws"](Test262Error, function () {
  _newArrowCheck(this, _this);

  new AggregateError([], case1);
}.bind(this), 'toPrimitive');
var case2 = (_case2 = {}, _defineProperty(_case2, Symbol.toPrimitive, undefined), _defineProperty(_case2, "toString", function toString() {
  throw new Test262Error();
}), _defineProperty(_case2, "valueOf", function valueOf() {
  throw 'valueOf called';
}), _case2);
assert["throws"](Test262Error, function () {
  _newArrowCheck(this, _this);

  new AggregateError([], case2);
}.bind(this), 'toString');
var case3 = (_case3 = {}, _defineProperty(_case3, Symbol.toPrimitive, undefined), _defineProperty(_case3, "toString", undefined), _defineProperty(_case3, "valueOf", function valueOf() {
  throw new Test262Error();
}), _case3);
assert["throws"](Test262Error, function () {
  _newArrowCheck(this, _this);

  new AggregateError([], case3);
}.bind(this), 'valueOf');
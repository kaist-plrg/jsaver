var _this = this,
    _case;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-aggregate-error
description: >
  Abrupt completions of ToString(Symbol message)
info: |
  AggregateError ( errors, message )

  ...
  5. If message is not undefined, then
    a. Let msg be ? ToString(message).
    b. Perform ! CreateMethodProperty(O, "message", msg).
  6. Return O.
features: [AggregateError, Symbol, Symbol.toPrimitive]
---*/
var case1 = Symbol();
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  new AggregateError([], case1);
}.bind(this), 'toPrimitive');
var case2 = (_case = {}, _defineProperty(_case, Symbol.toPrimitive, function () {
  return Symbol();
}), _defineProperty(_case, "toString", function toString() {
  throw new Test262Error();
}), _defineProperty(_case, "valueOf", function valueOf() {
  throw new Test262Error();
}), _case);
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  new AggregateError([], case2);
}.bind(this), 'from ToPrimitive');
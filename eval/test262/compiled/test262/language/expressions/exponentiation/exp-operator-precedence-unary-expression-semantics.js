function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2016 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Rick Waldron
esid: sec-unary-operators
description: Exponentiation Operator expression precedence of unary operators
info: |
  ExponentiationExpression :
    UnaryExpression
    ...

  UnaryExpression :
    ...
    `delete` UnaryExpression
    `void` UnaryExpression
    `typeof` UnaryExpression
    `+` UnaryExpression
    `-` UnaryExpression
    `~` UnaryExpression
    `!` UnaryExpression
---*/
assert.sameValue(-Math.pow(3, 2), -9, "-(3 ** 2) === -9");
assert.sameValue(+Math.pow(3, 2), 9, "+(3 ** 2) === 9");
assert.sameValue(~Math.pow(3, 2), -10, "~(3 ** 2) === -10");
assert.sameValue(!Math.pow(3, 2), false, "!(3 ** 2) === false");
assert.sameValue(Math.pow(2, -2), 0.25);
var o = {
  p: 1
};
assert.sameValue(Math.pow(2, delete o.p), 2, "delete o.p -> true -> ToNumber(true) -> 1");
assert.sameValue(Math.pow(2, void 1), NaN, "void 1 -> undefined -> ToNumber(undefined) -> NaN");
assert.sameValue(Math.pow(2, _typeof(1)), NaN, "typeof 1 -> 'number' -> ToNumber('number') -> NaN");
var s = "2";
var n = 2;
assert.sameValue(Math.pow(2, +s), 4, "+s -> +'2' -> 2 -> ToNumber(2) -> 2");
assert.sameValue(Math.pow(2, +n), 4, "+s -> +2 -> 2 -> ToNumber(2) -> 2");
assert.sameValue(Math.pow(2, -s), 0.25, "-s -> -'2' -> -2 -> ToNumber(-2) -> -2");
assert.sameValue(Math.pow(2, -n), 0.25, "-s -> -2 -> -2 -> ToNumber(-2) -> -2");
assert.sameValue(Math.pow(2, ~s), 0.125, "~s -> ~'2' -> -3 -> ToNumber(-3) -> -3");
assert.sameValue(Math.pow(2, ~n), 0.125, "~s -> ~2 -> -3 -> ToNumber(-3) -> -3");
assert.sameValue(Math.pow(2, !s), 1, "!s -> !'2' -> false -> ToNumber(false) -> 0");
assert.sameValue(Math.pow(2, !n), 1, "!s -> !2 -> false -> ToNumber(false) -> 0");
var capture = [];
var leftValue = {
  valueOf: function valueOf() {
    capture.push("leftValue");
    return 3;
  }
};
var rightValue = {
  valueOf: function valueOf() {
    capture.push("rightValue");
    return 2;
  }
};
Math.pow((capture.push("left"), leftValue), +(capture.push("right"), rightValue)); //                                   ^
//                            Changes the order
// Expected per operator evaluation order: "left", "right", "rightValue", "leftValue"

assert.sameValue(capture[0], "left", "Expected the 1st element captured to be 'left'");
assert.sameValue(capture[1], "right", "Expected the 2nd element captured to be 'right'");
assert.sameValue(capture[2], "rightValue", "Expected the 3rd element captured to be 'rightValue'");
assert.sameValue(capture[3], "leftValue", "Expected the 4th element captured to be 'leftValue'");
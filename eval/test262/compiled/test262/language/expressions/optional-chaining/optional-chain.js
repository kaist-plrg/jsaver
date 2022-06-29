var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-OptionalExpression
description: >
  various optional chain expansions
info: |
  OptionalChain[Yield, Await]:
    ?.[Expression]
    ?.IdentifierName
    ?.Arguments
    ?.TemplateLiteral
    OptionalChain [Expression]
    OptionalChain .IdentifierName
    OptionalChain Arguments[?Yield, ?Await]
    OptionalChain TemplateLiteral
features: [optional-chaining]
---*/
var arr = [10, 11];
var obj = {
  a: 'hello',
  b: {
    val: 13
  },
  c: function c(arg1) {
    return arg1 * 2;
  },
  arr: [11, 12]
};
var i = 0; // OptionalChain: ?.[Expression]

assert.sameValue(11, arr === null || arr === void 0 ? void 0 : arr[i + 1]); // OptionalChain: ?.IdentifierName

assert.sameValue('hello', obj === null || obj === void 0 ? void 0 : obj.a); // OptionalChain: ?.Arguments

var fn = function fn(arg1, arg2) {
  _newArrowCheck(this, _this);

  return arg1 + arg2;
}.bind(this);

assert.sameValue(30, fn === null || fn === void 0 ? void 0 : fn(10, 20)); // OptionalChain: OptionalChain [Expression]

assert.sameValue(12, obj === null || obj === void 0 ? void 0 : obj.arr[i + 1]); // OptionalChain: OptionalChain .IdentifierName

assert.sameValue(13, obj === null || obj === void 0 ? void 0 : obj.b.val); // OptionalChain: OptionalChain Arguments

assert.sameValue(20, obj === null || obj === void 0 ? void 0 : obj.c(10));
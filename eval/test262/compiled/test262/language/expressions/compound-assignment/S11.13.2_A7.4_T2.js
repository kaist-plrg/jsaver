// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Compound Assignment Operator evaluates its operands from left to right.
description: >
    The left-hand side expression is evaluated before the right-hand side.
    Left-hand side expression is MemberExpression: base[prop]. base is the
    undefined value.
    Check operator is "x += y".
---*/
function DummyError() {}

assert["throws"](DummyError, function () {
  var base = undefined;

  var prop = function prop() {
    throw new DummyError();
  };

  var expr = function expr() {
    $ERROR("right-hand side expression evaluated");
  };

  base[prop()] += expr();
});
assert["throws"](TypeError, function () {
  var base = undefined;
  var prop = {
    toString: function toString() {
      $ERROR("property key evaluated");
    }
  };

  var expr = function expr() {
    $ERROR("right-hand side expression evaluated");
  };

  base[prop] += expr();
});
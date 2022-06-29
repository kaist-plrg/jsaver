var _incr, _incr2;

// Copyright (c) 2020 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-assignment-operators-runtime-semantics-evaluation
description: >
    The LeftHandSideExpression is evaluated before the AssignmentExpression.
features: [logical-assignment-operators]

---*/
function DummyError() {}

assert["throws"](DummyError, function () {
  var _prop;

  var base = null;

  var prop = function prop() {
    throw new DummyError();
  };

  var expr = function expr() {
    throw new Test262Error("right-hand side expression evaluated");
  };

  base[_prop = prop()] && (base[_prop] = expr());
});
assert["throws"](TypeError, function () {
  var base = null;
  var prop = {
    toString: function toString() {
      throw new Test262Error("property key evaluated");
    }
  };

  var expr = function expr() {
    throw new Test262Error("right-hand side expression evaluated");
  };

  base[prop] && (base[prop] = expr());
});
var count = 0;
var obj = {};

function incr() {
  return ++count;
}

assert.sameValue(obj[_incr = incr()] && (obj[_incr] = incr()), undefined, "obj[incr()] &&= incr()");
assert.sameValue(obj[1], undefined, "obj[1]");
assert.sameValue(count, 1, "count");
obj[2] = 1;
assert.sameValue(obj[_incr2 = incr()] && (obj[_incr2] = incr()), 3, "obj[incr()] &&= incr()");
assert.sameValue(obj[2], 3, "obj[2]");
assert.sameValue(count, 3, "count");
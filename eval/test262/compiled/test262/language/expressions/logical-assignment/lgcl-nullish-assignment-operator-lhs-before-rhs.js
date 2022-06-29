var _incr, _obj$_incr, _incr2, _obj$_incr2;

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
  var _prop, _base$_prop;

  var base = null;

  var prop = function prop() {
    throw new DummyError();
  };

  var expr = function expr() {
    throw new Test262Error("right-hand side expression evaluated");
  };

  (_base$_prop = base[_prop = prop()]) !== null && _base$_prop !== void 0 ? _base$_prop : base[_prop] = expr();
});
assert["throws"](TypeError, function () {
  var _base$prop;

  var base = null;
  var prop = {
    toString: function toString() {
      throw new Test262Error("property key evaluated");
    }
  };

  var expr = function expr() {
    throw new Test262Error("right-hand side expression evaluated");
  };

  (_base$prop = base[prop]) !== null && _base$prop !== void 0 ? _base$prop : base[prop] = expr();
});
var count = 0;
var obj = {};

function incr() {
  return ++count;
}

assert.sameValue((_obj$_incr = obj[_incr = incr()]) !== null && _obj$_incr !== void 0 ? _obj$_incr : obj[_incr] = incr(), 2, "obj[incr()] ??= incr()");
assert.sameValue(obj[1], 2, "obj[1]");
assert.sameValue(count, 2, "count");
obj[3] = 1;
assert.sameValue((_obj$_incr2 = obj[_incr2 = incr()]) !== null && _obj$_incr2 !== void 0 ? _obj$_incr2 : obj[_incr2] = incr(), 1, "obj[incr()] ??= incr()");
assert.sameValue(obj[3], 1, "obj[3]");
assert.sameValue(count, 3, "count");
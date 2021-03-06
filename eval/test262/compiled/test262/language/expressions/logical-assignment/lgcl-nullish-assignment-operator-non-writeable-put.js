// Copyright (c) 2020 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-assignment-operators-runtime-semantics-evaluation
description: >
    Strict Mode - TypeError is thrown if the LeftHandSide of a Logical
    Assignment operator(??=) is a reference to a data property with the
    attribute value {[[Writable]]:false} and PutValue step is reached.
flags: [onlyStrict]
features: [logical-assignment-operators]

---*/
var obj = {};
Object.defineProperty(obj, "prop", {
  value: undefined,
  writable: false,
  enumerable: true,
  configurable: true
});
assert["throws"](TypeError, function () {
  var _obj$prop;

  (_obj$prop = obj.prop) !== null && _obj$prop !== void 0 ? _obj$prop : obj.prop = 1;
});
assert.sameValue(obj.prop, undefined, "obj.prop");
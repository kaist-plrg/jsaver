// Copyright (c) 2020 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-assignment-operators-runtime-semantics-evaluation
description: >
    ReferenceError is thrown if the LeftHandSideExpression of a Logical
    Assignment operator(??=) evaluates to an unresolvable reference
flags: [onlyStrict]
features: [logical-assignment-operators]

---*/
assert["throws"](ReferenceError, function () {
  var _unresolved;

  (_unresolved = unresolved) !== null && _unresolved !== void 0 ? _unresolved : unresolved = 1;
});
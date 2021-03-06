// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.10.3
description: >
    Behavior when error thrown while accessing `Symbol.toPrimitive` property
info: |
    [...]
    7. Return the result of performing Abstract Equality Comparison rval ==
       lval.

    ES6 Section 7.2.12 Abstract Equality Comparison

    [...]
    10. If Type(x) is either String, Number, or Symbol and Type(y) is Object,
        then return the result of the comparison x == ToPrimitive(y).

    ES6 Section 7.1.1 ToPrimitive ( input [, PreferredType] )

    [...]
    4. Let exoticToPrim be GetMethod(input, @@toPrimitive).
    5. ReturnIfAbrupt(exoticToPrim).
features: [Symbol.toPrimitive]
---*/
var y = Object.defineProperty({}, Symbol.toPrimitive, {
  get: function get() {
    throw new Test262Error();
  }
});
assert["throws"](Test262Error, function () {
  0 == y;
});
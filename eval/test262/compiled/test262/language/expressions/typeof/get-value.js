function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-typeof-operator-runtime-semantics-evaluation
description: Operator "typeof" uses GetValue
info: |
  The typeof Operator

  Runtime Semantics: Evaluation

    ...
    Set val to ? GetValue(val).
    ...

---*/
var count = 0;
Object.defineProperties(this, {
  x: {
    value: 1
  },
  y: {
    get: function get() {
      count++;
      return 1;
    }
  }
});
assert.sameValue(typeof x === "undefined" ? "undefined" : _typeof(x), "number", 'typeof x === "number"');
assert.sameValue(typeof y === "undefined" ? "undefined" : _typeof(y), "number", 'typeof y === "number"');
assert.sameValue(count, 1);
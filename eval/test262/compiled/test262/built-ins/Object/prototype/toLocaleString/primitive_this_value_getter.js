function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.prototype.toLocaleString called with primitive thisValue in getter
info: |
  19.1.3.5 Object.prototype.toLocaleString ( [ reserved1 [ , reserved2 ] ] )

  ...
  2. Return Invoke(O, "toString").
es6id: 19.1.3.5
flags: [onlyStrict]
---*/
Object.defineProperty(Boolean.prototype, "toString", {
  get: function get() {
    var v = _typeof(this);

    return function () {
      return v;
    };
  }
});
assert.sameValue(true.toLocaleString(), "boolean");
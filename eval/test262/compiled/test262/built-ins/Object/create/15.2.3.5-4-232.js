function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-232
description: >
    Object.create - 'get'  property of one property in 'Properties' is
    not present (8.10.5 step 7)
---*/
var newObj = Object.create({}, {
  prop: {}
});
assert.sameValue(_typeof(newObj.prop), "undefined", 'typeof (newObj.prop)');
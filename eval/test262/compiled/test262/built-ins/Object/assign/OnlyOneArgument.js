function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
  test Object.Assign(target,...sources),only one argument was passed,
  return ToObject(target)
es6id:  19.1.2.1.3
---*/
var target = "a";
var result = Object.assign(target);
assert.sameValue(_typeof(result), "object");
assert.sameValue(result.valueOf(), "a", "The value should be 'a'.");
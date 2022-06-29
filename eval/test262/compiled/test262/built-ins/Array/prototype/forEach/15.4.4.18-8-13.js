function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - undefined will be returned when 'len' is
    0
---*/
var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
}

var result = [].forEach(callbackfn);
assert.sameValue(_typeof(result), "undefined", 'typeof result');
assert.sameValue(accessed, false, 'accessed');
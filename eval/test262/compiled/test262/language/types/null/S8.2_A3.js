function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    For the keyword null the typeof operator returns the "object"
    See also
    http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Operators:Special_Operators:typeof_Operator
    and
    http://bugs.ecmascript.org/ticket/250
    for example
es5id: 8.2_A3
description: Check type of null
---*/
//////////////////////////////////////////////////////////////
// CHECK#1
if (_typeof(null) !== "object") {
  $ERROR('#1: typeof null === "object". Actual: ' + _typeof(null));
} //
/////////////////////////////////////////////////////////////
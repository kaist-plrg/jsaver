function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.5_4-4-c-2
description: >
    Object literal - No SyntaxError if a set accessor property definition
    is followed by a data property definition with the same name
---*/
void _defineProperty({
  set foo(x) {}

}, "foo", 1);
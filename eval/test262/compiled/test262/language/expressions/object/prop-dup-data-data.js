function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Refer 11.1.5; 
    The production
    PropertyNameAndValueList :  PropertyNameAndValueList , PropertyAssignment
    4. If previous is not undefined then throw a SyntaxError exception if any of the following conditions are true
    a. This production is contained in strict code and IsDataDescriptor(previous) is true and IsDataDescriptor(propId.descriptor) is true
es5id: 11.1.5_4-4-a-2
description: >
    Object literal - Duplicate data property name allowed if not in
    strict mode
---*/
void _defineProperty({
  foo: 0
}, "foo", 1);
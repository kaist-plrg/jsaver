// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-2-9
description: >
    Object.defineProperties - argument 'Properties' is a Function
    object
---*/
var obj = {};

var props = function props() {};

var result = false;
Object.defineProperty(props, "prop", {
  get: function get() {
    result = this instanceof Function;
    return {};
  },
  enumerable: true
});
Object.defineProperties(obj, props);
assert(result, 'result !== true');
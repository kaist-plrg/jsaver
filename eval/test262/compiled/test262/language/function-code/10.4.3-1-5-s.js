function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-5-s
description: this is not coerced to an object (function)
---*/
function foo() {
  'use strict';

  return _typeof(this);
}

function bar() {
  return _typeof(this);
}

function foobar() {}

assert.sameValue(foo.call(foobar), 'function', 'foo.call(foobar)');
assert.sameValue(bar.call(foobar), 'function', 'bar.call(foobar)');
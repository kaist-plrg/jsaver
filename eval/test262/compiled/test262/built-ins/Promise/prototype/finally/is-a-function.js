function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2017 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Jordan Harband
description: Promise.prototype.finally is a function
esid: sec-promise.prototype.finally
features: [Promise.prototype.finally]
---*/
assert.sameValue(Promise.prototype["finally"] instanceof Function, true, 'Expected Promise.prototype.finally to be instanceof Function');
assert.sameValue(_typeof(Promise.prototype["finally"]), 'function', 'Expected Promise.prototype.finally to be a function');
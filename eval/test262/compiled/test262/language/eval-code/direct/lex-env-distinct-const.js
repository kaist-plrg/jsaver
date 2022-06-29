function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-performeval
description: >
    Direct eval code creates a new declarative environment for lexically-scoped
    declarations (const)
info: |
    [...]
    9. If direct is true, then
       a. Let lexEnv be NewDeclarativeEnvironment(ctx's LexicalEnvironment).
    [...]
features: [const]
---*/
var outside = null;
eval('const outside = null;');
eval('"use strict"; const outside = null;');
eval('const xNonStrict = null;');
assert.sameValue(typeof xNonStrict === "undefined" ? "undefined" : _typeof(xNonStrict), 'undefined');
assert["throws"](ReferenceError, function () {
  xNonStrict;
});
eval('"use strict"; const xStrict = null;');
assert.sameValue(typeof xStrict === "undefined" ? "undefined" : _typeof(xStrict), 'undefined');
assert["throws"](ReferenceError, function () {
  xStrict;
});
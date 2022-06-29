function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-performeval
description: >
    Indirect eval code creates a new declarative environment for
    lexically-scoped declarations (class)
info: |
    [...]
    9. If direct is true, then
       [...]
    10. Else,
        a. Let lexEnv be NewDeclarativeEnvironment(evalRealm.[[GlobalEnv]]).
    [...]
features: [class]
---*/
var outside = /*#__PURE__*/_createClass(function outside() {
  _classCallCheck(this, outside);
});

(0, eval)('class outside {}');
(0, eval)('"use strict"; class outside {}');
(0, eval)('class xNonStrict {}');
assert.sameValue(typeof xNonStrict === "undefined" ? "undefined" : _typeof(xNonStrict), 'undefined');
assert["throws"](ReferenceError, function () {
  xNonStrict;
});
(0, eval)('"use strict"; class xStrict {}');
assert.sameValue(typeof xStrict === "undefined" ? "undefined" : _typeof(xStrict), 'undefined');
assert["throws"](ReferenceError, function () {
  xStrict;
});
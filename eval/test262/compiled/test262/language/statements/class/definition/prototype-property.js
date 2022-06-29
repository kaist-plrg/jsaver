function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.5
description: >
    class prototype property
---*/
var C = /*#__PURE__*/_createClass(function C() {
  _classCallCheck(this, C);
});

var descr = Object.getOwnPropertyDescriptor(C, 'prototype');
assert.sameValue(descr.configurable, false, "The value of `descr.configurable` is `false`");
assert.sameValue(descr.enumerable, false, "The value of `descr.enumerable` is `false`");
assert.sameValue(descr.writable, false, "The value of `descr.writable` is `false`");
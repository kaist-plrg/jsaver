function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    In a class, duplicate computed property setter names produce only a single property of
    that name, whose value is the value of the last property of that name.
---*/
var calls = 0;

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: 'a',
    set: function set(_) {
      calls++;
    }
  }]);

  return C;
}();

new C().a = 'A';
assert.sameValue(calls, 1, "The value of `calls` is `1`, after executing `new C().a = 'A';`");
calls = 0;

var C2 = /*#__PURE__*/function () {
  function C2() {
    _classCallCheck(this, C2);
  }

  _createClass(C2, [{
    key: "b",
    set: function set(_) {
      calls++;
    }
  }]);

  return C2;
}();

new C2().b = 'B';
assert.sameValue(calls, 1, "The value of `calls` is `1`, after executing `new C2().b = 'B';`");
calls = 0;

var C3 = /*#__PURE__*/function () {
  function C3() {
    _classCallCheck(this, C3);
  }

  _createClass(C3, [{
    key: "c",
    set: function set(_) {
      calls++;
    }
  }]);

  return C3;
}();

new C3().c = 'C';
assert.sameValue(calls, 1, "The value of `calls` is `1`, after executing `new C3().c = 'C';`");
calls = 0;

var C4 = /*#__PURE__*/function () {
  function C4() {
    _classCallCheck(this, C4);
  }

  _createClass(C4, [{
    key: 'd',
    set: function set(_) {
      calls++;
    }
  }]);

  return C4;
}();

new C4().d = 'D';
assert.sameValue(calls, 1, "The value of `calls` is `1`, after executing `new C4().d = 'D';`");
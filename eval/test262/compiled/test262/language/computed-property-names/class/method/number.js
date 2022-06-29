function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    computed property class method names can be a number
includes: [compareArray.js]
---*/
function ID(x) {
  return x;
}

var C = /*#__PURE__*/function (_ID) {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: "a",
    value: function a() {
      return 'A';
    }
  }, {
    key: "1",
    value: function _() {
      return 'B';
    }
  }, {
    key: "c",
    value: function c() {
      return 'C';
    }
  }, {
    key: _ID,
    value: function value() {
      return 'D';
    }
  }]);

  return C;
}(ID(2));

assert.sameValue(new C().a(), 'A', "`new C().a()` returns `'A'`, from `a() { return 'A'; }`");
assert.sameValue(new C()[1](), 'B', "`new C()[1]()` returns `'B'`, from `[1]() { return 'B'; }`");
assert.sameValue(new C().c(), 'C', "`new C().c()` returns `'C'`, from `c() { return 'C'; }`");
assert.sameValue(new C()[2](), 'D', "`new C()[2]()` returns `'D'`, from `[ID(2)]() { return 'D'; }`");
assert.sameValue(Object.keys(C.prototype).length, 0, "No enum keys from C.prototype");
assert(compareArray(Object.getOwnPropertyNames(C.prototype), ['1', '2', 'constructor', 'a', 'c']), "`compareArray(Object.getOwnPropertyNames(C.prototype), ['1', '2', 'constructor', 'a', 'c'])` returns `true`");
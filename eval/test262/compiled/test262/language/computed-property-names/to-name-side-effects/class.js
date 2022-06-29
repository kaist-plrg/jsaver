function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    to name, accessor side effects 3
includes: [compareArray.js]
---*/
var counter = 0;
var key1ToString = [];
var key2ToString = [];
var key1 = {
  toString: function toString() {
    key1ToString.push(counter);
    counter += 1;
    return 'b';
  }
};
var key2 = {
  toString: function toString() {
    key2ToString.push(counter);
    counter += 1;
    return 'd';
  }
};

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: "a",
    value: function a() {
      return 'A';
    }
  }, {
    key: key1,
    value: function value() {
      return 'B';
    }
  }, {
    key: "c",
    value: function c() {
      return 'C';
    }
  }, {
    key: key2,
    value: function value() {
      return 'D';
    }
  }]);

  return C;
}();

assert.compareArray(key1ToString, [0], "order set for key1");
assert.compareArray(key2ToString, [1], "order set for key2");
assert.sameValue(counter, 2, "The value of `counter` is `2`");
assert.sameValue(new C().a(), 'A', "`new C().a()` returns `'A'`. Defined as `a() { return 'A'; }`");
assert.sameValue(new C().b(), 'B', "`new C().b()` returns `'B'`. Defined as `[key1]() { return 'B'; }`");
assert.sameValue(new C().c(), 'C', "`new C().c()` returns `'C'`. Defined as `c() { return 'C'; }`");
assert.sameValue(new C().d(), 'D', "`new C().d()` returns `'D'`. Defined as `[key2]() { return 'D'; }`");
assert.sameValue(Object.keys(C.prototype).length, 0, "No enum keys from C.prototype");
assert(compareArray(Object.getOwnPropertyNames(C.prototype), ['constructor', 'a', 'b', 'c', 'd']), "`compareArray(Object.getOwnPropertyNames(C.prototype), ['constructor', 'a', 'b', 'c', 'd'])` returns `true`");
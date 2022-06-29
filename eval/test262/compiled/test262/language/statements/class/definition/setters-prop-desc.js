function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-class-definitions
es6id: 14.5
description: Class methods - "set" accessors
includes: [propertyHelper.js]
---*/
function assertSetterDescriptor(object, name) {
  var descr = Object.getOwnPropertyDescriptor(object, name);
  verifyNotEnumerable(object, name);
  verifyConfigurable(object, name);
  assert.sameValue(_typeof(descr.set), 'function', "`typeof descr.set` is `'function'`");
  assert.sameValue('prototype' in descr.set, false, "The result of `'prototype' in descr.set` is `false`");
  assert.sameValue(descr.get, undefined, "The value of `descr.get` is `undefined`");
}

var x, staticX, y, staticY;

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: "x",
    set: function set(v) {
      x = v;
    }
  }, {
    key: "y",
    set: function set(v) {
      y = v;
    }
  }], [{
    key: "staticX",
    set: function set(v) {
      staticX = v;
    }
  }, {
    key: "staticY",
    set: function set(v) {
      staticY = v;
    }
  }]);

  return C;
}();

assert.sameValue(new C().x = 1, 1, "`new C().x = 1` is `1`");
assert.sameValue(x, 1, "The value of `x` is `1`");
assert.sameValue(C.staticX = 2, 2, "`C.staticX = 2` is `2`");
assert.sameValue(staticX, 2, "The value of `staticX` is `2`");
assert.sameValue(new C().y = 3, 3, "`new C().y = 3` is `3`");
assert.sameValue(y, 3, "The value of `y` is `3`");
assert.sameValue(C.staticY = 4, 4, "`C.staticY = 4` is `4`");
assert.sameValue(staticY, 4, "The value of `staticY` is `4`");
assertSetterDescriptor(C.prototype, 'x');
assertSetterDescriptor(C.prototype, 'y');
assertSetterDescriptor(C, 'staticX');
assertSetterDescriptor(C, 'staticY');
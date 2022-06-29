function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.5
description: >
    class methods
---*/
function assertMethodDescriptor(object, name) {
  var desc = Object.getOwnPropertyDescriptor(object, name);
  assert.sameValue(desc.configurable, true, "The value of `desc.configurable` is `true`");
  assert.sameValue(desc.enumerable, false, "The value of `desc.enumerable` is `false`");
  assert.sameValue(desc.writable, true, "The value of `desc.writable` is `true`");
  assert.sameValue(_typeof(desc.value), 'function', "`typeof desc.value` is `'function'`");
  assert.sameValue('prototype' in desc.value, false, "The result of `'prototype' in desc.value` is `false`");
}

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: "method",
    value: function method() {
      return 1;
    }
  }, {
    key: "method2",
    value: function method2() {
      return 3;
    }
  }], [{
    key: "staticMethod",
    value: function staticMethod() {
      return 2;
    }
  }, {
    key: "staticMethod2",
    value: function staticMethod2() {
      return 4;
    }
  }]);

  return C;
}();

assertMethodDescriptor(C.prototype, 'method');
assertMethodDescriptor(C.prototype, 'method2');
assertMethodDescriptor(C, 'staticMethod');
assertMethodDescriptor(C, 'staticMethod2');
assert.sameValue(new C().method(), 1, "`new C().method()` returns `1`. Defined as `method() { return 1; }`");
assert.sameValue(C.staticMethod(), 2, "`C.staticMethod()` returns `2`. Defined as `static staticMethod() { return 2; }`");
assert.sameValue(new C().method2(), 3, "`new C().method2()` returns `3`. Defined as `method2() { return 3; }`");
assert.sameValue(C.staticMethod2(), 4, "`C.staticMethod2()` returns `4`. Defined as `static staticMethod2() { return 4; }`");
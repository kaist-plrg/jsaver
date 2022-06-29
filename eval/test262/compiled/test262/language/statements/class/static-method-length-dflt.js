function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.1.6
description: >
  Default parameters' effect on function length
info: |
  Function length is counted by the non initialized parameters in the left.

  9.2.4 FunctionInitialize (F, kind, ParameterList, Body, Scope)

  [...]
  2. Let len be the ExpectedArgumentCount of ParameterList.
  3. Perform ! DefinePropertyOrThrow(F, "length", PropertyDescriptor{[[Value]]:
     len, [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true}).
  [...]

  FormalsList : FormalParameter

    1. If HasInitializer of FormalParameter is true return 0
    2. Return 1.

  FormalsList : FormalsList , FormalParameter

    1. Let count be the ExpectedArgumentCount of FormalsList.
    2. If HasInitializer of FormalsList is true or HasInitializer of
    FormalParameter is true, return count.
    3. Return count+1.
features: [default-parameters]
includes: [propertyHelper.js]
---*/
var C1 = /*#__PURE__*/function () {
  function C1() {
    _classCallCheck(this, C1);
  }

  _createClass(C1, null, [{
    key: "m",
    value: function m() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 42;
    }
  }]);

  return C1;
}();

var m1 = C1.m;
assert.sameValue(m1.length, 0, 'formalslist: x = 42');
verifyNotEnumerable(m1, 'length');
verifyNotWritable(m1, 'length');
verifyConfigurable(m1, 'length');

var C2 = /*#__PURE__*/function () {
  function C2() {
    _classCallCheck(this, C2);
  }

  _createClass(C2, null, [{
    key: "m",
    value: function m() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 42;
      var y = arguments.length > 1 ? arguments[1] : undefined;
    }
  }]);

  return C2;
}();

var m2 = C2.m;
assert.sameValue(m2.length, 0, 'formalslist: x = 42, y');
verifyNotEnumerable(m2, 'length');
verifyNotWritable(m2, 'length');
verifyConfigurable(m2, 'length');

var C3 = /*#__PURE__*/function () {
  function C3() {
    _classCallCheck(this, C3);
  }

  _createClass(C3, null, [{
    key: "m",
    value: function m(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 42;
    }
  }]);

  return C3;
}();

var m3 = C3.m;
assert.sameValue(m3.length, 1, 'formalslist: x, y = 42');
verifyNotEnumerable(m3, 'length');
verifyNotWritable(m3, 'length');
verifyConfigurable(m3, 'length');

var C4 = /*#__PURE__*/function () {
  function C4() {
    _classCallCheck(this, C4);
  }

  _createClass(C4, null, [{
    key: "m",
    value: function m(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 42;
      var z = arguments.length > 2 ? arguments[2] : undefined;
    }
  }]);

  return C4;
}();

var m4 = C4.m;
assert.sameValue(m4.length, 1, 'formalslist: x, y = 42, z');
verifyNotEnumerable(m4, 'length');
verifyNotWritable(m4, 'length');
verifyConfigurable(m4, 'length');
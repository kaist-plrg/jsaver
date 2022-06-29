function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.5
description: >
    class default constructor 2
---*/
var Base1 = /*#__PURE__*/_createClass(function Base1() {
  _classCallCheck(this, Base1);
});

assert["throws"](TypeError, function () {
  Base1();
});

var Subclass1 = /*#__PURE__*/function (_Base) {
  _inherits(Subclass1, _Base);

  var _super = _createSuper(Subclass1);

  function Subclass1() {
    _classCallCheck(this, Subclass1);

    return _super.apply(this, arguments);
  }

  return _createClass(Subclass1);
}(Base1);

assert["throws"](TypeError, function () {
  Subclass1();
});
var s1 = new Subclass1();
assert.sameValue(Subclass1.prototype, Object.getPrototypeOf(s1), "The value of `Subclass1.prototype` is `Object.getPrototypeOf(s1)`, after executing `var s1 = new Subclass1();`");

var Base2 = /*#__PURE__*/_createClass(function Base2(x, y) {
  _classCallCheck(this, Base2);

  this.x = x;
  this.y = y;
});

var Subclass2 = /*#__PURE__*/function (_Base2) {
  _inherits(Subclass2, _Base2);

  var _super2 = _createSuper(Subclass2);

  function Subclass2() {
    _classCallCheck(this, Subclass2);

    return _super2.apply(this, arguments);
  }

  return _createClass(Subclass2);
}(Base2);

;
var s2 = new Subclass2(1, 2);
assert.sameValue(Subclass2.prototype, Object.getPrototypeOf(s2), "The value of `Subclass2.prototype` is `Object.getPrototypeOf(s2)`, after executing `var s2 = new Subclass2(1, 2);`");
assert.sameValue(s2.x, 1, "The value of `s2.x` is `1`");
assert.sameValue(s2.y, 2, "The value of `s2.y` is `2`");
var f = Subclass2.bind({}, 3, 4);
var s2prime = new f();
assert.sameValue(Subclass2.prototype, Object.getPrototypeOf(s2prime), "The value of `Subclass2.prototype` is `Object.getPrototypeOf(s2prime)`");
assert.sameValue(s2prime.x, 3, "The value of `s2prime.x` is `3`");
assert.sameValue(s2prime.y, 4, "The value of `s2prime.y` is `4`");
var obj = {};

var Base3 = /*#__PURE__*/_createClass(function Base3() {
  _classCallCheck(this, Base3);

  return obj;
});

var Subclass3 = /*#__PURE__*/function (_Base3) {
  _inherits(Subclass3, _Base3);

  var _super3 = _createSuper(Subclass3);

  function Subclass3() {
    _classCallCheck(this, Subclass3);

    return _super3.apply(this, arguments);
  }

  return _createClass(Subclass3);
}(Base3);

;
var s3 = new Subclass3();
assert.sameValue(s3, obj, "The value of `s3` is `obj`");
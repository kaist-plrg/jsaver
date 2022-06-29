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
    class prototype wiring
---*/
var Base = /*#__PURE__*/_createClass(function Base(x) {
  _classCallCheck(this, Base);

  this.foobar = x;
});

var Subclass = /*#__PURE__*/function (_Base) {
  _inherits(Subclass, _Base);

  var _super = _createSuper(Subclass);

  function Subclass(x) {
    _classCallCheck(this, Subclass);

    return _super.call(this, x);
  }

  return _createClass(Subclass);
}(Base);

var s = new Subclass(1);
assert.sameValue(s.foobar, 1, "The value of `s.foobar` is `1`");
assert.sameValue(Object.getPrototypeOf(s), Subclass.prototype, "`Object.getPrototypeOf(s)` returns `Subclass.prototype`");
var s1 = new Subclass(1, 2);
assert.sameValue(s1.foobar, 1, "The value of `s1.foobar` is `1`");
assert.sameValue(Object.getPrototypeOf(s1) === Subclass.prototype, true, "The result of `Object.getPrototypeOf(s1) === Subclass.prototype` is `true`");
var s2 = new Subclass();
assert.sameValue(s2.foobar, undefined, "The value of `s2.foobar` is `undefined`");
assert.sameValue(Object.getPrototypeOf(s2), Subclass.prototype, "`Object.getPrototypeOf(s2)` returns `Subclass.prototype`");
assert["throws"](TypeError, function () {
  Subclass(1);
});
assert["throws"](TypeError, function () {
  Subclass(1, 2, 3, 4);
});

var Subclass2 = /*#__PURE__*/function (_Subclass) {
  _inherits(Subclass2, _Subclass);

  var _super2 = _createSuper(Subclass2);

  function Subclass2() {
    _classCallCheck(this, Subclass2);

    return _super2.call(this, 5, 6, 7);
  }

  return _createClass(Subclass2);
}(Subclass);

var ss2 = new Subclass2();
assert.sameValue(ss2.foobar, 5, "The value of `ss2.foobar` is `5`");
assert.sameValue(Object.getPrototypeOf(ss2), Subclass2.prototype, "`Object.getPrototypeOf(ss2)` returns `Subclass2.prototype`");

var Subclass3 = /*#__PURE__*/function (_Base2) {
  _inherits(Subclass3, _Base2);

  var _super3 = _createSuper(Subclass3);

  function Subclass3(x, y) {
    _classCallCheck(this, Subclass3);

    return _super3.call(this, x + y);
  }

  return _createClass(Subclass3);
}(Base);

var ss3 = new Subclass3(27, 42 - 27);
assert.sameValue(ss3.foobar, 42, "The value of `ss3.foobar` is `42`");
assert.sameValue(Object.getPrototypeOf(ss3), Subclass3.prototype, "`Object.getPrototypeOf(ss3)` returns `Subclass3.prototype`");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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
    class this access restriction
---*/
var Base = /*#__PURE__*/_createClass(function Base() {
  _classCallCheck(this, Base);
});

(function () {
  var C = /*#__PURE__*/function (_Base) {
    _inherits(C, _Base);

    var _super = _createSuper(C);

    function C() {
      _classCallCheck(this, C);

      var y;
      return _super.call(this);
    }

    return _createClass(C);
  }(Base);

  ;
  new C();
})();

assert["throws"](ReferenceError, function () {
  var C = /*#__PURE__*/function (_Base2) {
    _inherits(C, _Base2);

    var _super2 = _createSuper(C);

    function C() {
      var _this;

      _classCallCheck(this, C);

      return _this = _super2.call(this, _this.x);
    }

    return _createClass(C);
  }(Base);

  ;
  new C();
});
assert["throws"](ReferenceError, function () {
  var C = /*#__PURE__*/function (_Base3) {
    _inherits(C, _Base3);

    var _super3 = _createSuper(C);

    function C() {
      var _this2;

      _classCallCheck(this, C);

      return _this2 = _super3.call(this, _assertThisInitialized(_this2));
    }

    return _createClass(C);
  }(Base);

  ;
  new C();
});
assert["throws"](ReferenceError, function () {
  var C = /*#__PURE__*/function (_Base4) {
    _inherits(C, _Base4);

    var _super4 = _createSuper(C);

    function C() {
      var _thisSuper, _this3;

      _classCallCheck(this, C);

      _get((_thisSuper = _assertThisInitialized(_this3), _getPrototypeOf(C.prototype)), "method", _thisSuper).call(_thisSuper);

      return _this3 = _super4.call(this, _assertThisInitialized(_this3));
    }

    return _createClass(C);
  }(Base);

  ;
  new C();
});
assert["throws"](ReferenceError, function () {
  var C = /*#__PURE__*/function (_Base5) {
    _inherits(C, _Base5);

    var _super5 = _createSuper(C);

    function C() {
      var _thisSuper2, _this4;

      _classCallCheck(this, C);

      return _this4 = _super5.call(this, _get((_thisSuper2 = _assertThisInitialized(_this4), _getPrototypeOf(C.prototype)), "method", _thisSuper2).call(_thisSuper2));
    }

    return _createClass(C);
  }(Base);

  ;
  new C();
});
assert["throws"](ReferenceError, function () {
  var C = /*#__PURE__*/function (_Base6) {
    _inherits(C, _Base6);

    var _super6 = _createSuper(C);

    function C() {
      var _this5;

      _classCallCheck(this, C);

      return _super6.call(this, super());
    }

    return _createClass(C);
  }(Base);

  ;
  new C();
});
assert["throws"](ReferenceError, function () {
  var C = /*#__PURE__*/function (_Base7) {
    _inherits(C, _Base7);

    var _super7 = _createSuper(C);

    function C() {
      var _this6;

      _classCallCheck(this, C);

      return _this6 = _super7.call(this, 1, 2, Object.getPrototypeOf(_assertThisInitialized(_this6)));
    }

    return _createClass(C);
  }(Base);

  ;
  new C();
});

(function () {
  var C = /*#__PURE__*/function (_Base8) {
    _inherits(C, _Base8);

    var _super8 = _createSuper(C);

    function C() {
      var _this7;

      _classCallCheck(this, C);

      {
        _this7 = _super8.call(this, 1, 2);
      }
      return _this7;
    }

    return _createClass(C);
  }(Base);

  ;
  new C();
})();

(function () {
  var C = /*#__PURE__*/function (_Base9) {
    _inherits(C, _Base9);

    var _super9 = _createSuper(C);

    function C() {
      var _this8;

      _classCallCheck(this, C);

      if (1) _this8 = _super9.call(this);
      return _possibleConstructorReturn(_this8);
    }

    return _createClass(C);
  }(Base);

  ;
  new C();
})();

var C1 = /*#__PURE__*/function (_Object) {
  _inherits(C1, _Object);

  var _super10 = _createSuper(C1);

  function C1() {
    'use strict';

    _classCallCheck(this, C1);

    return _super10.call(this);
  }

  return _createClass(C1);
}( /*#__PURE__*/_wrapNativeSuper(Object));

;
new C1();

var C2 = /*#__PURE__*/function (_Object2) {
  _inherits(C2, _Object2);

  var _super11 = _createSuper(C2);

  function C2() {
    _classCallCheck(this, C2);

    ;
    'use strict';

    ;
    ;
    ;
    ;
    return _super11.call(this);
  }

  return _createClass(C2);
}( /*#__PURE__*/_wrapNativeSuper(Object));

;
new C2();

var C3 = /*#__PURE__*/function (_Object3) {
  _inherits(C3, _Object3);

  var _super12 = _createSuper(C3);

  function C3() {
    _classCallCheck(this, C3);

    ;
    'use strict';

    ;
    ;
    ;
    ; // This is a comment.

    return _super12.call(this);
  }

  return _createClass(C3);
}( /*#__PURE__*/_wrapNativeSuper(Object));

;
new C3();
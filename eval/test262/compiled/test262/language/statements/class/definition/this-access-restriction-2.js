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
    class this access restriction 2
---*/
var Base = /*#__PURE__*/_createClass(function Base(a, b) {
  _classCallCheck(this, Base);

  var o = new Object();
  o.prp = a + b;
  return o;
});

var Subclass = /*#__PURE__*/function (_Base) {
  _inherits(Subclass, _Base);

  var _super = _createSuper(Subclass);

  function Subclass(a, b) {
    var _this;

    _classCallCheck(this, Subclass);

    var exn;

    try {
      _this.prp1 = 3;
    } catch (e) {
      exn = e;
    }

    assert.sameValue(exn instanceof ReferenceError, true, "The result of `exn instanceof ReferenceError` is `true`");
    _this = _super.call(this, a, b);
    assert.sameValue(_this.prp, a + b, "The value of `this.prp` is `a + b`");
    assert.sameValue(_this.prp1, undefined, "The value of `this.prp1` is `undefined`");
    assert.sameValue(_this.hasOwnProperty("prp1"), false, "`this.hasOwnProperty(\"prp1\")` returns `false`");
    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  return _createClass(Subclass);
}(Base);

var b = new Base(1, 2);
assert.sameValue(b.prp, 3, "The value of `b.prp` is `3`");
var s = new Subclass(2, -1);
assert.sameValue(s.prp, 1, "The value of `s.prp` is `1`");
assert.sameValue(s.prp1, undefined, "The value of `s.prp1` is `undefined`");
assert.sameValue(s.hasOwnProperty("prp1"), false, "`s.hasOwnProperty(\"prp1\")` returns `false`");

var Subclass2 = /*#__PURE__*/function (_Base2) {
  _inherits(Subclass2, _Base2);

  var _super2 = _createSuper(Subclass2);

  function Subclass2(x) {
    var _this2;

    _classCallCheck(this, Subclass2);

    _this2 = _super2.call(this, 1, 2);
    if (x < 0) return _possibleConstructorReturn(_this2);
    var called = false;

    function tmp() {
      called = true;
      return 3;
    }

    var exn = null;

    try {
      _this2 = _super2.call(this, tmp(), 4);
    } catch (e) {
      exn = e;
    }

    assert.sameValue(exn instanceof ReferenceError, true, "The result of `exn instanceof ReferenceError` is `true`");
    assert.sameValue(called, true, "The value of `called` is `true`");
    return _this2;
  }

  return _createClass(Subclass2);
}(Base);

var s2 = new Subclass2(1);
assert.sameValue(s2.prp, 3, "The value of `s2.prp` is `3`");
var s3 = new Subclass2(-1);
assert.sameValue(s3.prp, 3, "The value of `s3.prp` is `3`");
assert["throws"](TypeError, function () {
  Subclass.call(new Object(), 1, 2);
});
assert["throws"](TypeError, function () {
  Base.call(new Object(), 1, 2);
});

var BadSubclass = /*#__PURE__*/function (_Base3) {
  _inherits(BadSubclass, _Base3);

  var _super3 = _createSuper(BadSubclass);

  function BadSubclass() {
    var _this3;

    _classCallCheck(this, BadSubclass);

    return _possibleConstructorReturn(_this3);
  }

  return _createClass(BadSubclass);
}(Base);

assert["throws"](ReferenceError, function () {
  new BadSubclass();
});
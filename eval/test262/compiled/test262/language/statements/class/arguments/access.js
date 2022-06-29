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
    class arguments access
---*/
var constructCounts = {
  base: 0,
  subclass: 0,
  subclass2: 0
};

var Base = /*#__PURE__*/_createClass(function Base() {
  _classCallCheck(this, Base);

  constructCounts.base++;
  assert.sameValue(arguments.length, 2, "The value of `arguments.length` is `2`");
  assert.sameValue(arguments[0], 1, "The value of `arguments[0]` is `1`");
  assert.sameValue(arguments[1], 2, "The value of `arguments[1]` is `2`");
});

var b = new Base(1, 2);

var Subclass = /*#__PURE__*/function (_Base) {
  _inherits(Subclass, _Base);

  var _super = _createSuper(Subclass);

  function Subclass() {
    _classCallCheck(this, Subclass);

    constructCounts.subclass++;
    assert.sameValue(arguments.length, 2, "The value of `arguments.length` is `2`");
    assert.sameValue(arguments[0], 3, "The value of `arguments[0]` is `3`");
    assert.sameValue(arguments[1], 4, "The value of `arguments[1]` is `4`");
    return _super.call(this, 1, 2);
  }

  return _createClass(Subclass);
}(Base);

var s = new Subclass(3, 4);
assert.sameValue(Subclass.length, 0, "The value of `Subclass.length` is `0`, because there are 0 formal parameters");

var Subclass2 = /*#__PURE__*/function (_Base2) {
  _inherits(Subclass2, _Base2);

  var _super2 = _createSuper(Subclass2);

  function Subclass2(x, y) {
    _classCallCheck(this, Subclass2);

    constructCounts.subclass2++;
    assert.sameValue(arguments.length, 2, "The value of `arguments.length` is `2`");
    assert.sameValue(arguments[0], 3, "The value of `arguments[0]` is `3`");
    assert.sameValue(arguments[1], 4, "The value of `arguments[1]` is `4`");
    return _super2.call(this, 1, 2);
  }

  return _createClass(Subclass2);
}(Base);

var s2 = new Subclass2(3, 4);
assert.sameValue(Subclass2.length, 2, "The value of `Subclass2.length` is `2`, because there are 2 formal parameters");
assert.sameValue(constructCounts.base, 3, "The value of `constructCounts.base` is `3`");
assert.sameValue(constructCounts.subclass, 1, "The value of `constructCounts.subclass` is `1`");
assert.sameValue(constructCounts.subclass2, 1, "The value of `constructCounts.subclass2` is `1`");
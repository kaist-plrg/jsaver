function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

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

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-super-keyword
es6id: 12.3.5
description: Value of reference returned by SuperProperty (from arrow function)
info: |
  [...]
  4. If the code matched by the syntactic production that is being evaluated is
     strict mode code, let strict be true, else let strict be false.
  5. Return ? MakeSuperPropertyReference(propertyKey, strict).

  12.3.5.3 Runtime Semantics: MakeSuperPropertyReference

  1. Let env be GetThisEnvironment( ).
  2. If env.HasSuperBinding() is false, throw a ReferenceError exception.
  3. Let actualThis be ? env.GetThisBinding().
  4. Let baseValue be ? env.GetSuperBase().
  5. Let bv be ? RequireObjectCoercible(baseValue).
  6. Return a value of type Reference that is a Super Reference whose base
     value component is bv, whose referenced name component is propertyKey,
     whose thisValue component is actualThis, and whose strict reference flag
     is strict.
features: [class, arrow-function]
---*/
var fromA, fromB;

var A = /*#__PURE__*/_createClass(function A() {
  _classCallCheck(this, A);
});

var B = /*#__PURE__*/function (_A) {
  _inherits(B, _A);

  var _super = _createSuper(B);

  function B() {
    _classCallCheck(this, B);

    return _super.apply(this, arguments);
  }

  return _createClass(B);
}(A);

var C = /*#__PURE__*/function (_B) {
  _inherits(C, _B);

  var _super2 = _createSuper(C);

  function C() {
    _classCallCheck(this, C);

    return _super2.apply(this, arguments);
  }

  _createClass(C, [{
    key: "method",
    value: function method() {
      var _this = this;

      fromA = function () {
        _newArrowCheck(this, _this);

        return _get(_getPrototypeOf(C.prototype), 'fromA', this);
      }.bind(this)();

      fromB = function () {
        _newArrowCheck(this, _this);

        return _get(_getPrototypeOf(C.prototype), 'fromB', this);
      }.bind(this)();
    }
  }]);

  return C;
}(B);

A.prototype.fromA = 'a';
A.prototype.fromB = 'a';
B.prototype.fromB = 'b';
C.prototype.fromA = 'c';
C.prototype.fromB = 'c';
C.prototype.method();
assert.sameValue(fromA, 'a');
assert.sameValue(fromB, 'b');
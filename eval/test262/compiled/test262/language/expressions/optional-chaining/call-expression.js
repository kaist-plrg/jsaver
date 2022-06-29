function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _fn, _fn2, _fn3, _fn4, _fn4$, _fn5$, _fn6$a, _fn6$b, _ref, _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

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

// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-OptionalExpression
description: >
  optional chain on call expression
info: |
  Left-Hand-Side Expressions
    OptionalExpression:
      CallExpression OptionalChain
features: [optional-chaining]
---*/
// CallExpression CoverCallExpressionAndAsyncArrowHead
function fn() {
  return {
    a: 33
  };
}

;
var obj = {
  fn: function fn() {
    return 44;
  }
};
assert.sameValue(33, (_fn = fn()) === null || _fn === void 0 ? void 0 : _fn.a);
assert.sameValue(undefined, (_fn2 = fn()) === null || _fn2 === void 0 ? void 0 : _fn2.b);
assert.sameValue(44, obj === null || obj === void 0 ? void 0 : obj.fn()); // CallExpression SuperCall

var A = /*#__PURE__*/_createClass(function A() {
  _classCallCheck(this, A);
});

var B = /*#__PURE__*/function (_A) {
  _inherits(B, _A);

  var _super = _createSuper(B);

  function B() {
    var _this2;

    var _this;

    _classCallCheck(this, B);

    assert.sameValue(undefined, (_this2 = _this = _super.call(this)) === null || _this2 === void 0 ? void 0 : _this2.a);
    return _this;
  }

  return _createClass(B);
}(A);

new B(); // CallExpression Arguments

function fn2() {
  var _this3 = this;

  return function () {
    _newArrowCheck(this, _this3);

    return {
      a: 66
    };
  }.bind(this);
}

function fn3() {
  var _this4 = this;

  return function () {
    _newArrowCheck(this, _this4);

    return null;
  }.bind(this);
}

assert.sameValue(66, (_fn3 = fn2()()) === null || _fn3 === void 0 ? void 0 : _fn3.a);
assert.sameValue(undefined, (_fn4 = fn3()()) === null || _fn4 === void 0 ? void 0 : _fn4.a); // CallExpression [Expression]

function fn4() {
  return [{
    a: 77
  }];
}

function fn5() {
  return [];
}

assert.sameValue(77, (_fn4$ = fn4()[0]) === null || _fn4$ === void 0 ? void 0 : _fn4$.a);
assert.sameValue(undefined, (_fn5$ = fn5()[0]) === null || _fn5$ === void 0 ? void 0 : _fn5$.a); // CallExpression .IdentifierName

function fn6() {
  return {
    a: {
      b: 88
    }
  };
}

assert.sameValue(88, (_fn6$a = fn6().a) === null || _fn6$a === void 0 ? void 0 : _fn6$a.b);
assert.sameValue(undefined, (_fn6$b = fn6().b) === null || _fn6$b === void 0 ? void 0 : _fn6$b.c); // CallExpression TemplateLiteral

function fn7() {
  var _this5 = this;

  return function () {
    _newArrowCheck(this, _this5);
  }.bind(this);
}

assert.sameValue(undefined, (_ref = fn7()(_templateObject || (_templateObject = _taggedTemplateLiteral(["hello"])))) === null || _ref === void 0 ? void 0 : _ref.a);
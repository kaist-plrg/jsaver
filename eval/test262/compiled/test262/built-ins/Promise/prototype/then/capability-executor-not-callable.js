function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.4.5.3
description: >
  Throws a TypeError if either resolve or reject capability is not callable.
info: |
  Promise.prototype.then ( onFulfilled , onRejected )

  ...
  5. Let promiseCapability be NewPromiseCapability(C).
  6. ReturnIfAbrupt(promiseCapability).
  ...

  25.4.1.5 NewPromiseCapability ( C )
    ...
    4. Let executor be a new built-in function object as defined in GetCapabilitiesExecutor Functions (25.4.1.5.1).
    5. Set the [[Capability]] internal slot of executor to promiseCapability.
    6. Let promise be Construct(C, «executor»).
    7. ReturnIfAbrupt(promise).
    8. If IsCallable(promiseCapability.[[Resolve]]) is false, throw a TypeError exception.
    9. If IsCallable(promiseCapability.[[Reject]]) is false, throw a TypeError exception.
    ...
features: [class]
---*/
var constructorFunction;
var promise = new ( /*#__PURE__*/function (_Promise) {
  _inherits(_class, _Promise);

  var _super = _createSuper(_class);

  function _class(executor) {
    var _this;

    _classCallCheck(this, _class);

    if (constructorFunction) {
      constructorFunction(executor);
      return _possibleConstructorReturn(_this, {});
    }

    return _possibleConstructorReturn(_this, _this = _super.call(this, executor));
  }

  return _createClass(_class);
}( /*#__PURE__*/_wrapNativeSuper(Promise)))(function () {});
var checkPoint = "";
assert["throws"](TypeError, function () {
  constructorFunction = function constructorFunction(executor) {
    checkPoint += "a";
  };

  promise.then();
}, "executor not called at all");
assert.sameValue(checkPoint, "a", "executor not called at all");
var checkPoint = "";
assert["throws"](TypeError, function () {
  constructorFunction = function constructorFunction(executor) {
    checkPoint += "a";
    executor();
    checkPoint += "b";
  };

  promise.then();
}, "executor called with no arguments");
assert.sameValue(checkPoint, "ab", "executor called with no arguments");
var checkPoint = "";
assert["throws"](TypeError, function () {
  constructorFunction = function constructorFunction(executor) {
    checkPoint += "a";
    executor(undefined, undefined);
    checkPoint += "b";
  };

  promise.then();
}, "executor called with (undefined, undefined)");
assert.sameValue(checkPoint, "ab", "executor called with (undefined, undefined)");
var checkPoint = "";
assert["throws"](TypeError, function () {
  constructorFunction = function constructorFunction(executor) {
    checkPoint += "a";
    executor(undefined, function () {});
    checkPoint += "b";
  };

  promise.then();
}, "executor called with (undefined, function)");
assert.sameValue(checkPoint, "ab", "executor called with (undefined, function)");
var checkPoint = "";
assert["throws"](TypeError, function () {
  constructorFunction = function constructorFunction(executor) {
    checkPoint += "a";
    executor(function () {}, undefined);
    checkPoint += "b";
  };

  promise.then();
}, "executor called with (function, undefined)");
assert.sameValue(checkPoint, "ab", "executor called with (function, undefined)");
var checkPoint = "";
assert["throws"](TypeError, function () {
  constructorFunction = function constructorFunction(executor) {
    checkPoint += "a";
    executor(123, "invalid value");
    checkPoint += "b";
  };

  promise.then();
}, "executor called with (Number, String)");
assert.sameValue(checkPoint, "ab", "executor called with (Number, String)");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

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

// Copyright (C) 2020 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-catchfinallyfunctions
description: >
  PromiseResolve() avoids extra Promise capability creation.
info: |
  Catch Finally Functions

  [...]
  7. Let promise be ? PromiseResolve(C, result).
  8. Let thrower be equivalent to a function that throws reason.
  9. Return ? Invoke(promise, "then", « thrower »).

  PromiseResolve ( C, x )

  1. Assert: Type(C) is Object.
  2. If IsPromise(x) is true, then
    a. Let xConstructor be ? Get(x, "constructor").
    b. If SameValue(xConstructor, C) is true, return x.
features: [Promise.prototype.finally]
flags: [async]
---*/
var MyPromise = /*#__PURE__*/function (_Promise) {
  _inherits(MyPromise, _Promise);

  var _super = _createSuper(MyPromise);

  function MyPromise() {
    _classCallCheck(this, MyPromise);

    return _super.apply(this, arguments);
  }

  return _createClass(MyPromise);
}( /*#__PURE__*/_wrapNativeSuper(Promise));

var mp1Value = {};
var mp1 = MyPromise.reject(mp1Value);
var mp2 = MyPromise.reject(42);
var thenCalls = [];
var then = Promise.prototype.then;

Promise.prototype.then = function (resolve, reject) {
  thenCalls.push({
    promise: this,
    resolve: resolve,
    reject: reject
  });
  return then.call(this, resolve, reject);
};

mp1["finally"](function () {
  _newArrowCheck(this, _this);

  return mp2;
}.bind(this)).then(function (value) {
  _newArrowCheck(this, _this);

  throw new Test262Error("Expected the promise to be rejected, got resolved with " + value);
}.bind(this), function () {
  var _this2 = this;

  _newArrowCheck(this, _this);

  assert.sameValue(thenCalls.length, 5);
  var mp2Calls = thenCalls.filter(function (c) {
    _newArrowCheck(this, _this2);

    return c.promise === mp2;
  }.bind(this));
  assert.sameValue(mp2Calls.length, 1);
  assert.sameValue(mp2Calls[0].reject, undefined);
  var thrown = false;

  try {
    mp2Calls[0].resolve();
  } catch (error) {
    thrown = true;
    assert.sameValue(error, mp1Value);
  }

  assert(thrown, "Expected resolve() to throw, but it didn't");
}.bind(this)).then($DONE, $DONE);
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
  Promise reaction jobs do not check for cyclic resolutions.
info: |
  Promise.prototype.then ( onFulfilled , onRejected )

  ...
  5. Let resultCapability be NewPromiseCapability(C).
  6. ReturnIfAbrupt(resultCapability).
  7. Return PerformPromiseThen(promise, onFulfilled, onRejected, resultCapability).

  25.4.5.3.1 PerformPromiseThen ( promise, onFulfilled, onRejected, resultCapability )
    ...
    3. If IsCallable(onFulfilled) is false, then
      a. Let onFulfilled be "Identity".
    4. If IsCallable(onRejected) is false, then
      a. Let onRejected be "Thrower".
    5. Let fulfillReaction be the PromiseReaction { [[Capabilities]]: resultCapability, [[Handler]]: onFulfilled }.
    6. Let rejectReaction be the PromiseReaction { [[Capabilities]]: resultCapability, [[Handler]]: onRejected}.
    ...
    8. Else if the value of promise's [[PromiseState]] internal slot is "fulfilled",
      a. Let value be the value of promise's [[PromiseResult]] internal slot.
      b. Perform EnqueueJob("PromiseJobs", PromiseReactionJob, «fulfillReaction, value»).
    ...

  25.4.2.1 PromiseReactionJob ( reaction, argument )
    ...
    4. If handler is "Identity", let handlerResult be NormalCompletion(argument).
    ...
    8. Let status be Call(promiseCapability.[[Resolve]], undefined, «handlerResult.[[value]]»).
    9. NextJob Completion(status).
features: [class]
flags: [async]
---*/
var createBadPromise = false;
var object = {};

var P = /*#__PURE__*/function (_Promise) {
  _inherits(P, _Promise);

  var _super = _createSuper(P);

  function P(executor) {
    var _this;

    _classCallCheck(this, P);

    if (createBadPromise) {
      executor(function (v) {
        assert.sameValue(v, object);
        $DONE();
      }, function (e) {
        $DONE(e);
      });
      return _possibleConstructorReturn(_this, object);
    }

    return _possibleConstructorReturn(_this, _this = _super.call(this, executor));
  }

  return _createClass(P);
}( /*#__PURE__*/_wrapNativeSuper(Promise));

var p = P.resolve(object);
createBadPromise = true;
var q = p.then();
createBadPromise = false;
assert.sameValue(q, object, "then() returns object");
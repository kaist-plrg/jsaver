function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

// Copyright (C) 2019 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asyncgenerator-definitions-evaluatebody
description: >
  Default [[Prototype]] value derived from realm of the async generator function.
info: |
  Runtime Semantics: EvaluateBody

  ...
  2. Let generator be ? OrdinaryCreateFromConstructor(functionObject, "%AsyncGeneratorPrototype%", « ... »).
  3. Perform ! AsyncGeneratorStart(generator, FunctionBody).
  4. Return Completion { [[Type]]: return, [[Value]]: generator, [[Target]]: empty }.

  OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )

  ...
  2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
  3. Return ObjectCreate(proto, internalSlotsList).

  GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )

  ...
  3. Let proto be ? Get(constructor, 'prototype').
  4. If Type(proto) is not Object, then
    a. Let realm be ? GetFunctionRealm(constructor).
    b. Set proto to realm's intrinsic object named intrinsicDefaultProto.
  5. Return proto.
features: [async-iteration, Symbol]
---*/
var fn = /*#__PURE__*/function () {
  var _ref = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fn() {
    return _ref.apply(this, arguments);
  };
}();

var AsyncGeneratorPrototype = Object.getPrototypeOf(fn.prototype);
fn.prototype = undefined;
assert.sameValue(Object.getPrototypeOf(fn()), AsyncGeneratorPrototype, 'fn.prototype is undefined');
fn.prototype = null;
assert.sameValue(Object.getPrototypeOf(fn()), AsyncGeneratorPrototype, 'fn.prototype is null');
fn.prototype = false;
assert.sameValue(Object.getPrototypeOf(fn()), AsyncGeneratorPrototype, 'fn.prototype is a Boolean');
fn.prototype = '';
assert.sameValue(Object.getPrototypeOf(fn()), AsyncGeneratorPrototype, 'fn.prototype is a String');
fn.prototype = Symbol();
assert.sameValue(Object.getPrototypeOf(fn()), AsyncGeneratorPrototype, 'fn.prototype is a Symbol');
fn.prototype = 1;
assert.sameValue(Object.getPrototypeOf(fn()), AsyncGeneratorPrototype, 'fn.prototype is a Number');
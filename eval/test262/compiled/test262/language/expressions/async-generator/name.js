function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

// Copyright (C) 2019 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asyncgenerator-definitions-evaluation
description: Assignment of function `name` attribute
info: |
    AsyncGeneratorExpression : async function * ( FormalParameters ) { AsyncGeneratorBody }

    1. Let scope be the LexicalEnvironment of the running execution context.
    2. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters,
       AsyncGeneratorBody, scope, "").
    ...
    6. Return closure.

    AsyncGeneratorExpression : async function * BindingIdentifier ( FormalParameters ) { AsyncGeneratorBody }

    1. Let scope be the running execution context's LexicalEnvironment.
    2. Let funcEnv be ! NewDeclarativeEnvironment(scope).
    3. Let envRec be funcEnv's EnvironmentRecord.
    4. Let name be StringValue of BindingIdentifier.
    5. Perform ! envRec.CreateImmutableBinding(name).
    6. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters,
       AsyncGeneratorBody, funcEnv, name).
    ...
    11. Return closure.
includes: [propertyHelper.js]
---*/
verifyProperty( /*#__PURE__*/_wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true
});
verifyProperty( /*#__PURE__*/function () {
  var _func = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  function func() {
    return _func.apply(this, arguments);
  }

  return func;
}(), "name", {
  value: "func",
  writable: false,
  enumerable: false,
  configurable: true
});
var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

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
esid: sec-return-statement-runtime-semantics-evaluation
description: >
  Return with an explicit return value awaits this value.
info: |
  13.10.1 Runtime Semantics: Evaluation

    ReturnStatement : return;
      1. Return Completion { [[Type]]: return, [[Value]]: undefined, [[Target]]: empty }.

    ReturnStatement : return Expression ;
      1. Let exprRef be the result of evaluating Expression.
      2. Let exprValue be ? GetValue(exprRef).
      3. If ! GetGeneratorKind() is async, set exprValue to ? Await(exprValue).
      4. Return Completion { [[Type]]: return, [[Value]]: exprValue, [[Target]]: empty }.

  25.5.3.2 AsyncGeneratorStart ( generator, generatorBody )

    ...
    5. Set the code evaluation state of genContext such that when evaluation is resumed for that
       execution context the following steps will be performed:
      a. Let result be the result of evaluating generatorBody.
      ...
      e. If result is a normal completion, let resultValue be undefined.
      ...
      g. Return ! AsyncGeneratorResolve(generator, resultValue, true).

includes: [compareArray.js]
flags: [async]
features: [async-iteration]
---*/
// 25.5.3.2, step 5.e: |generatorBody| execution ends with a normal completion.
function g1() {
  return _g.apply(this, arguments);
} // 13.10.1: No expression form means direct return.


function _g() {
  _g = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
  return _g.apply(this, arguments);
}

function g2() {
  return _g2.apply(this, arguments);
} // 13.10.1: Explicit expression requires Await.


function _g2() {
  _g2 = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return");

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _g2.apply(this, arguments);
}

function g3() {
  return _g3.apply(this, arguments);
} // 13.10.1: Explicit expression requires Await.


function _g3() {
  _g3 = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", undefined);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _g3.apply(this, arguments);
}

function g4() {
  return _g4.apply(this, arguments);
}

function _g4() {
  _g4 = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", void 0);

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _g4.apply(this, arguments);
}

var expected = ["tick 1", "g1 ret", "g2 ret", "tick 2", "g3 ret", "g4 ret"];
var actual = [];
Promise.resolve(0).then(function () {
  _newArrowCheck(this, _this);

  return actual.push("tick 1");
}.bind(this)).then(function () {
  _newArrowCheck(this, _this);

  return actual.push("tick 2");
}.bind(this)).then(function () {
  _newArrowCheck(this, _this);

  assert.compareArray(actual, expected, "Ticks for implicit and explicit return undefined");
}.bind(this)).then($DONE, $DONE);
g1().next().then(function (v) {
  _newArrowCheck(this, _this);

  return actual.push("g1 ret");
}.bind(this));
g2().next().then(function (v) {
  _newArrowCheck(this, _this);

  return actual.push("g2 ret");
}.bind(this));
g3().next().then(function (v) {
  _newArrowCheck(this, _this);

  return actual.push("g3 ret");
}.bind(this));
g4().next().then(function (v) {
  _newArrowCheck(this, _this);

  return actual.push("g4 ret");
}.bind(this));
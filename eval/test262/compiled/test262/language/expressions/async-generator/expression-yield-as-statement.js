function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: sec-generator-function-definitions
description: >
  `yield` is a valid statement within async generator function bodies.
flags: [async]
features: [async-iteration]
---*/
var g1 = /*#__PURE__*/function () {
  var _ref = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return;

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function g1() {
    return _ref.apply(this, arguments);
  };
}();

var g2 = /*#__PURE__*/function () {
  var _ref2 = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return 1;

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function g2() {
    return _ref2.apply(this, arguments);
  };
}();

var iter1 = g1();
iter1.next().then(function (result) {
  assert.sameValue(result.value, undefined, "Without right-hand-side: first result `value`");
  assert.sameValue(result.done, false, "Without right-hand-side: first result `done` flag");
}).then(undefined, $DONE);
iter1.next().then(function (result) {
  assert.sameValue(result.value, undefined, "Without right-hand-side: second result `value`");
  assert.sameValue(result.done, true, "Without right-hand-side: second result `done` flag");
}).then(undefined, $DONE);
var iter2 = g2();
iter2.next().then(function (result) {
  assert.sameValue(result.value, 1, "With right-hand-side: first result `value`");
  assert.sameValue(result.done, false, "With right-hand-side: first result `done` flag");
}).then(undefined, $DONE);
iter2.next().then(function (result) {
  assert.sameValue(result.value, undefined, "With right-hand-side: second result `value`");
  assert.sameValue(result.done, true, "With right-hand-side: second result `done` flag");
}).then($DONE, $DONE);
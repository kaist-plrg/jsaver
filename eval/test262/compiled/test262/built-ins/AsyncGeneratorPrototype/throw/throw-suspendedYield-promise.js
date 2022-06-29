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
esid: sec-asyncgenerator-prototype-throw
description: >
  Generator is not resumed after a throw completion with a promise arg
info: |
  AsyncGenerator.prototype.throw ( exception )
  1. Let generator be the this value.
  2. Let completion be Completion{[[Type]]: throw, [[Value]]: exception, [[Target]]: empty}.
  3. Return ! AsyncGeneratorEnqueue(generator, completion).

  AsyncGeneratorEnqueue ( generator, completion )
  ...
  8. If state is not "executing", then
    a. Perform ! AsyncGeneratorResumeNext(generator).
  ...

  AsyncGeneratorResumeNext:
  If completion.[[Type]] is throw, and generator.[[AsyncGeneratorState]] is
  "suspendedYield", generator is resumed and immediately and
  closes the generator and returns completion.

  AsyncGeneratorReject will not unwrap Promise values
flags: [async]
features: [async-iteration]
---*/
var g = /*#__PURE__*/function () {
  var _ref = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return 1;

          case 2:
            throw new Test262Error('Generator must not be resumed.');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function g() {
    return _ref.apply(this, arguments);
  };
}();

var it = g();
var promise = new Promise(function () {});
it.next().then(function (ret) {
  assert.sameValue(ret.value, 1, 'Initial yield');
  assert.sameValue(ret.done, false, 'Initial yield');
  it["throw"](promise).then($DONE, function (err) {
    assert.sameValue(err, promise, 'AsyncGeneratorReject(generator, resultValue)');
    it.next().then(function (ret) {
      assert.sameValue(ret.value, undefined, 'Generator is closed');
      assert.sameValue(ret.done, true, 'Generator is closed');
    }).then($DONE, $DONE);
  })["catch"]($DONE);
})["catch"]($DONE);
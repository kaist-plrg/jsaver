function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

// Copyright (C) 2018 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asyncgenerator-prototype-throw
description: next() call while iterator is in state executing
info: |
  AsyncGenerator.prototype.next ( value )
  1. Let generator be the this value.
  2. Let completion be NormalCompletion(value).
  3. Return ! AsyncGeneratorEnqueue(generator, completion).

  AsyncGeneratorEnqueue ( generator, completion )
  ...
  4. Let queue be generator.[[AsyncGeneratorQueue]].
  5. Let request be AsyncGeneratorRequest{[[Completion]]: completion,
     [[Capability]]: promiseCapability}.
  6. Append request to the end of queue.
  ...

  AsyncGeneratorResolve ( generator, value, done )
  ...
  2. Let queue be generator.[[AsyncGeneratorQueue]].
  3. Assert: queue is not an empty List.
  4. Remove the first element from queue and let next be the value of that element.
  ...

flags: [async]
features: [async-iteration]
---*/
var iter, result;
var executionorder = 0;
var valueisset = false;

function g() {
  return _g.apply(this, arguments);
}

function _g() {
  _g = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            iter.next().then(function (result) {
              assert(valueisset, "variable valueisset should be set to true");
              assert.sameValue(++executionorder, 2);
              assert.sameValue(result.value, 2);
              assert.sameValue(result.done, false);
            }, function () {
              $DONE(new Test262Error("next() should result in resolved promise."));
            })["catch"]($DONE);
            valueisset = true;
            _context.next = 4;
            return 1;

          case 4:
            _context.next = 6;
            return 2;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _g.apply(this, arguments);
}

iter = g();
iter.next().then(function (result) {
  assert.sameValue(++executionorder, 1);
  assert.sameValue(result.value, 1);
  assert.sameValue(result.done, false);
  iter.next().then(function (result) {
    assert.sameValue(++executionorder, 3);
    assert.sameValue(result.value, undefined);
    assert.sameValue(result.done, true);
  }).then($DONE, $DONE);
})["catch"]($DONE);
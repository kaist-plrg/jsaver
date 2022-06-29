function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

// Copyright 2018 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Maya Lekova <mslekova@chromium.org>
esid: await
description: >
  for-await-of iteration and builtin Promises are properly interleaved,
  meaning await in for-of loop takes only 1 tick on the microtask queue.
flags: [async]
features: [async-functions, async-iteration, generators]
includes: [compareArray.js]
---*/
var actual = [];
var expected = ['Promise: 6', 'Promise: 5', 'Await: 3', 'Promise: 4', 'Promise: 3', 'Await: 2', 'Promise: 2', 'Promise: 1', 'Await: 1', 'Promise: 0'];
var iterations = 3;

function naturalNumbers(_x) {
  return _naturalNumbers.apply(this, arguments);
}

function _naturalNumbers() {
  _naturalNumbers = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(start) {
    var current;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            current = start;

          case 1:
            if (!(current > 0)) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return Promise.resolve(current--);

          case 4:
            _context.next = 1;
            break;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _naturalNumbers.apply(this, arguments);
}

function trigger() {
  return _trigger.apply(this, arguments);
}

function _trigger() {
  _trigger = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, num;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iteratorAbruptCompletion = false;
            _didIteratorError = false;
            _context2.prev = 2;
            _iterator = _asyncIterator(naturalNumbers(iterations));

          case 4:
            _context2.next = 6;
            return _iterator.next();

          case 6:
            if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
              _context2.next = 12;
              break;
            }

            num = _step.value;
            actual.push('Await: ' + num);

          case 9:
            _iteratorAbruptCompletion = false;
            _context2.next = 4;
            break;

          case 12:
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 18:
            _context2.prev = 18;
            _context2.prev = 19;

            if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
              _context2.next = 23;
              break;
            }

            _context2.next = 23;
            return _iterator["return"]();

          case 23:
            _context2.prev = 23;

            if (!_didIteratorError) {
              _context2.next = 26;
              break;
            }

            throw _iteratorError;

          case 26:
            return _context2.finish(23);

          case 27:
            return _context2.finish(18);

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 14, 18, 28], [19,, 23, 27]]);
  }));
  return _trigger.apply(this, arguments);
}

function checkAssertions() {
  return _checkAssertions.apply(this, arguments);
}

function _checkAssertions() {
  _checkAssertions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            assert.compareArray(actual, expected, 'Async/await and promises should be interleaved');

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _checkAssertions.apply(this, arguments);
}

function countdown(counter) {
  actual.push('Promise: ' + counter);

  if (counter > 0) {
    return Promise.resolve(counter - 1).then(countdown);
  } else {
    checkAssertions().then($DONE, $DONE);
  }
}

trigger();
countdown(iterations * 2);
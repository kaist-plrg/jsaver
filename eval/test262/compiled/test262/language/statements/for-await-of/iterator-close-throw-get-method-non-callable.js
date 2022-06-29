function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }

// Copyright (C) 2020 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorclose
description: >
  If retrieving an iterator's `return` method generates an error while
  closing the iterator with throw completion, this error should be suppressed.
info: |
  AsyncIteratorClose ( iteratorRecord, completion )

  [...]
  4. Let innerResult be GetMethod(iterator, "return").
  5. If innerResult.[[Type]] is normal,
    [...]
  6. If completion.[[Type]] is throw, return Completion(completion).
  7. If innerResult.[[Type]] is throw, return Completion(innerResult).

  GetMethod ( V, P )

  [...]
  2. Let func be ? GetV(V, P).
  3. If func is either undefined or null, return undefined.
  4. If IsCallable(func) is false, throw a TypeError exception.
features: [async-iteration]
flags: [async]
---*/
var asyncIterable = {};

asyncIterable[Symbol.asyncIterator] = function () {
  return {
    next: function next() {
      return {
        done: false,
        value: null
      };
    },
    "return": true
  };
};

var iterationCount = 0;

var promise = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, x;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorAbruptCompletion = false;
          _didIteratorError = false;
          _context.prev = 2;
          _iterator = _asyncIterator(asyncIterable);

        case 4:
          _context.next = 6;
          return _iterator.next();

        case 6:
          if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
            _context.next = 13;
            break;
          }

          x = _step.value;
          iterationCount += 1;
          throw new Test262Error("should not be overriden");

        case 10:
          _iteratorAbruptCompletion = false;
          _context.next = 4;
          break;

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](2);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 19:
          _context.prev = 19;
          _context.prev = 20;

          if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
            _context.next = 24;
            break;
          }

          _context.next = 24;
          return _iterator["return"]();

        case 24:
          _context.prev = 24;

          if (!_didIteratorError) {
            _context.next = 27;
            break;
          }

          throw _iteratorError;

        case 27:
          return _context.finish(24);

        case 28:
          return _context.finish(19);

        case 29:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[2, 15, 19, 29], [20,, 24, 28]]);
}))();

promise.then(function (value) {
  throw new Test262Error("Promise should be rejected, got: " + value);
}, function (error) {
  assert.sameValue(error.constructor, Test262Error);
  assert.sameValue(iterationCount, 1, "The loop body is evaluated");
}).then($DONE, $DONE);
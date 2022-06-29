var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }

// Copyright (C) 2019 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset
description: >
  Ensure the number of ticks and Promise constructor lookups is correct with a Async-from-Sync iterator.
info: |
  13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation ( lhs, stmt, iteratorRecord, iterationKind,
                                                        lhsKind, labelSet [ , iteratorKind ] )
  25.1.4.2.1 %AsyncFromSyncIteratorPrototype%.next
  25.1.4.4 AsyncFromSyncIteratorContinuation
  25.6.4.5.1 PromiseResolve
  6.2.3.1 Await

includes: [compareArray.js]
flags: [async]
features: [async-iteration]
---*/
// The expected event log.
var expected = [// Before entering loop.
"pre", // %AsyncFromSyncIteratorPrototype%.next
// -> AsyncFromSyncIteratorContinuation
//   -> PromiseResolve
"constructor", // Await
// -> PromiseResolve
"constructor", // Async-from-Sync Iterator promise resolved.
"tick 1", // Await promise resolved.
"tick 2", // In loop body.
"loop", // Await
// -> PromiseResolve
"constructor", // Async-from-Sync Iterator promise resolved.
"tick 3", // Await promise resolved
"tick 4", // After exiting loop.
"post"]; // The actual event log.

var actual = []; // Test function using for-await with a single, already resolved Promise.

function f() {
  return _f.apply(this, arguments);
} // Count the number of ticks needed to complete the loop and compare the actual log.


function _f() {
  _f = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var p, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, x;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            p = Promise.resolve(0);
            actual.push("pre");
            _iteratorAbruptCompletion = false;
            _didIteratorError = false;
            _context.prev = 4;
            _iterator = _asyncIterator([p]);

          case 6:
            _context.next = 8;
            return _iterator.next();

          case 8:
            if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
              _context.next = 14;
              break;
            }

            x = _step.value;
            actual.push("loop");

          case 11:
            _iteratorAbruptCompletion = false;
            _context.next = 6;
            break;

          case 14:
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 20:
            _context.prev = 20;
            _context.prev = 21;

            if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
              _context.next = 25;
              break;
            }

            _context.next = 25;
            return _iterator["return"]();

          case 25:
            _context.prev = 25;

            if (!_didIteratorError) {
              _context.next = 28;
              break;
            }

            throw _iteratorError;

          case 28:
            return _context.finish(25);

          case 29:
            return _context.finish(20);

          case 30:
            actual.push("post");

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 16, 20, 30], [21,, 25, 29]]);
  }));
  return _f.apply(this, arguments);
}

Promise.resolve(0).then(function () {
  _newArrowCheck(this, _this);

  return actual.push("tick 1");
}.bind(this)).then(function () {
  _newArrowCheck(this, _this);

  return actual.push("tick 2");
}.bind(this)).then(function () {
  _newArrowCheck(this, _this);

  return actual.push("tick 3");
}.bind(this)).then(function () {
  _newArrowCheck(this, _this);

  return actual.push("tick 4");
}.bind(this)).then(function () {
  _newArrowCheck(this, _this);

  assert.compareArray(actual, expected, "Ticks and constructor lookups");
}.bind(this)).then($DONE, $DONE); // Redefine `Promise.constructor` in order to intercept "constructor" lookups from PromiseResolve.
// (Perform last so that the lookups from SpeciesConstructor in `then` aren't logged.)

Object.defineProperty(Promise.prototype, "constructor", {
  get: function get() {
    actual.push("constructor");
    return Promise;
  },
  configurable: true
}); // Start the asynchronous function.

f();
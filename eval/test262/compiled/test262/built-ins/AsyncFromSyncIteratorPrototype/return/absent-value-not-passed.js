var _syncIterator;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }

// Copyright (C) 2020 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%asyncfromsynciteratorprototype%.return
description: >
  `return` method does not pass absent `value`.
info: |
  %AsyncFromSyncIteratorPrototype%.return ( value )

  [...]
  8. If value is present, then
    [...]
  9. Else,
    a. Let result be Call(return, syncIterator).
  [...]
flags: [async]
features: [async-iteration]
---*/
var returnArgumentsLength;
var syncIterator = (_syncIterator = {}, _defineProperty(_syncIterator, Symbol.iterator, function () {
  return this;
}), _defineProperty(_syncIterator, "next", function next() {
  return {
    done: false
  };
}), _defineProperty(_syncIterator, "return", function _return() {
  returnArgumentsLength = arguments.length;
  return {
    done: true
  };
}), _syncIterator);

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorAbruptCompletion = false;
          _didIteratorError = false;
          _context.prev = 2;
          _iterator = _asyncIterator(syncIterator);

        case 4:
          _context.next = 6;
          return _iterator.next();

        case 6:
          if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
            _context.next = 12;
            break;
          }

          _ = _step.value;
          return _context.abrupt("break", 12);

        case 9:
          _iteratorAbruptCompletion = false;
          _context.next = 4;
          break;

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](2);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 18:
          _context.prev = 18;
          _context.prev = 19;

          if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
            _context.next = 23;
            break;
          }

          _context.next = 23;
          return _iterator["return"]();

        case 23:
          _context.prev = 23;

          if (!_didIteratorError) {
            _context.next = 26;
            break;
          }

          throw _iteratorError;

        case 26:
          return _context.finish(23);

        case 27:
          return _context.finish(18);

        case 28:
          assert.sameValue(returnArgumentsLength, 0);

        case 29:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[2, 14, 18, 28], [19,, 23, 27]]);
}))().then($DONE, $DONE);
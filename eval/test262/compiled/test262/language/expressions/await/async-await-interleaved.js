function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Copyright 2018 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Maya Lekova <mslekova@chromium.org>
esid: await
description: >
  Await on async functions and builtin Promises are properly interleaved,
  meaning await takes only 1 tick on the microtask queue.
flags: [async]
features: [async-functions]
includes: [compareArray.js]
---*/
var actual = [];
var expected = ['Await: 1', 'Promise: 1', 'Await: 2', 'Promise: 2'];

function pushAwait(_x) {
  return _pushAwait.apply(this, arguments);
}

function _pushAwait() {
  _pushAwait = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            actual.push('Await: ' + value);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _pushAwait.apply(this, arguments);
}

function callAsync() {
  return _callAsync.apply(this, arguments);
}

function _callAsync() {
  _callAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return pushAwait(1);

          case 2:
            _context2.next = 4;
            return pushAwait(2);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _callAsync.apply(this, arguments);
}

function checkAssertions() {
  assert.compareArray(actual, expected, 'Async/await and promises should be interleaved');
}

callAsync();
new Promise(function (resolve) {
  actual.push('Promise: 1');
  resolve();
}).then(function () {
  actual.push('Promise: 2');
}).then(checkAssertions).then($DONE, $DONE);
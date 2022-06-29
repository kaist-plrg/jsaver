function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Copyright 2018 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Maya Lekova <mslekova@chromium.org>
esid: await
description: >
  This test demonstrates that monkey-patched "then" on native promises will
  not get called. Adapted from example by Kevin Smith:
  https://github.com/tc39/ecma262/pull/1250#issuecomment-401082195
flags: [async]
features: [async-functions]
includes: [compareArray.js]
---*/
var thenCallCount = 0;
var value = 42;
var actual = [];
var expected = ['Promise: 1', 'Await: ' + value, 'Promise: 2'];
var patched = Promise.resolve(value);

patched.then = function () {
  thenCallCount++;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  Promise.prototype.then.apply(this, args);
};

function trigger() {
  return _trigger.apply(this, arguments);
}

function _trigger() {
  _trigger = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = actual;
            _context.next = 3;
            return patched;

          case 3:
            _context.t1 = _context.sent;
            _context.t2 = 'Await: ' + _context.t1;

            _context.t0.push.call(_context.t0, _context.t2);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _trigger.apply(this, arguments);
}

function checkAssertions() {
  assert.compareArray(actual, expected, 'Async/await and promises should be interleaved');
  assert.sameValue(thenCallCount, 0, 'Monkey-patched "then" on native promises should not be called.');
}

trigger().then(checkAssertions).then($DONE, $DONE);
new Promise(function (resolve) {
  actual.push('Promise: 1');
  resolve();
}).then(function () {
  actual.push('Promise: 2');
});
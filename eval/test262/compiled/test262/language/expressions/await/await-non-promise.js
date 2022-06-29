function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Copyright 2018 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Maya Lekova <mslekova@chromium.org>
esid: await
description: >
  This test demonstrates that "then" on a non-native promise
  will still get called.
flags: [async]
features: [async-functions]
includes: [compareArray.js]
---*/
var value = 1;
var actual = [];
var expected = ['Await: 1', 'Promise: 1', 'Promise: 2'];

function pushAwaitSync(value) {
  actual.push('Await: ' + value);
}

function trigger() {
  return _trigger.apply(this, arguments);
}

function _trigger() {
  _trigger = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return pushAwaitSync(value);

          case 2:
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
}

trigger().then(checkAssertions).then($DONE, $DONE);
new Promise(function (resolve) {
  actual.push('Promise: 1');
  resolve();
}).then(function () {
  actual.push('Promise: 2');
});
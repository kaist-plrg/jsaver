function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Copyright 2017 Caitlin Potter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: pending
description: >
  Implementations must defer rejecting an async function's Promise until after
  all finally blocks have been evaluated.
flags: [async]
---*/
function f() {
  return _f.apply(this, arguments);
}

function _f() {
  _f = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return new Promise(function (resolve, reject) {
              reject("early-reject");
            });

          case 3:
            _context.prev = 3;
            return _context.abrupt("return", "override");

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0,, 3, 6]]);
  }));
  return _f.apply(this, arguments);
}

f().then(function (value) {
  assert.sameValue(value, "override", "Return in finally block");
}).then($DONE, $DONE);
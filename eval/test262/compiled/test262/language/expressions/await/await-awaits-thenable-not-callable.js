function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Await can await any thenable. If the thenable's then is not callable,
  await evaluates to the thenable
flags: [async]
---*/
function foo() {
  return _foo.apply(this, arguments);
}

function _foo() {
  _foo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var thenable, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            thenable = {
              then: 42
            };
            _context.next = 3;
            return thenable;

          case 3:
            res = _context.sent;
            assert.sameValue(res, thenable);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _foo.apply(this, arguments);
}

foo().then($DONE, $DONE);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// copyright 2016 microsoft, inc. all rights reserved.
// this code is governed by the bsd license found in the license file.

/*---
author: brian terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  async function bodies are executed immediately (unlike generators)
---*/
var called;

function foo() {
  return _foo.apply(this, arguments);
}

function _foo() {
  _foo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            called = true;
            _context.next = 3;
            return new Promise();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _foo.apply(this, arguments);
}

foo();
assert(called);
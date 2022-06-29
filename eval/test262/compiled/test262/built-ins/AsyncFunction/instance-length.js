function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: sec-async-function-instances-length
description: >
  Async functions have a length property that is the number of expected
  arguments.
includes: [propertyHelper.js]
---*/
function l0() {
  return _l.apply(this, arguments);
}

function _l() {
  _l = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _l.apply(this, arguments);
}

function l1(_x) {
  return _l2.apply(this, arguments);
}

function _l2() {
  _l2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(a) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _l2.apply(this, arguments);
}

function l2(_x2, _x3) {
  return _l3.apply(this, arguments);
}

function _l3() {
  _l3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(a, b) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _l3.apply(this, arguments);
}

assert.sameValue(l0.length, 0);
assert.sameValue(l1.length, 1);
assert.sameValue(l2.length, 2);
verifyNotWritable(l0, 'length');
verifyNotEnumerable(l0, 'length');
verifyConfigurable(l0, 'length');
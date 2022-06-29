function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-OptionalExpression
description: >
  optional chain on member expression in async context
info: |
  Left-Hand-Side Expressions
    OptionalExpression
      MemberExpression [PrimaryExpression identifier] OptionalChain
features: [optional-chaining]
flags: [async]
---*/
var a = undefined;
var c = {
  d: Promise.resolve(11)
};

function checkAssertions() {
  return _checkAssertions.apply(this, arguments);
}

function _checkAssertions() {
  _checkAssertions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _Promise$resolve, _Promise$reject;

    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = assert;
            _context.next = 3;
            return a === null || a === void 0 ? void 0 : a.b;

          case 3:
            _context.t1 = _context.sent;
            _context.t2 = undefined;

            _context.t0.sameValue.call(_context.t0, _context.t1, _context.t2);

            _context.t3 = assert;
            _context.next = 9;
            return c === null || c === void 0 ? void 0 : c.d;

          case 9:
            _context.t4 = _context.sent;

            _context.t3.sameValue.call(_context.t3, _context.t4, 11);

            Promise.prototype.x = 42;
            _context.next = 14;
            return (_Promise$resolve = Promise.resolve(undefined)) === null || _Promise$resolve === void 0 ? void 0 : _Promise$resolve.x;

          case 14:
            res = _context.sent;
            assert.sameValue(res, 42, 'await unwraps the evaluation of the whole optional chaining expression #1');
            Promise.prototype.y = 43;
            _context.next = 19;
            return (_Promise$reject = Promise.reject(undefined)) === null || _Promise$reject === void 0 ? void 0 : _Promise$reject.y;

          case 19:
            res = _context.sent;
            assert.sameValue(res, 43, 'await unwraps the evaluation of the whole optional chaining expression #2');
            c.e = Promise.resolve(39);
            _context.t5 = assert;
            _context.next = 25;
            return c === null || c === void 0 ? void 0 : c.e;

          case 25:
            _context.t6 = _context.sent;

            _context.t5.sameValue.call(_context.t5, _context.t6, 39, 'await unwraps the promise given after the evaluation of the OCE');

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _checkAssertions.apply(this, arguments);
}

checkAssertions().then($DONE, $DONE);
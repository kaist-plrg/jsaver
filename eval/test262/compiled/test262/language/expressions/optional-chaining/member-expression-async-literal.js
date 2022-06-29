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
    OptionalExpression:
      MemberExpression [PrimaryExpression literal] OptionalChain
features: [optional-chaining]
flags: [async]
---*/
function checkAssertions() {
  return _checkAssertions.apply(this, arguments);
}

function _checkAssertions() {
  _checkAssertions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _hello, _ref;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = assert;
            _context.next = 3;
            return (_hello = "hello") === null || _hello === void 0 ? void 0 : _hello[0];

          case 3:
            _context.t1 = _context.sent;

            _context.t0.sameValue.call(_context.t0, _context.t1, 'h');

            _context.t2 = assert;
            _context.next = 8;
            return (_ref = null) === null || _ref === void 0 ? void 0 : _ref.a;

          case 8:
            _context.t3 = _context.sent;
            _context.t4 = undefined;

            _context.t2.sameValue.call(_context.t2, _context.t3, _context.t4);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _checkAssertions.apply(this, arguments);
}

checkAssertions().then($DONE, $DONE);
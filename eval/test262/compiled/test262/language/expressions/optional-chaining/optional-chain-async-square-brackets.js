function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-OptionalExpression
description: >
  optional chain expansions in an async context
info: |
  Left-Hand-Side Expressions
    OptionalExpression
      MemberExpression [PrimaryExpression Identifier] OptionalChain
        OptionalChain ?.[Expression]
features: [optional-chaining]
flags: [async]
---*/
function checkAssertions() {
  return _checkAssertions.apply(this, arguments);
}

function _checkAssertions() {
  _checkAssertions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _ref, _ref2, _ref3;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = assert;
            _context.next = 3;
            return (_ref = [11]) === null || _ref === void 0 ? void 0 : _ref[0];

          case 3:
            _context.t1 = _context.sent;

            _context.t0.sameValue.call(_context.t0, _context.t1, 11);

            _context.t2 = assert;

            if (!((_ref2 = [22, 33]) === null || _ref2 === void 0)) {
              _context.next = 10;
              break;
            }

            _context.t3 = void 0;
            _context.next = 14;
            break;

          case 10:
            _context.next = 12;
            return Promise.resolve(1);

          case 12:
            _context.t4 = _context.sent;
            _context.t3 = _ref2[_context.t4];

          case 14:
            _context.t5 = _context.t3;

            _context.t2.sameValue.call(_context.t2, _context.t5, 33);

            _context.t6 = assert;
            _context.next = 19;
            return Promise.resolve(55);

          case 19:
            _context.t8 = _context.sent;
            _context.t9 = _ref3 = [44, _context.t8];
            _context.t7 = _context.t9 === null;

            if (_context.t7) {
              _context.next = 24;
              break;
            }

            _context.t7 = _ref3 === void 0;

          case 24:
            if (!_context.t7) {
              _context.next = 28;
              break;
            }

            _context.t10 = void 0;
            _context.next = 29;
            break;

          case 28:
            _context.t10 = _ref3[1];

          case 29:
            _context.t11 = _context.t10;

            _context.t6.sameValue.call(_context.t6, _context.t11, 55);

            _context.t12 = assert;

            if (!(undefined === null || undefined === void 0)) {
              _context.next = 36;
              break;
            }

            _context.t13 = void 0;
            _context.next = 40;
            break;

          case 36:
            _context.next = 38;
            return Promise.reject(new Error('unreachable'));

          case 38:
            _context.t14 = _context.sent;
            _context.t13 = undefined[_context.t14];

          case 40:
            _context.t15 = _context.t13;
            _context.t16 = undefined;

            _context.t12.sameValue.call(_context.t12, _context.t15, _context.t16);

          case 43:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _checkAssertions.apply(this, arguments);
}

checkAssertions().then($DONE, $DONE);
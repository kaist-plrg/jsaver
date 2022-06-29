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
        OptionalChain OptionalChain ?.[Expression]
features: [optional-chaining]
flags: [async]
---*/
function checkAssertions() {
  return _checkAssertions.apply(this, arguments);
}

function _checkAssertions() {
  _checkAssertions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _a, _d;

    var b, e;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e = function _e(val) {
              return val;
            };

            _context.t0 = assert;
            _context.next = 4;
            return (_a = {
              a: [11]
            }) === null || _a === void 0 ? void 0 : _a.a[0];

          case 4:
            _context.t1 = _context.sent;

            _context.t0.sameValue.call(_context.t0, _context.t1, 11);

            b = {
              c: [22, 33]
            };
            _context.t2 = assert;

            if (!(b === null || b === void 0)) {
              _context.next = 12;
              break;
            }

            _context.t3 = void 0;
            _context.next = 16;
            break;

          case 12:
            _context.next = 14;
            return Promise.resolve(1);

          case 14:
            _context.t4 = _context.sent;
            _context.t3 = b.c[_context.t4];

          case 16:
            _context.t5 = _context.t3;

            _context.t2.sameValue.call(_context.t2, _context.t5, 33);

            _context.t6 = assert;

            if (!((_d = {
              d: e
            }) === null || _d === void 0)) {
              _context.next = 23;
              break;
            }

            _context.t7 = void 0;
            _context.next = 28;
            break;

          case 23:
            _context.t8 = _d;
            _context.next = 26;
            return Promise.resolve([44, 55]);

          case 26:
            _context.t9 = _context.sent;
            _context.t7 = _context.t8.d.call(_context.t8, _context.t9)[1];

          case 28:
            _context.t10 = _context.t7;

            _context.t6.sameValue.call(_context.t6, _context.t10, 55);

            _context.t11 = assert;

            if (!(undefined === null || undefined === void 0)) {
              _context.next = 35;
              break;
            }

            _context.t12 = void 0;
            _context.next = 39;
            break;

          case 35:
            _context.next = 37;
            return Promise.reject(new Error('unreachable'));

          case 37:
            _context.t13 = _context.sent;
            _context.t12 = undefined.arr[_context.t13];

          case 39:
            _context.t14 = _context.t12;
            _context.t15 = undefined;

            _context.t11.sameValue.call(_context.t11, _context.t14, _context.t15);

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _checkAssertions.apply(this, arguments);
}

checkAssertions().then($DONE, $DONE);
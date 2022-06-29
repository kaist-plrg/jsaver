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
      MemberExpression [PrimaryExpression this] OptionalChain
features: [optional-chaining]
flags: [async]
---*/
function thisFn() {
  return _thisFn.apply(this, arguments);
}

function _thisFn() {
  _thisFn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this === null || this === void 0 ? void 0 : this.a;

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _thisFn.apply(this, arguments);
}

thisFn.call({
  a: Promise.resolve(33)
}).then(function (arg) {
  assert.sameValue(33, arg);
}).then($DONE, $DONE);
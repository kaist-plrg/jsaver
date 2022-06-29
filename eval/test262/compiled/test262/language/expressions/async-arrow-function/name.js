function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Copyright (C) 2019 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-async-arrow-function-definitions-runtime-semantics-evaluation
description: Assignment of function `name` attribute
info: |
    AsyncArrowFunction : async AsyncArrowBindingIdentifier => AsyncConciseBody

    1. Let scope be the LexicalEnvironment of the running execution context.
    2. Let parameters be AsyncArrowBindingIdentifier.
    3. Let closure be ! AsyncFunctionCreate(Arrow, parameters, AsyncConciseBody,
       scope, "").
    ...
    5. Return closure.

    AsyncArrowFunction : CoverCallExpressionAndAsyncArrowHead => AsyncConciseBody

    1. Let scope be the LexicalEnvironment of the running execution context.
    2. Let head be CoveredAsyncArrowHead of CoverCallExpressionAndAsyncArrowHead.
    3. Let parameters be the ArrowFormalParameters of head.
    4. Let closure be ! AsyncFunctionCreate(Arrow, parameters, AsyncConciseBody,
       scope, "").
    ...
    6. Return closure. 
includes: [propertyHelper.js]
---*/
verifyProperty( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(x) {
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

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true
});
verifyProperty( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true
});
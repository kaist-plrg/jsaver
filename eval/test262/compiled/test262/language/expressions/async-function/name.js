function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Copyright (C) 2019 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-async-function-definitions-runtime-semantics-evaluation
description: Assignment of function `name` attribute
info: |
    AsyncFunctionExpression : async function ( FormalParameters ) { AsyncFunctionBody }

    1. Let scope be the LexicalEnvironment of the running execution context.
    2. Let closure be ! AsyncFunctionCreate(Normal, FormalParameters,
       AsyncFunctionBody, scope, "").
    ...
    4. Return closure.

    AsyncFunctionExpression : async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }

    1. Let scope be the running execution context's LexicalEnvironment.
    2. Let funcEnv be ! NewDeclarativeEnvironment(scope).
    3. Let envRec be funcEnv's EnvironmentRecord.
    4. Let name be StringValue of BindingIdentifier.
    5. Perform ! envRec.CreateImmutableBinding(name).
    6. Let closure be ! AsyncFunctionCreate(Normal, FormalParameters,
       AsyncFunctionBody, funcEnv, name).
    ...
    9. Return closure.
includes: [propertyHelper.js]
---*/
verifyProperty( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true
});
verifyProperty( /*#__PURE__*/function () {
  var _func = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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

  function func() {
    return _func.apply(this, arguments);
  }

  return func;
}(), "name", {
  value: "func",
  writable: false,
  enumerable: false,
  configurable: true
});
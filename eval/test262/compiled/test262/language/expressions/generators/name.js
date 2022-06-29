// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
description: Assignment of function `name` attribute
info: |
    GeneratorExpression : function * ( FormalParameters ) { GeneratorBody }

    1. Let scope be the LexicalEnvironment of the running execution context.
    2. Let closure be GeneratorFunctionCreate(Normal, FormalParameters,
       GeneratorBody, scope, "").
    ...
    6. Return closure.

    GeneratorExpression : function * BindingIdentifier ( FormalParameters ) { GeneratorBody }

    1. Let scope be the running execution context's LexicalEnvironment.
    2. Let funcEnv be NewDeclarativeEnvironment(scope).
    3. Let envRec be funcEnv's EnvironmentRecord.
    4. Let name be StringValue of BindingIdentifier.
    5. Perform envRec.CreateImmutableBinding(name, false).
    6. Let closure be GeneratorFunctionCreate(Normal, FormalParameters,
       GeneratorBody, funcEnv, name).
    ...
    11. Return closure.
includes: [propertyHelper.js]
features: [generators]
---*/
verifyProperty( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true
});
verifyProperty( /*#__PURE__*/regeneratorRuntime.mark(function func() {
  return regeneratorRuntime.wrap(function func$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  }, func);
}), "name", {
  value: "func",
  writable: false,
  enumerable: false,
  configurable: true
});
// Copyright (C) 2018 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluatebody
description: >
    The generator object is created after FunctionDeclarationInstantiation.
info: |
    14.4.10 Runtime Semantics: EvaluateBody

    1. Perform ? FunctionDeclarationInstantiation(functionObject, argumentsList).
    2. Let G be ? OrdinaryCreateFromConstructor(functionObject, "%GeneratorPrototype%",
       « [[GeneratorState]], [[GeneratorContext]] »).
    3. Perform GeneratorStart(G, FunctionBody).
    ...

features: [generators]
---*/
var g = /*#__PURE__*/regeneratorRuntime.mark(function g() {
  var a,
      _args = arguments;
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          a = _args.length > 0 && _args[0] !== undefined ? _args[0] : g.prototype = null;

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, g);
});
var oldPrototype = g.prototype;
var it = g();
assert.notSameValue(Object.getPrototypeOf(it), oldPrototype);
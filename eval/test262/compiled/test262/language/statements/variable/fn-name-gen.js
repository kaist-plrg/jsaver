// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.3.2.4
description: Assignment of function `name` attribute (GeneratorExpression)
info: |
    VariableDeclaration : BindingIdentifier Initializer

    [...]
    7. If IsAnonymousFunctionDefinition(Initializer) is true, then
       a. Let hasNameProperty be HasOwnProperty(value, "name").
       b. ReturnIfAbrupt(hasNameProperty).
       c. If hasNameProperty is false, perform SetFunctionName(value,
          bindingId).
includes: [propertyHelper.js]
features: [generators]
---*/
var xGen = /*#__PURE__*/regeneratorRuntime.mark(function x() {
  return regeneratorRuntime.wrap(function x$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, x);
});
var gen = /*#__PURE__*/regeneratorRuntime.mark(function gen() {
  return regeneratorRuntime.wrap(function gen$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  }, gen);
});
assert(xGen.name !== 'xGen');
assert.sameValue(gen.name, 'gen');
verifyNotEnumerable(gen, 'name');
verifyNotWritable(gen, 'name');
verifyConfigurable(gen, 'name');
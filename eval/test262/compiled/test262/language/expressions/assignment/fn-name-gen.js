// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.14.4
description: Assignment of function `name` attribute (GeneratorExpression)
info: |
    AssignmentExpression[In, Yield] :
        LeftHandSideExpression[?Yield] = AssignmentExpression[?In, ?Yield]

    1. If LeftHandSideExpression is neither an ObjectLiteral nor an
       ArrayLiteral, then
       [...]
       e. If IsAnonymousFunctionDefinition(AssignmentExpression) and
          IsIdentifierRef of LeftHandSideExpression are both true, then

          i. Let hasNameProperty be HasOwnProperty(rval, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(rval,
               GetReferencedName(lref)).
includes: [propertyHelper.js]
features: [generators]
---*/
var xGen, gen;
xGen = /*#__PURE__*/regeneratorRuntime.mark(function x() {
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
gen = /*#__PURE__*/regeneratorRuntime.mark(function gen() {
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
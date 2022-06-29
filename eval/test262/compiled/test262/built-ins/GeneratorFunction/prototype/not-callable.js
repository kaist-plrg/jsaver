function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2020 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-the-generatorfunction-prototype-object
description: >
  %GeneratorFunction.prototype% is an ordinary non-callable object.
info: |
  Properties of the GeneratorFunction Prototype Object

  The GeneratorFunction prototype object:

  [...]
  * is an ordinary object.
  * is not a function object and does not have an [[ECMAScriptCode]] internal slot
    or any other of the internal slots listed in Table 28 or Table 74.
features: [generators]
---*/
var GeneratorFunctionPrototype = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
assert.sameValue(_typeof(GeneratorFunctionPrototype), "object");
assert["throws"](TypeError, function () {
  GeneratorFunctionPrototype();
});
assert(!GeneratorFunctionPrototype.hasOwnProperty("length"), "length");
assert(!GeneratorFunctionPrototype.hasOwnProperty("name"), "name");
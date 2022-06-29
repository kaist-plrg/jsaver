// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-the-generatorfunction-constructor
description: Function "name" property
info: |
  The value of the name property of the GeneratorFunction is
  "GeneratorFunction".

  17 ECMAScript Standard Built-in Objects:
  Every built-in Function object, including constructors, that is not
  identified as an anonymous function has a name property whose value is a
  String.

  Unless otherwise specified, the name property of a built-in Function object,
  if it exists, has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [generators]
---*/
var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})).constructor;
assert.sameValue(GeneratorFunction.name, 'GeneratorFunction');
verifyNotEnumerable(GeneratorFunction, 'name');
verifyNotWritable(GeneratorFunction, 'name');
verifyConfigurable(GeneratorFunction, 'name');
var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.3.1.3
description: >
  Generator.prototype.return.length is 1.
info: |
  Generator.prototype.return ( value )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, has a length
    property whose value is an integer. Unless otherwise specified, this
    value is equal to the largest number of named arguments shown in the
    subclause headings for the function description, including optional
    parameters. However, rest parameters shown using the form “...name”
    are not included in the default argument count.

    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [generators]
---*/
function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var GeneratorPrototype = Object.getPrototypeOf(g).prototype;
assert.sameValue(GeneratorPrototype["return"].length, 1);
verifyNotEnumerable(GeneratorPrototype["return"], "length");
verifyNotWritable(GeneratorPrototype["return"], "length");
verifyConfigurable(GeneratorPrototype["return"], "length");
var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Assignment of function `name` attribute
es6id: 14.4.12
info: |
    GeneratorDeclaration :
        function * BindingIdentifier ( FormalParameters ) { GeneratorBody }

    [...]
    6. Perform SetFunctionName(F, name).
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

assert.sameValue(g.name, 'g');
verifyNotEnumerable(g, 'name');
verifyNotWritable(g, 'name');
verifyConfigurable(g, 'name');
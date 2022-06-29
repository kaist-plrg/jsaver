// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Generator functions declared as methods have a `length` property that
    describes the number of formal parameters.
es6id: 14.4.13
includes: [propertyHelper.js]
features: [generators]
---*/
var method = {
  method: /*#__PURE__*/regeneratorRuntime.mark(function method(a, b, c) {
    return regeneratorRuntime.wrap(function method$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, method);
  })
}.method;
assert.sameValue(method.length, 3);
verifyNotEnumerable(method, 'length');
verifyNotWritable(method, 'length');
verifyConfigurable(method, 'length');
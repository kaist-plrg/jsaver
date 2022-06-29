var _marked = /*#__PURE__*/regeneratorRuntime.mark(generator);

// Copyright (C) 2015 Caitlin Potter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Functions created using GeneratorFunction syntactic form do not have own
    properties "caller" or "arguments", but inherit them from
    %FunctionPrototype%.
features: [generators]
---*/
function generator() {
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

assert.sameValue(generator.hasOwnProperty('caller'), false, 'No "caller" own property');
assert.sameValue(generator.hasOwnProperty('arguments'), false, 'No "arguments" own property');
assert["throws"](TypeError, function () {
  return generator.caller;
});
assert["throws"](TypeError, function () {
  generator.caller = {};
});
assert["throws"](TypeError, function () {
  return generator.arguments;
});
assert["throws"](TypeError, function () {
  generator.arguments = {};
});
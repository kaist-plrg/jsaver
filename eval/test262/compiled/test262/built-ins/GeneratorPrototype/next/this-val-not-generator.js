var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generator.prototype.next
description: >
    A TypeError should be thrown from GeneratorValidate (25.3.3.2) if the
    context of `next` does not define the [[GeneratorState]] internal slot.
info: |
  1. Let g be the this value.
  2. Return GeneratorResume(g, value).

  25.3.3.3 GeneratorResume

  1. Let state be ? GeneratorValidate(generator).

  25.3.3.2 GeneratorValidate

  [...]
  2. If generator does not have a [[GeneratorState]] internal slot, throw a
     TypeError exception.
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
assert["throws"](TypeError, function () {
  GeneratorPrototype.next.call({});
}, 'ordinary object (without value)');
assert["throws"](TypeError, function () {
  GeneratorPrototype.next.call({}, 1);
}, 'ordinary object (with value)');
assert["throws"](TypeError, function () {
  GeneratorPrototype.next.call(function () {});
}, 'function object (without value)');
assert["throws"](TypeError, function () {
  GeneratorPrototype.next.call(function () {}, 1);
}, 'function object (with value)');
assert["throws"](TypeError, function () {
  GeneratorPrototype.next.call(g);
}, 'generator function object (without value)');
assert["throws"](TypeError, function () {
  GeneratorPrototype.next.call(g, 1);
}, 'generator function object (with value)');
assert["throws"](TypeError, function () {
  GeneratorPrototype.next.call(g.prototype);
}, 'generator function prototype object (without value)');
assert["throws"](TypeError, function () {
  GeneratorPrototype.next.call(g.prototype, 1);
}, 'generator function prototype object (with value)');
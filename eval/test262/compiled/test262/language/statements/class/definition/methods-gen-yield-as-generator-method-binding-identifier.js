function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `yield` is a valid BindingIdentifier for GeneratorMethods outside of
      strict mode.
  features: [generators]
  es6id: 12.1.1
---*/
var iter, result;

var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "yield",
    value: /*#__PURE__*/regeneratorRuntime.mark(function _yield() {
      return regeneratorRuntime.wrap(function _yield$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return 3;

            case 2:
              _context.t0 = _context.sent;
              _context.next = 5;
              return 4;

            case 5:
              _context.t1 = _context.sent;
              _context.t0 + _context.t1;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _yield);
    })
  }]);

  return A;
}();

iter = A.prototype["yield"]();
result = iter.next();
assert.sameValue(result.value, 3, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');
result = iter.next();
assert.sameValue(result.value, 4, 'Second result `value`');
assert.sameValue(result.done, false, 'Second result `done` flag');
result = iter.next();
assert.sameValue(result.value, undefined, 'Third result `value`');
assert.sameValue(result.done, true, 'Third result `done` flag');
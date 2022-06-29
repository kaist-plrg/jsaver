function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    computed property names can be used as the name of a generator method in a class
includes: [compareArray.js]
---*/
var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: 'a',
    value: /*#__PURE__*/regeneratorRuntime.mark(function a() {
      return regeneratorRuntime.wrap(function a$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return 1;

            case 2:
              _context.next = 4;
              return 2;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, a);
    })
  }]);

  return C;
}();

assert.sameValue(Object.keys(C.prototype).length, 0, "The value of `Object.keys(C.prototype).length` is `0`");
assert(compareArray(Object.getOwnPropertyNames(C.prototype), ['constructor', 'a']), "`compareArray(Object.getOwnPropertyNames(C.prototype), ['constructor', 'a'])` returns `true`");
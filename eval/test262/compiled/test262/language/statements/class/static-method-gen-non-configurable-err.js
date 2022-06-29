function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generator-function-definitions-runtime-semantics-propertydefinitionevaluation
es6id: 14.4.13
description: Failure to define property for static generator method
info: |
  [...]
  10. Let desc be the PropertyDescriptor{[[Value]]: closure, [[Writable]]:
      true, [[Enumerable]]: enumerable, [[Configurable]]: true}.
  11. Return ? DefinePropertyOrThrow(object, propKey, desc). 
features: [generators]
---*/
assert["throws"](TypeError, function () {
  var C = /*#__PURE__*/function () {
    function C() {
      _classCallCheck(this, C);
    }

    _createClass(C, null, [{
      key: 'prototype',
      value: /*#__PURE__*/regeneratorRuntime.mark(function prototype() {
        return regeneratorRuntime.wrap(function prototype$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, prototype);
      })
    }]);

    return C;
  }();
});
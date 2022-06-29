var _obj;

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    super method calls in object literal concise generator
features: [generators]
---*/
var proto = {
  method: function method() {
    return 42;
  }
};
var object = _obj = {
  g: /*#__PURE__*/regeneratorRuntime.mark(function g() {
    return regeneratorRuntime.wrap(function g$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _get(_getPrototypeOf(_obj), "method", this).call(this);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, g, this);
  })
};
Object.setPrototypeOf(object, proto);
assert.sameValue(object.g().next().value, 42, "The value of `object.g().next().value` is `42`, after executing `Object.setPrototypeOf(object, proto);`, where `object " + String(object) + "`");
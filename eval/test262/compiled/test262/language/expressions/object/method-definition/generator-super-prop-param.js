var _obj;

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: |
 GeneratorMethod can reference SuperProperty in default parameters
es6id: 14.4.1
author: Sam Mikes
description: GeneratorMethod uses SuperProperty (allowed)
features: [default-parameters, generators, super]
---*/
var obj = _obj = {
  foo: /*#__PURE__*/regeneratorRuntime.mark(function foo() {
    var a,
        _args = arguments;
    return regeneratorRuntime.wrap(function foo$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            a = _args.length > 0 && _args[0] !== undefined ? _args[0] : _get(_getPrototypeOf(_obj), "toString", this);
            return _context.abrupt("return", a);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, foo, this);
  })
};
obj.toString = null;
assert.sameValue(obj.foo().next().value, Object.prototype.toString);
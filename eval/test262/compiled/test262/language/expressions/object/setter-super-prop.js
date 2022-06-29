var _obj;

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    super method calls in object literal setters
---*/
var proto = {
  _x: 0,

  set x(v) {
    return this._x = v;
  }

};
var object = _obj = {
  set x(v) {
    _set(_getPrototypeOf(_obj), "x", v, this, true);
  }

};
Object.setPrototypeOf(object, proto);
assert.sameValue(object.x = 1, 1, "`object.x = 1` is `1`, after executing `Object.setPrototypeOf(object, proto);`");
assert.sameValue(object._x, 1, "The value of `object._x` is `1`, after executing `Object.setPrototypeOf(object, proto);`");
assert.sameValue(Object.getPrototypeOf(object)._x, 0, "The value of `Object.getPrototypeOf(object)._x` is `0`");
var _obj, _obj2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    computed property methods can call super methods
---*/
function ID(x) {
  return x;
}

var proto = {
  m: function m() {
    return ' proto m';
  }
};
var object = _obj = (_obj2 = {}, _defineProperty(_obj2, 'a', function a() {
  return 'a' + _get(_getPrototypeOf(_obj), "m", this).call(this);
}), _defineProperty(_obj2, ID('b'), function () {
  return 'b' + _get(_getPrototypeOf(_obj), "m", this).call(this);
}), _defineProperty(_obj2, 0, function _() {
  return '0' + _get(_getPrototypeOf(_obj), "m", this).call(this);
}), _defineProperty(_obj2, ID(1), function () {
  return '1' + _get(_getPrototypeOf(_obj), "m", this).call(this);
}), _obj2);
Object.setPrototypeOf(object, proto);
assert.sameValue(object.a(), 'a proto m', "`object.a()` returns `'a proto m'`, after executing `Object.setPrototypeOf(object, proto);`");
assert.sameValue(object.b(), 'b proto m', "`object.b()` returns `'b proto m'`, after executing `Object.setPrototypeOf(object, proto);`");
assert.sameValue(object[0](), '0 proto m', "`object[0]()` returns `'0 proto m'`, after executing `Object.setPrototypeOf(object, proto);`");
assert.sameValue(object[1](), '1 proto m', "`object[1]()` returns `'1 proto m'`, after executing `Object.setPrototypeOf(object, proto);`");
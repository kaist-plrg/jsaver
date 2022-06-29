var _obj, _a, _ID, _, _ID2, _obj2, _mutatorMap;

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } if (Object.getOwnPropertySymbols) { var objectSymbols = Object.getOwnPropertySymbols(descs); for (var i = 0; i < objectSymbols.length; i++) { var sym = objectSymbols[i]; var desc = descs[sym]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, sym, desc); } } return obj; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.5
description: >
    computed property setters can call super methods
---*/
function ID(x) {
  return x;
}

var value;
var proto = {
  m: function m(name, v) {
    value = name + ' ' + v;
  }
};
var object = _obj = (_obj2 = {}, _a = 'a', _mutatorMap = {}, _mutatorMap[_a] = _mutatorMap[_a] || {}, _mutatorMap[_a].set = function (v) {
  _get(_getPrototypeOf(_obj), "m", this).call(this, 'a', v);
}, _ID = ID('b'), _mutatorMap[_ID] = _mutatorMap[_ID] || {}, _mutatorMap[_ID].set = function (v) {
  _get(_getPrototypeOf(_obj), "m", this).call(this, 'b', v);
}, _ = 0, _mutatorMap[_] = _mutatorMap[_] || {}, _mutatorMap[_].set = function (v) {
  _get(_getPrototypeOf(_obj), "m", this).call(this, '0', v);
}, _ID2 = ID(1), _mutatorMap[_ID2] = _mutatorMap[_ID2] || {}, _mutatorMap[_ID2].set = function (v) {
  _get(_getPrototypeOf(_obj), "m", this).call(this, '1', v);
}, _defineEnumerableProperties(_obj2, _mutatorMap), _obj2);
Object.setPrototypeOf(object, proto);
object.a = 2;
assert.sameValue(value, 'a 2', "The value of `value` is `'a 2'`, after executing `object.a = 2;`");
object.b = 3;
assert.sameValue(value, 'b 3', "The value of `value` is `'b 3'`, after executing `object.b = 3;`");
object[0] = 4;
assert.sameValue(value, '0 4', "The value of `value` is `'0 4'`, after executing `object[0] = 4;`");
object[1] = 5;
assert.sameValue(value, '1 5', "The value of `value` is `'1 5'`, after executing `object[1] = 5;`");
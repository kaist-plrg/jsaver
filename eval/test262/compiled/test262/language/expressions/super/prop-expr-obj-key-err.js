var _obj;

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-super-keyword
es6id: 12.3.5
description: Abrupt completion from type coercion of property key
info: |
  1. Let propertyNameReference be the result of evaluating Expression.
  2. Let propertyNameValue be ? GetValue(propertyNameReference).
  3. Let propertyKey be ? ToPropertyKey(propertyNameValue).

  7.1.14 ToPropertyKey

  1. Let key be ? ToPrimitive(argument, hint String).
---*/
var thrown = new Test262Error();
var badToString = {
  toString: function toString() {
    throw thrown;
  }
};
var caught;
var obj = _obj = {
  method: function method() {
    try {
      _get(_getPrototypeOf(_obj), badToString, this);
    } catch (err) {
      caught = err;
    }
  }
};
obj.method();
assert.sameValue(caught, thrown);
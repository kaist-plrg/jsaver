var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-delete-operator-runtime-semantics-evaluation
description: The restriction on the base of a super property must be enforced before the delete expression is evaluated.
info: |
  # 13.3.7.3 MakeSuperPropertyReference ( actualThis, propertyKey, strict )

  1. Let env be GetThisEnvironment().
  2. Assert: env.HasSuperBinding() is true.
  3. Let baseValue be ? env.GetSuperBase().
  4. Let bv be ? RequireObjectCoercible(baseValue).

  # 13.5.1.2 Runtime Semantics: Evaluation
  UnaryExpression : delete UnaryExpression

  1. Let ref be the result of evaluating UnaryExpression.
  [...]
  5. If IsPropertyReference(ref) is true, then
    a. If IsSuperReference(ref) is true, throw a ReferenceError exception.
features: [class]
---*/
var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, null, [{
    key: "m",
    value: function m() {
      delete _get(_getPrototypeOf(C), "x", this);
    }
  }]);

  return C;
}();

Object.setPrototypeOf(C, null);
assert["throws"](TypeError, function () {
  _newArrowCheck(this, _this);

  C.m();
}.bind(this));
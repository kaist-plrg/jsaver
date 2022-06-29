// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.3.3
description: >
  The ObjectBindingPattern with a simple property list and single name binding
info: |
  Destructuring Binding Patterns - Syntax

  ObjectBindingPattern[Yield] :
    { }
    { BindingPropertyList[?Yield] }
    { BindingPropertyList[?Yield] , }

  BindingPropertyList[Yield] :
    BindingProperty[?Yield]
    BindingPropertyList[?Yield] , BindingProperty[?Yield]

  BindingProperty[Yield] :
    SingleNameBinding[?Yield]
    PropertyName[?Yield] : BindingElement[?Yield]

  SingleNameBinding[Yield] :
    BindingIdentifier[?Yield] Initializer[In, ?Yield]opt

features: [destructuring-binding]
---*/
function fna(_ref) {
  var x = _ref.x;
}

function fnb(_ref2) {
  var x = _ref2.x,
      y = _ref2.y;
}

function fnc(_ref3) {
  var _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 42 : _ref3$x;
}

function fnd(_ref4) {
  var x = _ref4.x,
      _ref4$y = _ref4.y,
      y = _ref4$y === void 0 ? 42 : _ref4$y;
}
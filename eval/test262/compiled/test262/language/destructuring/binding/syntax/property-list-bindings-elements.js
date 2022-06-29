function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.3.3
description: >
  The ObjectBindingPattern with binding elements
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

  BindingElement[Yield ] :
    SingleNameBinding[?Yield]
    BindingPattern[?Yield] Initializer[In, ?Yield]opt

  SingleNameBinding[Yield] :
    BindingIdentifier[?Yield] Initializer[In, ?Yield]opt

features: [destructuring-binding]
---*/
// BindingElement w/ SingleNameBinding
function fna(_ref) {
  var y = _ref.x;
} // BindingElement w/ SingleNameBinding with initializer


function fnb(_ref2) {
  var _ref2$x = _ref2.x,
      y = _ref2$x === void 0 ? 42 : _ref2$x;
} // BindingElement w/ BindingPattern


function fnc(_ref3) {
  _objectDestructuringEmpty(_ref3.x);
}

function fnd(_ref4) {
  var y = _ref4.x.y;
} // BindingElement w/ BindingPattern w/ initializer


function fne(_ref5) {
  var _ref5$x = _ref5.x;
  _ref5$x = _ref5$x === void 0 ? 42 : _ref5$x;

  _objectDestructuringEmpty(_ref5$x);
}

function fnf(_ref6) {
  var _ref6$x = _ref6.x;
  _ref6$x = _ref6$x === void 0 ? 42 : _ref6$x;
  var y = _ref6$x.y;
}
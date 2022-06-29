function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.3.3
description: >
  The ObjectBindingPattern with deep binding property lists
info: |
  Destructuring Binding Patterns - Syntax

  ObjectBindingPattern[Yield] :
    { }
    { BindingPropertyList[?Yield] }
    { BindingPropertyList[?Yield] , }

  BindingPropertyList[Yield] :
    BindingProperty[?Yield]
    BindingPropertyList[?Yield] , BindingProperty[?Yield]

features: [destructuring-binding]
---*/
function fn1(_ref) {
  var q = _ref.a.p,
      r = _ref.b.r,
      _ref$c$s = _ref.c.s,
      s = _ref$c$s === void 0 ? 0 : _ref$c$s;

  _objectDestructuringEmpty(_ref.d);
}

function fn2(x, _ref2, y) {
  var r = _ref2.a,
      s = _ref2.b,
      t = _ref2.c;
}

function fn3(_ref3) {
  var _ref3$x$y$z = _ref3.x.y.z;
  _ref3$x$y$z = _ref3$x$y$z === void 0 ? 42 : _ref3$x$y$z;

  _objectDestructuringEmpty(_ref3$x$y$z);
}
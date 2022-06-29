// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.3.3
description: >
  The Binding Property List followed by a single comma is a valid syntax
info: |
  Destructuring Binding Patterns - Syntax

  ObjectBindingPattern[Yield] :
    { }
    { BindingPropertyList[?Yield] }
    { BindingPropertyList[?Yield] , }

features: [destructuring-binding]
---*/
function fn1(_ref) {
  var x = _ref.x;
}

function fn2(_ref2) {
  var q = _ref2.a.p;
}

function fn3(_ref3) {
  var x = _ref3.x;
}
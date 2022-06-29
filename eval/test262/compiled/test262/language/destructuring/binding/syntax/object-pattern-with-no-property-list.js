function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.3.3
description: >
  The ObjectBindingPattern can be `{ }`
info: |
  Destructuring Binding Patterns - Syntax

  ObjectBindingPattern[Yield] :
    { }
    { BindingPropertyList[?Yield] }
    { BindingPropertyList[?Yield] , }

features: [destructuring-binding]
---*/
function fn(_ref) {
  _objectDestructuringEmpty(_ref);
}
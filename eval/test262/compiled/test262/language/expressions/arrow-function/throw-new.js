function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.3.3.1.1
description: >
    Runtime Semantics: EvaluateNew(constructProduction, arguments)

    ...
    8. If IsConstructor (constructor) is false, throw a TypeError exception.
    ...

---*/
assert["throws"](TypeError, function () {
  var _this = this;

  new (function () {
    _newArrowCheck(this, _this);
  }.bind(this))();
});
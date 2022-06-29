function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.5.15
description: Assignment of function `name` attribute
info: |
    ClassDeclaration : class BindingIdentifier ClassTail

    [...]
    6. If hasNameProperty is false, then perform SetFunctionName(value,
       className).
includes: [propertyHelper.js]
---*/
var Test262 = /*#__PURE__*/_createClass(function Test262() {
  _classCallCheck(this, Test262);
});

assert.sameValue(Test262.name, 'Test262');
verifyNotEnumerable(Test262, 'name');
verifyNotWritable(Test262, 'name');
verifyConfigurable(Test262, 'name');
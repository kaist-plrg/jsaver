function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-class-definitions-runtime-semantics-evaluation
description: Assignment of function `name` attribute
info: |
    ClassExpression : class ClassTail

    1. Let value be ? ClassDefinitionEvaluation of ClassTail with arguments
       undefined and "".
    ...
    4. Return value.

    ClassExpression : class BindingIdentifier ClassTail

    1. Let className be StringValue of BindingIdentifier.
    2. Let value be ? ClassDefinitionEvaluation of ClassTail with arguments
       className and className.
    ...
    4. Return value.

    14.6.13 Runtime Semantics: ClassDefinitionEvaluation

    ...
    12. Let constructorInfo be DefineMethod of constructor with arguments proto,
        className as the optional name argument, and constructorParent.
    ...

    14.3.7 Runtime Semantics: DefineMethod

    ...
    7. Let closure be FunctionCreate(kind, UniqueFormalParameters, FunctionBody,
       scope, name, prototype).
    ...

includes: [propertyHelper.js]
---*/
verifyProperty( /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  return _createClass(_class);
}(), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true
});
verifyProperty( /*#__PURE__*/_createClass(function cls() {
  _classCallCheck(this, cls);
}), "name", {
  value: "cls",
  writable: false,
  enumerable: false,
  configurable: true
});
verifyProperty( /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  return _createClass(_class2);
}(), "name", {
  value: "",
  writable: false,
  enumerable: false,
  configurable: true
});
verifyProperty( /*#__PURE__*/_createClass(function cls() {
  _classCallCheck(this, cls);
}), "name", {
  value: "cls",
  writable: false,
  enumerable: false,
  configurable: true
});
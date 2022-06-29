function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-globaldeclarationinstantiation
es6id: 15.1.8
description: Declaration of lexical bindings
info: |
  [...]
  16. For each element d in lexDeclarations do
      a. NOTE Lexically declared names are only instantiated here but not
         initialized.
      b. For each element dn of the BoundNames of d do
         i. If IsConstantDeclaration of d is true, then
            1. Perform ? envRec.CreateImmutableBinding(dn, true).
         ii. Else,
             1. Perform ? envRec.CreateMutableBinding(dn, false).
  [...]
---*/
var test262let = 1;
test262let = 2;
assert.sameValue(test262let, 2, '`let` binding is mutable');
assert.sameValue(this.hasOwnProperty('test262let'), false, 'property not created on the global object (let)');
var test262const = 3;
assert["throws"](TypeError, function () {
  4, _readOnlyError("test262const");
}, '`const` binding is strictly immutable');
assert.sameValue(test262const, 3, '`const` binding cannot be modified');
assert.sameValue(this.hasOwnProperty('test262const'), false, 'property not created on the global object (const)');

var test262class = /*#__PURE__*/_createClass(function test262class() {
  _classCallCheck(this, test262class);
});

test262class = 5;
assert.sameValue(test262class, 5, '`class` binding is mutable');
assert.sameValue(this.hasOwnProperty('test262class'), false, 'property not created on the global object (class)');
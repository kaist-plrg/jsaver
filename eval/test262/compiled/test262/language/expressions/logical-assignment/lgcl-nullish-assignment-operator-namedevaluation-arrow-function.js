var _value,
    _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (c) 2020 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-assignment-operators-runtime-semantics-evaluation
description: NamedEvaluation of Logical Nullish Assignment
info: |
    AssignmentExpression:
      LeftHandSideExpression ??= AssignmentExpression

    4. If IsAnonymousFunctionDefinition(AssignmentExpression) and IsIdentifierRef of LeftHandSideExpression are both true, then
      a. Let rval be NamedEvaluation of AssignmentExpression with argument GetReferencedName(lref).
features: [logical-assignment-operators]

---*/
var value = undefined;
(_value = value) !== null && _value !== void 0 ? _value : value = function value() {
  _newArrowCheck(this, _this);
}.bind(this);
assert.sameValue(value.name, "value", "value");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (c) 2020 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-assignment-operators-runtime-semantics-evaluation
description: NamedEvaluation of Logical Or Assignment
info: |
    AssignmentExpression:
      LeftHandSideExpression ||= AssignmentExpression

    5. If IsAnonymousFunctionDefinition(AssignmentExpression) and IsIdentifierRef of LeftHandSideExpression are both true, then
      a. Let rval be NamedEvaluation of AssignmentExpression with argument GetReferencedName(lref).
features: [logical-assignment-operators]

---*/
var value = 0;
value || (value = /*#__PURE__*/_createClass(function value() {
  _classCallCheck(this, value);
}));
assert.sameValue(value.name, "value", "value");
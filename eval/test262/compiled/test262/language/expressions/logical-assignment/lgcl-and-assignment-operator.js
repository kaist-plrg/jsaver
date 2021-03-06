// Copyright (c) 2020 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-assignment-operators-runtime-semantics-evaluation
description: Logical And Assignment Operator
info: |
    AssignmentExpression:
      LeftHandSideExpression &&= AssignmentExpression

    1. Let lref be the result of evaluating LeftHandSideExpression.
    2. Let lval be ? GetValue(lref).
    3. Let lbool be ! ToBoolean(lval).
    4. If lbool is false, return lval.
    5. Let rref be the result of evaluating AssignmentExpression.
    6. Let rval be ? GetValue(rref).
    7. Perform ? PutValue(lref, rval).
    8. Return rval.
features: [logical-assignment-operators]

---*/
var value = undefined;
assert.sameValue(value && (value = 1), undefined, "(value &&= 1) === undefined; where value = undefined");
value = null;
assert.sameValue(value && (value = 1), null, "(value &&= 1) === null where value = null");
value = false;
assert.sameValue(value && (value = 1), false, "(value &&= 1) === false; where value = false");
value = 0;
assert.sameValue(value && (value = 1), 0, "(value &&= 1) === 0; where value = 0");
value = -0;
assert.sameValue(value && (value = 1), -0, "(value &&= 1) === -0; where value = -0");
value = NaN;
assert.sameValue(value && (value = 1), NaN, "(value &&= 1) === NaN; where value = NaN");
value = "";
assert.sameValue(value && (value = 1), "", '(value &&= 1) === "" where value = ""');
value = true;
assert.sameValue(value && (value = 1), 1, "(value &&= 1) === 1; where value = true");
value = 2;
assert.sameValue(value && (value = 1), 1, "(value &&= 1) === 1; where value = 2");
value = "test";
assert.sameValue(value && (value = 1), 1, '(value &&= 1) === 1; where value = "test"');
var sym = Symbol("");
value = sym;
assert.sameValue(value && (value = 1), 1, "(value &&= 1) === 1; where value = Symbol()");
var obj = {};
value = obj;
assert.sameValue(value && (value = 1), 1, "(value &&= 1) === 1; where value = {}");
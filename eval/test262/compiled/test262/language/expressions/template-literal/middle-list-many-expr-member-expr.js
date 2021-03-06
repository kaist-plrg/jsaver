// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.8.5
description: MemberExpression in expression position of TemplateMiddleList
info: |
    TemplateMiddleList : TemplateMiddleList TemplateMiddle Expression

    1. Let rest be the result of evaluating TemplateMiddleList .
    2. ReturnIfAbrupt(rest).
    3. Let middle be the TV of TemplateMiddle as defined in 11.8.6.
    4. Let sub be the result of evaluating Expression.
    5. Let last be ToString(sub).
---*/
var object = {
  number: 5,
  string: 'stringValue'
};
assert.sameValue("".concat(0, " ", 1, " ", object.number, " bar"), '0 1 5 bar', 'number value property');
assert.sameValue("".concat(0, " ", 1, " ", object.string, " bar"), '0 1 stringValue bar', 'string value property');
assert.sameValue("".concat(0, " ", 1, " ", object['string'], " bar"), '0 1 stringValue bar', 'string value property (single-quote string dereference)');
assert.sameValue("".concat(0, " ", 1, " ", object["string"], " bar"), '0 1 stringValue bar', 'string value property (double-quote string dereference)');
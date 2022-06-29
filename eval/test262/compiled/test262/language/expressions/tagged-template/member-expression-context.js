var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.3.7
description: Invocation context for member expressions
info: |
    A tagged template is a function call where the arguments of the call are
    derived from a TemplateLiteral. The actual arguments include a template
    object and the values produced by evaluating the expressions embedded
    within the TemplateLiteral.
---*/
var context;
var obj = {
  fn: function fn() {
    context = this;
  }
};
obj.fn(_templateObject || (_templateObject = _taggedTemplateLiteral(["NoSubstitutionTemplate"])));
assert.sameValue(context, obj);
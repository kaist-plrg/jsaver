var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-tagged-templates-runtime-semantics-evaluation
es6id: 12.3.7.1
description: Value when invoked via tagged template
info: |
   MemberExpression : MemberExpression TemplateLiteral

   [...]
   4. Return ? EvaluateCall(tagRef, TemplateLiteral, tailCall).
features: [new.target, template]
---*/
var newTarget = null;

function f() {
  newTarget = this instanceof f ? this.constructor : void 0;
}

f(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
assert.sameValue(newTarget, undefined);
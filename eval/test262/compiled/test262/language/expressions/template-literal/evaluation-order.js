var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.8
description: Expressions should be evaluated in left-to-right order.
---*/
var tag = function tag(templateObject, a, b, c) {
  callCount++;
  assert.sameValue(a, 0);
  assert.sameValue(b, 1);
  assert.sameValue(c, 2);
};

var i = 0;
var callCount;
assert.sameValue("a".concat(i++, "b").concat(i++, "c").concat(i++, "d"), 'a0b1c2d');
i = 0;
callCount = 0;
tag(_templateObject || (_templateObject = _taggedTemplateLiteral(["a", "b", "c", "d"])), i++, i++, i++);
assert.sameValue(callCount, 1);
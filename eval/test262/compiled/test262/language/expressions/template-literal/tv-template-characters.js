var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 11.8.6.1
description: Template values of multiple template characters
info: |
    The TV of TemplateCharacters :: TemplateCharacter TemplateCharacters is a
    sequence consisting of the code units in the TV of TemplateCharacter
    followed by all the code units in the TV of TemplateCharacters in order.
    The TRV of TemplateCharacters :: TemplateCharacter TemplateCharacters is a
    sequence consisting of the code units in the TRV of TemplateCharacter
    followed by all the code units in the TRV of TemplateCharacters, in order.
---*/
var calls = 0;

(function (s) {
  calls++;
  assert.sameValue(s.raw[0], 'test');
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["test"])));

assert.sameValue(calls, 1);
assert.sameValue("test", 'test');
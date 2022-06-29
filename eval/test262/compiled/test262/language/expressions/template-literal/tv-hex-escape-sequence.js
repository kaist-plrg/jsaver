var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 11.8.6.1
description: Template values of hex escape sequences
info: |
    The TV of TemplateCharacter :: \ EscapeSequence is the SV of
    EscapeSequence.
    The SV of UnicodeEscapeSequence :: u{ HexDigits } is the UTF16Encoding
    (10.1.1) of the MV of HexDigits.
    The TRV of UnicodeEscapeSequence :: u{ HexDigits } is the sequence
    consisting of code unit value 0x0075 followed by code unit value 0x007B
    followed by TRV of HexDigits followed by code unit value 0x007D.
---*/
var calls;
calls = 0;

(function (s) {
  calls++;
  assert.sameValue(s[0], 'A', 'TV');
  assert.sameValue(s.raw[0], '\\x41', 'TRV');
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["A"], ["\\x41"])));

assert.sameValue(calls, 1);
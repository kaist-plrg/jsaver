// Copyright (C) 2016 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-unicode-format-control-characters
description: >
  Mongolian Vowel Separator can appear in multi-line comments.
info: |
  11.1 Unicode Format-Control Characters

  The Unicode format-control characters (i.e., the characters in category “Cf”
  in the Unicode Character Database such as LEFT-TO-RIGHT MARK or RIGHT-TO-LEFT
  MARK) are control codes used to control the formatting of a range of text in
  the absence of higher-level protocols for this (such as mark-up languages).

  It is useful to allow format-control characters in source text to facilitate
  editing and display. All format control characters may be used within comments,
  and within string literals, template literals, and regular expression literals.
features: [u180e]
---*/
// U+180E in comments; UTF8(0x180E) = 0xE1 0xA0 0x8E
assert.sameValue(0,
/*᠎  multi-line comment with U+180E */
0);
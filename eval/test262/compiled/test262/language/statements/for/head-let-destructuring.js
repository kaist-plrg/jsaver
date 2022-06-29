function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iteration-statements
es6id: 13.7
description: >
  The token sequence `let [`is interpreted as the beginning of a destructuring
  binding pattern
info: |
  Syntax

  IterationStatement[Yield, Return]:

    for ( [lookahead ∉ { let [ } ] Expression[~In, ?Yield]opt ;
      Expression[+In, ?Yield]opt ; Expression[+In, ?Yield]opt )
      Statement[?Yield, ?Return]

    for ( LexicalDeclaration[~In, ?Yield] Expression[+In, ?Yield]opt ;
      Expression[+In, ?Yield]opt) Statement[?Yield, ?Return]
---*/
var value;

for (var _x = 23;;) {
  value = _x;
  break;
}

assert.sameValue(typeof x === "undefined" ? "undefined" : _typeof(x), 'undefined', 'binding is block-scoped');
assert.sameValue(value, 23);
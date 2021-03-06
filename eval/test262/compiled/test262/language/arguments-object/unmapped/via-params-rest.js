// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-functiondeclarationinstantiation
es6id: 9.2.12
description: >
  Arguments are "unmapped" when paramater list is non-simple due to "rest"
  parameter
info: |
  [...]
  9. Let simpleParameterList be IsSimpleParameterList of formals.
  [...]
  22. If argumentsObjectNeeded is true, then
      a. If strict is true or if simpleParameterList is false, then
         i. Let ao be CreateUnmappedArgumentsObject(argumentsList).
      [...]
---*/
var value;

function rest(a) {
  for (var _len = arguments.length, b = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    b[_key - 1] = arguments[_key];
  }

  arguments[0] = 2;
  value = a;
}

rest(1);
assert.sameValue(value, 1);
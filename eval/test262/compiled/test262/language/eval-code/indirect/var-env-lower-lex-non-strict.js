// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-evaldeclarationinstantiation
description: No variable collision with lexical binding in lower scope
info: |
    [...]
    5. If strict is false, then
       [...]
       d. Repeat while thisLex is not the same as varEnv,
       [...]
features: [let]
---*/
{
  var x;
  {
    (0, eval)('var x;');
  }
}
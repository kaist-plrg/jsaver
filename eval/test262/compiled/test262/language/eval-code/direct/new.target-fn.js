// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-scripts-static-semantics-early-errors
es6id: 15.1.1
description: >
  A direct eval in the functon code of a non-ArrowFunction may contain
  `new.target`
info: |
  - It is a Syntax Error if StatementList Contains NewTarget unless the source
    code containing NewTarget is eval code that is being processed by a direct
    eval that is contained in function code that is not the function code of an
    ArrowFunction.
features: [new.target]
---*/
var newTarget = null;

var getNewTarget = function getNewTarget() {
  newTarget = eval('new.target;');
};

getNewTarget();
assert.sameValue(newTarget, undefined);
new getNewTarget();
assert.sameValue(newTarget, getNewTarget);
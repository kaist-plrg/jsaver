// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-for-statement-runtime-semantics-labelledevaluation
description: Creation of new lexical environment for the statement "head"
info: |
    [...]
    2. Let loopEnv be NewDeclarativeEnvironment(oldEnv).
    3. Let loopEnvRec be loopEnv's EnvironmentRecord.
    4. Let isConst be the result of performing IsConstantDeclaration of
       LexicalDeclaration.
    5. Let boundNames be the BoundNames of LexicalDeclaration.
    6. For each element dn of boundNames do
       a. If isConst is true, then
          i. Perform ! loopEnvRec.CreateImmutableBinding(dn, true).
       b. Else,
          i. Perform ! loopEnvRec.CreateMutableBinding(dn, false).
    7. Set the running execution context's LexicalEnvironment to loopEnv.
    [...]
features: [let]
---*/
var x = 'outside';

var probeBefore = function probeBefore() {
  return x;
};

var probeDecl, probeTest, probeIncr, probeBody;
var run = true;

var _loop = function _loop(_, _x) {
  probeBody = function probeBody() {
    return _x;
  }, run = false;
};

for (var _x = 'inside', _ = probeDecl = function probeDecl() {
  return _x;
}; run && (probeTest = function probeTest() {
  return _x;
}); probeIncr = function probeIncr() {
  return _x;
}) {
  _loop(_, _x);
}

assert.sameValue(probeBefore(), 'outside');
assert.sameValue(probeDecl(), 'inside', 'reference from LexicalDeclaration');
assert.sameValue(probeTest(), 'inside', 'reference from "test" position');
assert.sameValue(probeBody(), 'inside', 'reference from statement body');
assert.sameValue(probeIncr(), 'inside', 'reference from "increment" position');
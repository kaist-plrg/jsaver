// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-function-definitions-runtime-semantics-evaluation
description: >
    Creation of new variable environment for the BindingIdentifier
    parameter
info: |
    [...]
    2. Let scope be the running execution context's LexicalEnvironment.
    3. Let funcEnv be NewDeclarativeEnvironment(scope).
    4. Let envRec be funcEnv's EnvironmentRecord.
    5. Let name be StringValue of BindingIdentifier.
    6. Perform envRec.CreateImmutableBinding(name, false).
    7. Let closure be FunctionCreate(Normal, FormalParameters, FunctionBody,
       funcEnv, strict).
    [...]
flags: [onlyStrict]
---*/
var f = 'outside';

var probeBefore = function probeBefore() {
  return f;
};

var setBefore = function setBefore() {
  f = null;
};

var probeParams, setParams, probeBody, setBody;

var func = function f() {
  var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (probeParams = function probeParams() {
    return f;
  }, setParams = function setParams() {
    f = null;
  });

  probeBody = function probeBody() {
    return f;
  };

  setBody = function setBody() {
    f = null;
  };
};

func();
assert.sameValue(probeBefore(), 'outside');
setBefore();
assert.sameValue(probeBefore(), null);
assert.sameValue(probeParams(), func, 'inner binding value (from parameters)');
assert["throws"](TypeError, setParams, 'inner binding rejects modification (from parameters)');
assert.sameValue(probeParams(), func, 'inner binding is immutable (from parameters)');
assert.sameValue(probeBody(), func, 'inner binding value (from body)');
assert["throws"](TypeError, setBody, 'inner binding rejects modification (from body)');
assert.sameValue(probeBody(), func, 'inner binding is immutable (from body)');
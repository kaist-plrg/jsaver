// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-functiondeclarationinstantiation
description: >
    Disposal of variable environment for the function body
info: |
    [...]
    26. If hasParameterExpressions is false, then
        [...]
    27. Else,
        a. NOTE A separate Environment Record is needed to ensure that closures
           created by expressions in the formal parameter list do not have
           visibility of declarations in the function body.
        b. Let varEnv be NewDeclarativeEnvironment(env).
        c. Let varEnvRec be varEnv's EnvironmentRecord.
        d. Set the VariableEnvironment of calleeContext to varEnv.
        e. Let instantiatedVarNames be a new empty List.
        [...]
---*/
var probe; // A parameter expression is necessary to trigger the creation of the scope
// under test.

(function () {
  var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var x = 'inside';

  probe = function probe() {
    return x;
  };
})();

var x = 'outside';
assert.sameValue(probe(), 'inside');
assert.sameValue(x, 'outside');
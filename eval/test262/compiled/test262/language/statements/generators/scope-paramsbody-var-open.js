// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-functiondeclarationinstantiation
description: >
    Creation of new variable environment for the function body (as distinct from
    that for the function's parameters)
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
features: [generators]
---*/
var x = 'outside';
var probeParams, probeBody;

function g() {
  var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : probeParams = function probeParams() {
    return x;
  };

  return /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var x;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            x = 'inside';

            probeBody = function probeBody() {
              return x;
            };

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })();
}

g().next();
assert.sameValue(probeParams(), 'outside');
assert.sameValue(probeBody(), 'inside');
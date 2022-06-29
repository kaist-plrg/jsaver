var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

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
features: [generators]
---*/
var probe; // A parameter expression is necessary to trigger the creation of the scope
// under test.

function g() {
  var _,
      x,
      _args = arguments;

  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
          x = 'inside';

          probe = function probe() {
            return x;
          };

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

g().next();
var x = 'outside';
assert.sameValue(probe(), 'inside');
assert.sameValue(x, 'outside');
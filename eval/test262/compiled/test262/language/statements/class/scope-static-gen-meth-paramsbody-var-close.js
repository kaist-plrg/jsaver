function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
var probe;

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, null, [{
    key: "m",
    value:
    /*#__PURE__*/
    // A parameter expression is necessary to trigger the creation of the scope
    // under test.
    regeneratorRuntime.mark(function m() {
      var _,
          x,
          _args = arguments;

      return regeneratorRuntime.wrap(function m$(_context) {
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
      }, m);
    })
  }]);

  return C;
}();

C.m().next();
var x = 'outside';
assert.sameValue(probe(), 'inside');
assert.sameValue(x, 'outside');
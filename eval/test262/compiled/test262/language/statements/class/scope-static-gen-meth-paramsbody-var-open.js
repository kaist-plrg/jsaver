function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, null, [{
    key: "m",
    value: function m() {
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
  }]);

  return C;
}();

C.m().next();
assert.sameValue(probeParams(), 'outside');
assert.sameValue(probeBody(), 'inside');
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
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
    7. Let closure be GeneratorFunctionCreate(Normal, FormalParameters,
       GeneratorBody, funcEnv, strict).
    [...]
flags: [onlyStrict]
features: [generators]
---*/
var g = 'outside';

var probeBefore = function probeBefore() {
  return g;
};

var setBefore = function setBefore() {
  g = null;
};

var probeParams, setParams, probeBody, setBody;
var func = /*#__PURE__*/regeneratorRuntime.mark(function g() {
  var _,
      _args = arguments;

  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ = _args.length > 0 && _args[0] !== undefined ? _args[0] : (probeParams = function probeParams() {
            return g;
          }, setParams = function setParams() {
            g = null;
          });

          probeBody = function probeBody() {
            return g;
          };

          setBody = function setBody() {
            g = null;
          };

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, g);
});
func().next();
assert.sameValue(probeBefore(), 'outside');
setBefore();
assert.sameValue(probeBefore(), null);
assert.sameValue(probeParams(), func, 'inner binding value (from parameters)');
assert["throws"](TypeError, setParams, 'inner binding rejects modification (from parameters)');
assert.sameValue(probeParams(), func, 'inner binding is immutable (from parameters)');
assert.sameValue(probeBody(), func, 'inner binding value (from body)');
assert["throws"](TypeError, setBody, 'inner binding rejects modification (from body)');
assert.sameValue(probeBody(), func, 'inner binding is immutable (from body)');
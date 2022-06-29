var _marked = /*#__PURE__*/regeneratorRuntime.mark(f);

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Referencing the arguments object from a default parameter (generator function declaration)
esid: sec-generator-function-definitions-runtime-semantics-instantiatefunctionobject
es6id: 14.4.12
features: [generators, default-parameters]
info: |
    GeneratorDeclaration : function * ( FormalParameters ) { GeneratorBody }

        [...]
        2. Let F be GeneratorFunctionCreate(Normal, FormalParameters,
           GeneratorBody, scope, strict).
        [...]

    9.2.1 [[Call]] ( thisArgument, argumentsList)

    [...]
    7. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
    [...]

    9.2.1.3 OrdinaryCallEvaluateBody ( F, argumentsList )

    1. Let status be FunctionDeclarationInstantiation(F, argumentsList).
    [...]

    9.2.12 FunctionDeclarationInstantiation(func, argumentsList)

    [...]
    23. Let iteratorRecord be Record {[[iterator]]:
        CreateListIterator(argumentsList), [[done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        b. Let formalStatus be IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]

    14.1.19 Runtime Semantics: IteratorBindingInitialization

    FormalsList : FormalsList , FormalParameter

    1. Let status be the result of performing IteratorBindingInitialization for
       FormalsList using iteratorRecord and environment as the arguments.
    2. ReturnIfAbrupt(status).
    3. Return the result of performing IteratorBindingInitialization for
       FormalParameter using iteratorRecord and environment as the arguments.
---*/
var callCount = 0;

function f() {
  var x,
      y,
      z,
      _args = arguments;
  return regeneratorRuntime.wrap(function f$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          x = _args.length > 0 && _args[0] !== undefined ? _args[0] : _args[2];
          y = _args.length > 1 && _args[1] !== undefined ? _args[1] : _args[3];
          z = _args.length > 2 ? _args[2] : undefined;
          assert.sameValue(x, 'third', 'first parameter');
          assert.sameValue(y, 'fourth', 'second parameter');
          assert.sameValue(z, 'third', 'third parameter');
          callCount = callCount + 1;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

f(undefined, undefined, 'third', 'fourth').next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Referencing the arguments object from a default parameter (function declaration)
esid: sec-function-definitions-runtime-semantics-instantiatefunctionobject
es6id: 14.1.19
features: [default-parameters]
info: |
    FunctionDeclaration :
        function BindingIdentifier ( FormalParameters ) { FunctionBody }

        [...]
        3. Let F be FunctionCreate(Normal, FormalParameters, FunctionBody,
           scope, strict).
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
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : arguments[2];
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : arguments[3];
  var z = arguments.length > 2 ? arguments[2] : undefined;
  assert.sameValue(x, 'third', 'first parameter');
  assert.sameValue(y, 'fourth', 'second parameter');
  assert.sameValue(z, 'third', 'third parameter');
  callCount = callCount + 1;
}

f(undefined, undefined, 'third', 'fourth');
assert.sameValue(callCount, 1, 'function invoked exactly once');
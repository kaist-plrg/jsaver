function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-rest-skip-non-enumerable.case
// - src/dstr-binding/default/gen-meth.template

/*---
description: Rest object doesn't contain non-enumerable properties (generator method)
esid: sec-generator-function-definitions-runtime-semantics-propertydefinitionevaluation
features: [object-rest, generators, destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    GeneratorMethod :
        * PropertyName ( StrictFormalParameters ) { GeneratorBody }

    1. Let propKey be the result of evaluating PropertyName.
    2. ReturnIfAbrupt(propKey).
    3. If the function code for this GeneratorMethod is strict mode code,
       let strict be true. Otherwise let strict be false.
    4. Let scope be the running execution context's LexicalEnvironment.
    5. Let closure be GeneratorFunctionCreate(Method,
       StrictFormalParameters, GeneratorBody, scope, strict).
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
---*/
var o = {
  a: 3,
  b: 4
};
Object.defineProperty(o, "x", {
  value: 4,
  enumerable: false
});
var callCount = 0;
var obj = {
  method: /*#__PURE__*/regeneratorRuntime.mark(function method(_ref) {
    var rest;
    return regeneratorRuntime.wrap(function method$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rest = _extends({}, _ref);
            assert.sameValue(rest.x, undefined);
            verifyProperty(rest, "a", {
              enumerable: true,
              writable: true,
              configurable: true,
              value: 3
            });
            verifyProperty(rest, "b", {
              enumerable: true,
              writable: true,
              configurable: true,
              value: 4
            });
            callCount = callCount + 1;

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, method);
  })
};
obj.method(o).next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');
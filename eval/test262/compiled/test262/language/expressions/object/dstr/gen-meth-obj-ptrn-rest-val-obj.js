var _excluded = ["a", "b"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-rest-val-obj.case
// - src/dstr-binding/default/gen-meth.template

/*---
description: Rest object contains just unextracted data (generator method)
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
var callCount = 0;
var obj = {
  method: /*#__PURE__*/regeneratorRuntime.mark(function method(_ref) {
    var a, b, rest;
    return regeneratorRuntime.wrap(function method$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            a = _ref.a, b = _ref.b, rest = _objectWithoutProperties(_ref, _excluded);
            assert.sameValue(rest.a, undefined);
            assert.sameValue(rest.b, undefined);
            verifyProperty(rest, "x", {
              enumerable: true,
              writable: true,
              configurable: true,
              value: 1
            });
            verifyProperty(rest, "y", {
              enumerable: true,
              writable: true,
              configurable: true,
              value: 2
            });
            callCount = callCount + 1;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, method);
  })
};
obj.method({
  x: 1,
  y: 2,
  a: 5,
  b: 3
}).next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');
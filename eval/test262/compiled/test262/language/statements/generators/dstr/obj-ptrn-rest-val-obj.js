var _excluded = ["a", "b"];

var _marked = /*#__PURE__*/regeneratorRuntime.mark(f);

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-rest-val-obj.case
// - src/dstr-binding/default/gen-func-decl.template

/*---
description: Rest object contains just unextracted data (generator function declaration)
esid: sec-generator-function-definitions-runtime-semantics-instantiatefunctionobject
features: [object-rest, generators, destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
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
---*/
var callCount = 0;

function f(_ref) {
  var a, b, rest;
  return regeneratorRuntime.wrap(function f$(_context) {
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
  }, _marked);
}

;
f({
  x: 1,
  y: 2,
  a: 5,
  b: 3
}).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');
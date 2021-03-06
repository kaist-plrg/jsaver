// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-id-init-skipped.case
// - src/dstr-binding/default/gen-meth.template

/*---
description: Destructuring initializer is not evaluated when value is not `undefined` (generator method)
esid: sec-generator-function-definitions-runtime-semantics-propertydefinitionevaluation
features: [generators, destructuring-binding]
flags: [generated]
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

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    BindingElement : BindingPattern Initializeropt

    [...]
    3. If Initializer is present and v is undefined, then
    [...]
---*/
var initCount = 0;

function counter() {
  initCount += 1;
}

var callCount = 0;
var obj = {
  method: /*#__PURE__*/regeneratorRuntime.mark(function method(_ref) {
    var _ref$s, t, _ref$u, v, _ref$w, x, _ref$y, z;

    return regeneratorRuntime.wrap(function method$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$s = _ref.s, t = _ref$s === void 0 ? counter() : _ref$s, _ref$u = _ref.u, v = _ref$u === void 0 ? counter() : _ref$u, _ref$w = _ref.w, x = _ref$w === void 0 ? counter() : _ref$w, _ref$y = _ref.y, z = _ref$y === void 0 ? counter() : _ref$y;
            assert.sameValue(t, null);
            assert.sameValue(v, 0);
            assert.sameValue(x, false);
            assert.sameValue(z, '');
            assert.sameValue(initCount, 0);
            assert["throws"](ReferenceError, function () {
              s;
            });
            assert["throws"](ReferenceError, function () {
              u;
            });
            assert["throws"](ReferenceError, function () {
              w;
            });
            assert["throws"](ReferenceError, function () {
              y;
            });
            callCount = callCount + 1;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, method);
  })
};
obj.method({
  s: null,
  u: 0,
  w: false,
  y: ''
}).next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');
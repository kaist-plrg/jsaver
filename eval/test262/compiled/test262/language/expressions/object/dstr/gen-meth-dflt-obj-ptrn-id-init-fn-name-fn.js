// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-init-fn-name-fn.case
// - src/dstr-binding/default/gen-method-dflt.template

/*---
description: SingleNameBinding assigns name to "anonymous" functions (generator method (default parameter))
esid: sec-generator-function-definitions-runtime-semantics-propertydefinitionevaluation
features: [generators, destructuring-binding, default-parameters]
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

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    6. If Initializer is present and v is undefined, then
       [...]
       d. If IsAnonymousFunctionDefinition(Initializer) is true, then
          i. Let hasNameProperty be HasOwnProperty(v, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(v,
               bindingId).
---*/
var callCount = 0;
var obj = {
  method: /*#__PURE__*/regeneratorRuntime.mark(function method() {
    var _ref,
        _ref$fn,
        fn,
        _ref$xFn,
        xFn,
        _args = arguments;

    return regeneratorRuntime.wrap(function method$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref$fn = _ref.fn, fn = _ref$fn === void 0 ? function () {} : _ref$fn, _ref$xFn = _ref.xFn, xFn = _ref$xFn === void 0 ? function x() {} : _ref$xFn;
            assert.sameValue(fn.name, 'fn');
            assert.notSameValue(xFn.name, 'xFn');
            callCount = callCount + 1;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, method);
  })
};
obj.method().next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');
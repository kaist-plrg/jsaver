var _marked = /*#__PURE__*/regeneratorRuntime.mark(f);

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-init-skipped.case
// - src/dstr-binding/default/gen-func-decl-dflt.template

/*---
description: Destructuring initializer is not evaluated when value is not `undefined` (generator function declaration (default parameter))
esid: sec-generator-function-definitions-runtime-semantics-instantiatefunctionobject
features: [generators, destructuring-binding, default-parameters]
flags: [generated]
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

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    6. If Initializer is present and v is undefined, then
       [...]
    [...]
---*/
var initCount = 0;

function counter() {
  initCount += 1;
}

var callCount = 0;

function f() {
  var _ref,
      _ref$w,
      w,
      _ref$x,
      x,
      _ref$y,
      y,
      _ref$z,
      z,
      _args = arguments;

  return regeneratorRuntime.wrap(function f$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {
            w: null,
            x: 0,
            y: false,
            z: ''
          }, _ref$w = _ref.w, w = _ref$w === void 0 ? counter() : _ref$w, _ref$x = _ref.x, x = _ref$x === void 0 ? counter() : _ref$x, _ref$y = _ref.y, y = _ref$y === void 0 ? counter() : _ref$y, _ref$z = _ref.z, z = _ref$z === void 0 ? counter() : _ref$z;
          assert.sameValue(w, null);
          assert.sameValue(x, 0);
          assert.sameValue(y, false);
          assert.sameValue(z, '');
          assert.sameValue(initCount, 0);
          callCount = callCount + 1;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

;
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');
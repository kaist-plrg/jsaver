function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-id-init-skipped.case
// - src/dstr-binding/default/cls-expr-meth-static-dflt.template

/*---
description: Destructuring initializer is not evaluated when value is not `undefined` (static class expression method (default parameter))
esid: sec-class-definitions-runtime-semantics-evaluation
features: [destructuring-binding, default-parameters]
flags: [generated]
info: |
    ClassExpression : class BindingIdentifieropt ClassTail

    1. If BindingIdentifieropt is not present, let className be undefined.
    2. Else, let className be StringValue of BindingIdentifier.
    3. Let value be the result of ClassDefinitionEvaluation of ClassTail
       with argument className.
    [...]

    14.5.14 Runtime Semantics: ClassDefinitionEvaluation

    21. For each ClassElement m in order from methods
        a. If IsStatic of m is false, then
        b. Else,
           Let status be the result of performing PropertyDefinitionEvaluation for
           m with arguments F and false.
    [...]

    14.3.8 Runtime Semantics: DefineMethod

    MethodDefinition : PropertyName ( StrictFormalParameters ) { FunctionBody }

    [...]
    6. Let closure be FunctionCreate(kind, StrictFormalParameters, FunctionBody,
       scope, strict). If functionPrototype was passed as a parameter then pass its
       value as the functionPrototype optional argument of FunctionCreate.
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

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, null, [{
    key: "method",
    value: function method() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        s: null,
        u: 0,
        w: false,
        y: ''
      },
          _ref$s = _ref.s,
          t = _ref$s === void 0 ? counter() : _ref$s,
          _ref$u = _ref.u,
          v = _ref$u === void 0 ? counter() : _ref$u,
          _ref$w = _ref.w,
          x = _ref$w === void 0 ? counter() : _ref$w,
          _ref$y = _ref.y,
          z = _ref$y === void 0 ? counter() : _ref$y;

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
    }
  }]);

  return C;
}();

C.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');
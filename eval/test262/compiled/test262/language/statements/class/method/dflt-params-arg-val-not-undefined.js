function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-params-arg-val-not-undefined.case
// - src/function-forms/default/cls-decl-meth.template

/*---
description: Use of initializer when argument value is not `undefined` (class expression method)
esid: sec-runtime-semantics-bindingclassdeclarationevaluation
features: [default-parameters]
flags: [generated]
info: |
    ClassDeclaration : class BindingIdentifier ClassTail

    1. Let className be StringValue of BindingIdentifier.
    2. Let value be the result of ClassDefinitionEvaluation of ClassTail with
       argument className.
    [...]

    14.5.14 Runtime Semantics: ClassDefinitionEvaluation

    21. For each ClassElement m in order from methods
        a. If IsStatic of m is false, then
           i. Let status be the result of performing
              PropertyDefinitionEvaluation for m with arguments proto and
              false.
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

    14.1.19 Runtime Semantics: IteratorBindingInitialization

    FormalsList : FormalsList , FormalParameter

    [...]
    23. Let iteratorRecord be Record {[[Iterator]]:
        CreateListIterator(argumentsList), [[Done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        a. Perform ? IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]

---*/
var obj = {};
var falseCount = 0;
var stringCount = 0;
var nanCount = 0;
var zeroCount = 0;
var nullCount = 0;
var objCount = 0;
var callCount = 0;

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: "method",
    value: function method() {
      var aFalse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : falseCount += 1;
      var aString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : stringCount += 1;
      var aNaN = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nanCount += 1;
      var a0 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : zeroCount += 1;
      var aNull = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : nullCount += 1;
      var aObj = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : objCount += 1;
      assert.sameValue(aFalse, false);
      assert.sameValue(aString, '');
      assert.sameValue(aNaN, NaN);
      assert.sameValue(a0, 0);
      assert.sameValue(aNull, null);
      assert.sameValue(aObj, obj);
      callCount = callCount + 1;
    }
  }]);

  return C;
}();

C.prototype.method(false, '', NaN, 0, null, obj); // Stores a reference `ref` for case evaluation

var ref = C.prototype.method;
assert.sameValue(callCount, 1, 'method invoked exactly once');
assert.sameValue(falseCount, 0, 'initializer not evaluated: false');
assert.sameValue(stringCount, 0, 'initializer not evaluated: string');
assert.sameValue(nanCount, 0, 'initializer not evaluated: NaN');
assert.sameValue(zeroCount, 0, 'initializer not evaluated: 0');
assert.sameValue(nullCount, 0, 'initializer not evaluated: null');
assert.sameValue(objCount, 0, 'initializer not evaluated: object');
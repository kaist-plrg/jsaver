var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-id-init-skipped.case
// - src/dstr-binding/default/arrow-function.template

/*---
description: Destructuring initializer is not evaluated when value is not `undefined` (arrow function expression)
esid: sec-arrow-function-definitions-runtime-semantics-evaluation
features: [destructuring-binding]
flags: [generated]
info: |
    ArrowFunction : ArrowParameters => ConciseBody

    [...]
    4. Let closure be FunctionCreate(Arrow, parameters, ConciseBody, scope, strict).
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
var f;

f = function f(_ref) {
  _newArrowCheck(this, _this);

  var _ref$s = _ref.s,
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
}.bind(this);

f({
  s: null,
  u: 0,
  w: false,
  y: ''
});
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');
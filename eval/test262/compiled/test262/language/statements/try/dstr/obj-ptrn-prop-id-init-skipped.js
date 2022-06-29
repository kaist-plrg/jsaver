// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-id-init-skipped.case
// - src/dstr-binding/default/try.template

/*---
description: Destructuring initializer is not evaluated when value is not `undefined` (try statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding]
flags: [generated]
info: |
    Catch : catch ( CatchParameter ) Block

    [...]
    5. Let status be the result of performing BindingInitialization for
       CatchParameter passing thrownValue and catchEnv as arguments.
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

var ranCatch = false;

try {
  throw {
    s: null,
    u: 0,
    w: false,
    y: ''
  };
} catch (_ref) {
  var _ref$s = _ref.s;
  var t = _ref$s === void 0 ? counter() : _ref$s;
  var _ref$u = _ref.u;
  var v = _ref$u === void 0 ? counter() : _ref$u;
  var _ref$w = _ref.w;
  var x = _ref$w === void 0 ? counter() : _ref$w;
  var _ref$y = _ref.y;
  var z = _ref$y === void 0 ? counter() : _ref$y;
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
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');
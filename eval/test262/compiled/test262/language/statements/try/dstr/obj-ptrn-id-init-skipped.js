// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-init-skipped.case
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

var ranCatch = false;

try {
  throw {
    w: null,
    x: 0,
    y: false,
    z: ''
  };
} catch (_ref) {
  var _ref$w = _ref.w;
  var w = _ref$w === void 0 ? counter() : _ref$w;
  var _ref$x = _ref.x;
  var x = _ref$x === void 0 ? counter() : _ref$x;
  var _ref$y = _ref.y;
  var y = _ref$y === void 0 ? counter() : _ref$y;
  var _ref$z = _ref.z;
  var z = _ref$z === void 0 ? counter() : _ref$z;
  assert.sameValue(w, null);
  assert.sameValue(x, 0);
  assert.sameValue(y, false);
  assert.sameValue(z, '');
  assert.sameValue(initCount, 0);
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');
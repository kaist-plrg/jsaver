// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-obj.case
// - src/dstr-binding/default/try.template

/*---
description: Object binding pattern with "nested" object binding pattern not using initializer (try statement)
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

    [...]
    3. If Initializer is present and v is undefined, then
       [...]
    4. Return the result of performing BindingInitialization for BindingPattern
       passing v and environment as arguments.
---*/
var ranCatch = false;

try {
  throw {
    w: {
      x: undefined,
      z: 7
    }
  };
} catch (_ref) {
  var _ref$w = _ref.w;

  var _ref$w2 = _ref$w === void 0 ? {
    x: 4,
    y: 5,
    z: 6
  } : _ref$w;

  var x = _ref$w2.x;
  var y = _ref$w2.y;
  var z = _ref$w2.z;
  assert.sameValue(x, undefined);
  assert.sameValue(y, undefined);
  assert.sameValue(z, 7);
  assert["throws"](ReferenceError, function () {
    w;
  });
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');
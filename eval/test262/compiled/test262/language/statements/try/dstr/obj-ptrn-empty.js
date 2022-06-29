function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-empty.case
// - src/dstr-binding/default/try.template

/*---
description: No property access occurs for an "empty" object binding pattern (try statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding]
flags: [generated]
info: |
    Catch : catch ( CatchParameter ) Block

    [...]
    5. Let status be the result of performing BindingInitialization for
       CatchParameter passing thrownValue and catchEnv as arguments.
    [...]

    Runtime Semantics: BindingInitialization

    ObjectBindingPattern : { }

    1. Return NormalCompletion(empty).
---*/
var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function get() {
    accessCount += 1;
  }
});
var ranCatch = false;

try {
  throw obj;
} catch (_ref) {
  _objectDestructuringEmpty(_ref);

  assert.sameValue(accessCount, 0);
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');
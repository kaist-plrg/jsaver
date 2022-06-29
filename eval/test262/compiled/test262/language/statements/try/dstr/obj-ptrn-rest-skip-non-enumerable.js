function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-rest-skip-non-enumerable.case
// - src/dstr-binding/default/try.template

/*---
description: Rest object doesn't contain non-enumerable properties (try statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [object-rest, destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    Catch : catch ( CatchParameter ) Block

    [...]
    5. Let status be the result of performing BindingInitialization for
       CatchParameter passing thrownValue and catchEnv as arguments.
    [...]
---*/
var o = {
  a: 3,
  b: 4
};
Object.defineProperty(o, "x", {
  value: 4,
  enumerable: false
});
var ranCatch = false;

try {
  throw o;
} catch (_ref) {
  var rest = _extends({}, _ref);

  assert.sameValue(rest.x, undefined);
  verifyProperty(rest, "a", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 3
  });
  verifyProperty(rest, "b", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 4
  });
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');
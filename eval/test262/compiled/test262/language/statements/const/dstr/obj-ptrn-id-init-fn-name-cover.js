// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-init-fn-name-cover.case
// - src/dstr-binding/default/const-stmt.template

/*---
description: SingleNameBinding assigns `name` to "anonymous" functions "through" cover grammar (`const` statement)
esid: sec-let-and-const-declarations-runtime-semantics-evaluation
features: [destructuring-binding]
flags: [generated]
info: |
    LexicalBinding : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let value be GetValue(rhs).
    3. ReturnIfAbrupt(value).
    4. Let env be the running execution context's LexicalEnvironment.
    5. Return the result of performing BindingInitialization for BindingPattern
       using value and env as the arguments.

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
var _ref = {},
    _ref$cover = _ref.cover,
    cover = _ref$cover === void 0 ? function () {} : _ref$cover,
    _ref$xCover = _ref.xCover,
    xCover = _ref$xCover === void 0 ? (0, function () {}) : _ref$xCover;
assert.sameValue(cover.name, 'cover');
assert.notSameValue(xCover.name, 'xCover');
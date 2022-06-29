function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-evaldeclarationinstantiation
description: >
    Modification of previously-existing non-configurable global property
info: |
    [...]
    15. For each production f in functionsToInitialize, do
        a. Let fn be the sole element of the BoundNames of f.
        b. Let fo be the result of performing InstantiateFunctionObject for f
           with argument lexEnv.
        c. If varEnvRec is a global Environment Record, then
           i. Perform ? varEnvRec.CreateGlobalFunctionBinding(fn, fo, true).
    [...]

    8.1.1.4.18 CreateGlobalFunctionBinding

    [...]
    5. If existingProp is undefined or existingProp.[[Configurable]] is true,
       then
       [...]
    6. Else,
       b. Let desc be the PropertyDescriptor{[[Value]]: V }.
    7. Perform ? DefinePropertyOrThrow(globalObject, N, desc).
    [...]
includes: [propertyHelper.js]
---*/
var initial;
Object.defineProperty(this, 'f', {
  enumerable: true,
  writable: true,
  configurable: false
});
(0, eval)('initial = f; function f() { return 2222; }');
verifyEnumerable(this, 'f');
verifyWritable(this, 'f');
verifyNotConfigurable(this, 'f');
assert.sameValue(_typeof(initial), 'function');
assert.sameValue(initial(), 2222);
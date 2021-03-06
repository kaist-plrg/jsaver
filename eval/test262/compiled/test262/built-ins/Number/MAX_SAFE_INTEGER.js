// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Property descriptor for `Number.MAX_SAFE_INTEGER`
esid: sec-number.max_safe_integer
info: |
    The value of Number.MAX_SAFE_INTEGER is 9007199254740991

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/
var desc = Object.getOwnPropertyDescriptor(Number, 'MAX_SAFE_INTEGER');
assert.sameValue(desc.set, undefined, 'Does not define a `get` accessor');
assert.sameValue(desc.get, undefined, 'Does not define a `set` accessor');
assert.sameValue(desc.value, 9007199254740991);
verifyNotEnumerable(Number, 'MAX_SAFE_INTEGER');
verifyNotWritable(Number, 'MAX_SAFE_INTEGER');
verifyNotConfigurable(Number, 'MAX_SAFE_INTEGER');
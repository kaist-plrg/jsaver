// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
description: Species constructor returns an abrupt completion
info: |
    [...]
    5. Let A be ? ArraySpeciesCreate(O, len).
    [...]

    9.4.2.3 ArraySpeciesCreate

    [...]
    5. Let C be ? Get(originalArray, "constructor").
    [...]
    7. If Type(C) is Object, then
       a. Let C be ? Get(C, @@species).
       b. If C is null, let C be undefined.
    [...]
    10. Return ? Construct(C, « length »).
features: [Symbol.species]
---*/
var Ctor = function Ctor() {
  throw new Test262Error();
};

var callCount = 0;

var cb = function cb() {
  callCount += 1;
};

var a = [];
a.constructor = {};
a.constructor[Symbol.species] = Ctor;
assert["throws"](Test262Error, function () {
  a.map(cb);
});
assert.sameValue(callCount, 0);
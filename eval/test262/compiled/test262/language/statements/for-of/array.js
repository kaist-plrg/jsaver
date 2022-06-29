// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      Array instances should be able to be traversed using a `for...of` loop.
  es6id: 13.6.4
---*/
var array = [
  /* hole */
0, 'a', true, false, null,, undefined, NaN];
var i = 0;

for (var _i = 0, _array = array; _i < _array.length; _i++) {
  var value = _array[_i];
  assert.sameValue(value, array[i], 'element at index ' + i);
  i++;
}

assert.sameValue(i, 8, 'Visits all elements');
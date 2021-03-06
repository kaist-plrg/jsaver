// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.entries
description: >
  New items in the array are accessible via iteration until iterator is "done".
info: |
  The method should return a valid iterator with the context as the
  IteratedObject. When an item is added to the array after the iterator is
  created but before the iterator is "done" (as defined by 22.1.5.2.1) the
  new item should be accessible via iteration.
---*/
var array = [];
var iterator = array.entries();
var result;
array.push('a');
result = iterator.next();
assert.sameValue(result.done, false, 'First result `done` flag');
assert.sameValue(result.value[0], 0, 'First result `value` (array key)');
assert.sameValue(result.value[1], 'a', 'First result `value (array value)');
assert.sameValue(result.value.length, 2, 'First result `value` (length)');
result = iterator.next();
assert.sameValue(result.done, true, 'Exhausted result `done` flag');
assert.sameValue(result.value, undefined, 'Exhausted result `value`');
array.push('b');
result = iterator.next();
assert.sameValue(result.done, true, 'Exhausted result `done` flag (after push)');
assert.sameValue(result.value, undefined, 'Exhausted result `value` (after push)');
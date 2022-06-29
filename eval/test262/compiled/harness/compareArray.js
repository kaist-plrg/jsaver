// Copyright (C) 2017 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
    Compare the contents of two arrays
defines: [compareArray]
---*/
function compareArray(a, b) {
  if (b.length !== a.length) {
    return false;
  }

  for (var i = 0; i < a.length; i++) {
    if (!compareArray.isSameValue(b[i], a[i])) {
      return false;
    }
  }

  return true;
}

compareArray.isSameValue = function (a, b) {
  if (a === 0 && b === 0) return 1 / a === 1 / b;
  if (a !== a && b !== b) return true;
  return a === b;
};

compareArray.format = function (array) {
  return "[".concat(array.map(String).join(', '), "]");
};

assert.compareArray = function (actual, expected) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  assert(actual != null, "First argument shouldn't be nullish. ".concat(message));
  assert(expected != null, "Second argument shouldn't be nullish. ".concat(message));
  var format = compareArray.format;
  assert(compareArray(actual, expected), "Expected ".concat(format(actual), " and ").concat(format(expected), " to have the same contents. ").concat(message));
};
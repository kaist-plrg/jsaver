function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2017 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
    Check that an array contains a numeric sequence starting at 1
    and incrementing by 1 for each entry in the array. Used by
    Promise tests to assert the order of execution in deep Promise
    resolution pipelines.
defines: [checkSequence, checkSettledPromises]
---*/
function checkSequence(arr, message) {
  arr.forEach(function (e, i) {
    if (e !== i + 1) {
      $ERROR((message ? message : "Steps in unexpected sequence:") + " '" + arr.join(',') + "'");
    }
  });
  return true;
}

function checkSettledPromises(settleds, expected, message) {
  var _this = this;

  var prefix = message ? "".concat(message, ": ") : '';
  assert.sameValue(Array.isArray(settleds), true, "".concat(prefix, "Settled values is an array"));
  assert.sameValue(settleds.length, expected.length, "".concat(prefix, "The settled values has a different length than expected"));
  settleds.forEach(function (settled, i) {
    _newArrowCheck(this, _this);

    assert.sameValue(Object.prototype.hasOwnProperty.call(settled, 'status'), true, "".concat(prefix, "The settled value has a property status"));
    assert.sameValue(settled.status, expected[i].status, "".concat(prefix, "status for item ").concat(i));

    if (settled.status === 'fulfilled') {
      assert.sameValue(Object.prototype.hasOwnProperty.call(settled, 'value'), true, "".concat(prefix, "The fulfilled promise has a property named value"));
      assert.sameValue(Object.prototype.hasOwnProperty.call(settled, 'reason'), false, "".concat(prefix, "The fulfilled promise has no property named reason"));
      assert.sameValue(settled.value, expected[i].value, "".concat(prefix, "value for item ").concat(i));
    } else {
      assert.sameValue(settled.status, 'rejected', "".concat(prefix, "Valid statuses are only fulfilled or rejected"));
      assert.sameValue(Object.prototype.hasOwnProperty.call(settled, 'value'), false, "".concat(prefix, "The fulfilled promise has no property named value"));
      assert.sameValue(Object.prototype.hasOwnProperty.call(settled, 'reason'), true, "".concat(prefix, "The fulfilled promise has a property named reason"));
      assert.sameValue(settled.reason, expected[i].reason, "".concat(prefix, "Reason value for item ").concat(i));
    }
  }.bind(this));
}
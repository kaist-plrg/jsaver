var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "ConciseBody :[lookahead { { }] AssignmentExpression"
es6id: 14.2
---*/
(function (x) {
  var _this2 = this;

  _newArrowCheck(this, _this);

  return function (x) {
    _newArrowCheck(this, _this2);

    return x;
  }.bind(this);
}).bind(this);
var _this = this;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.2.1
description: >
    ArrowParameters[Yield] :
      ...
      CoverParenthesizedExpressionAndArrowParameterList[?Yield]

    12.14.5
---*/
var af = function af(_ref) {
  _newArrowCheck(this, _this);

  var _ref$x = _ref.x,
      x = _ref$x === void 0 ? 1 : _ref$x;
  return x;
}.bind(this);

assert.sameValue(_typeof(af), "function");
assert.sameValue(af({}), 1);
assert.sameValue(af({
  x: 2
}), 2);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.2
description: >
    ArrowFunction[In, Yield] :
      ArrowParameters[?Yield] [no LineTerminator here] => ConciseBody[?In]

    LineTerminator between arrow and ConciseBody[?In]
    ArrowParameters : CoverParenthesizedExpressionAndArrowParameterList[?Yield]
    ConciseBody[In] : { FunctionBody }

    Includes ...rest
---*/
var af = function af(x) {
  return [x, arguments.length <= 1 ? 0 : arguments.length - 1];
};

assert.sameValue(_typeof(af), "function");
assert.sameValue(af(1, 1, 1)[0], 1);
assert.sameValue(af(1, 1, 1)[1], 2);
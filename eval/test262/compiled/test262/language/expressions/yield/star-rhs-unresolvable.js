function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
es6id: 14.4.14
description: GetValue invoked on Reference value
info: |
  YieldExpression : yield * AssignmentExpression

  1. Let exprRef be the result of evaluating AssignmentExpression.
  2. Let value be ? GetValue(exprRef).
features: [generators]
---*/
var err;

function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          return _context.delegateYield(test262unresolvable, "t0", 2);

        case 2:
          _context.next = 7;
          break;

        case 4:
          _context.prev = 4;
          _context.t1 = _context["catch"](0);
          err = _context.t1;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 4]]);
}

var iter = g();
var result;
result = iter.next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
assert.sameValue(_typeof(err), 'object');
assert.sameValue(err.constructor, ReferenceError);
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-rest-yield-expr.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: When a `yield` token appears within the DestructuringAssignmentTarget of an AssignmentRestElement and within the body of a generator function, it should behave as a YieldExpression. (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [generators, destructuring-binding]
flags: [generated]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var x = {};
var iterationResult, iter;
iter = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var _vals, _vals2;

  var result, vals;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          vals = [33, 44, 55];
          _vals = vals;
          _vals2 = _toArray(_vals);
          _context.next = 5;
          return;

        case 5:
          _context.t0 = _context.sent;
          x[_context.t0] = _vals2.slice(0);
          result = _vals;
          assert.sameValue(result, vals);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})();
iterationResult = iter.next();
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, false);
assert.sameValue(x.prop, undefined);
iterationResult = iter.next('prop');
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, true);
assert.sameValue(x.prop.length, 3);
assert.sameValue(x.prop[0], 33);
assert.sameValue(x.prop[1], 44);
assert.sameValue(x.prop[2], 55);
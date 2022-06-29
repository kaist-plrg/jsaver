function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-rest-nested-obj-yield-expr.case
// - src/dstr-assignment/default/for-of.template

/*---
description: When a `yield` token appears within the Initializer of a nested destructuring assignment and within a generator function body, it should behave as a YieldExpression. (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [generators, destructuring-binding]
flags: [generated]
info: |
    IterationStatement :
      for ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    4. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]
---*/
var iterationResult, iter, x;
iter = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var counter, _i, _arr, _arr$_i, _arr$_i$slice$x;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          counter = 0;
          _i = 0, _arr = [[{}]];

        case 2:
          if (!(_i < _arr.length)) {
            _context.next = 17;
            break;
          }

          _arr$_i = _toArray(_arr[_i]);
          _arr$_i$slice$x = _arr$_i.slice(0).x;

          if (!(_arr$_i$slice$x === void 0)) {
            _context.next = 11;
            break;
          }

          _context.next = 8;
          return;

        case 8:
          _context.t0 = _context.sent;
          _context.next = 12;
          break;

        case 11:
          _context.t0 = _arr$_i$slice$x;

        case 12:
          x = _context.t0;
          counter += 1;

        case 14:
          _i++;
          _context.next = 2;
          break;

        case 17:
          assert.sameValue(counter, 1);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})();
iterationResult = iter.next();
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, false);
assert.sameValue(x, undefined);
iterationResult = iter.next(4);
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, true);
assert.sameValue(x, 4);
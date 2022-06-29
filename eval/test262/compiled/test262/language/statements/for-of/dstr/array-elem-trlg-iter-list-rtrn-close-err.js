var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-elem-trlg-iter-list-rtrn-close-err.case
// - src/dstr-assignment/default/for-of.template

/*---
description: IteratorClose is invoked when evaluation of AssignmentElementList returns a "return" completion and the iterator has not been marked as "done" (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [Symbol.iterator, generators, destructuring-binding]
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

    ArrayAssignmentPattern :
        [ AssignmentElementList , Elisionopt AssignmentRestElementopt ]

    [...]
    3. Let iteratorRecord be Record {[[iterator]]: iterator, [[done]]: false}.
    4. Let status be the result of performing
       IteratorDestructuringAssignmentEvaluation of AssignmentElementList using
       iteratorRecord as the argument.
    5. If status is an abrupt completion, then
       a. If iteratorRecord.[[done]] is false, return IteratorClose(iterator,
          status).

    7.4.6 IteratorClose( iterator, completion )

    [...]
    6. Let innerResult be Call(return, iterator, « »).
    7. If completion.[[type]] is throw, return Completion(completion).
    8. If innerResult.[[type]] is throw, return Completion(innerResult).

---*/
var nextCount = 0;
var returnCount = 0;
var unreachable = 0;
var iterator = {
  next: function next() {
    nextCount += 1;
    return {
      done: false,
      value: undefined
    };
  },
  "return": function _return() {
    returnCount += 1;
    throw new Test262Error();
  }
};
var iterable = {};

iterable[Symbol.iterator] = function () {
  return iterator;
};

function g() {
  var counter, _i, _arr, _arr$_i, _arr$_i$;

  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          counter = 0;
          _i = 0, _arr = [iterable];

        case 2:
          if (!(_i < _arr.length)) {
            _context.next = 19;
            break;
          }

          _arr$_i = _slicedToArray(_arr[_i], 1);
          _arr$_i$ = _arr$_i[0];

          if (!(_arr$_i$ === void 0)) {
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
          _context.t0 = _arr$_i$;

        case 12:
          _arr$_i$ = _context.t0;

          _objectDestructuringEmpty(_arr$_i$);

          unreachable += 1;
          counter += 1;

        case 16:
          _i++;
          _context.next = 2;
          break;

        case 19:
          assert.sameValue(counter, 1);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var iter = g();
iter.next();
assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 0);
assert["throws"](Test262Error, function () {
  iter["return"]();
});
assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 1);
assert.sameValue(unreachable, 0, 'Unreachable statement was not executed');
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
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: IteratorClose is invoked when evaluation of AssignmentElementList returns a "return" completion and the iterator has not been marked as "done" (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [Symbol.iterator, generators, destructuring-binding]
flags: [generated]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.

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
  var _vals, _vals2, _vals2$;

  var result, vals;
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          vals = iterable;
          _vals = vals;
          _vals2 = _slicedToArray(_vals, 1);
          _vals2$ = _vals2[0];

          if (!(_vals2$ === void 0)) {
            _context.next = 10;
            break;
          }

          _context.next = 7;
          return;

        case 7:
          _context.t0 = _context.sent;
          _context.next = 11;
          break;

        case 10:
          _context.t0 = _vals2$;

        case 11:
          _vals2$ = _context.t0;

          _objectDestructuringEmpty(_vals2$);

          result = _vals;
          unreachable += 1;
          assert.sameValue(result, vals);

        case 16:
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
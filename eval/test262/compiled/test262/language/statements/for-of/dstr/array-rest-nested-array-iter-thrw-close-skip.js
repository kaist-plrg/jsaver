function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-rest-nested-array-iter-thrw-close-skip.case
// - src/dstr-assignment/error/for-of.template

/*---
description: IteratorClose is not called when nested array pattern evaluation produces an abrupt completion (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [Symbol.iterator, destructuring-binding]
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

    ArrayAssignmentPattern : [ Elisionopt AssignmentRestElement ]

    [...]
    5. Let result be the result of performing
       IteratorDestructuringAssignmentEvaluation of AssignmentRestElement with
       iteratorRecord as the argument
    6. If iteratorRecord.[[done]] is false, return IteratorClose(iterator,
       result).

    AssignmentRestElement[Yield] : ... DestructuringAssignmentTarget

    [...]
    4. Repeat while iteratorRecord.[[done]] is false
       [...]
       d. If next is false, set iteratorRecord.[[done]] to true.
       [...]
    7. Return the result of performing DestructuringAssignmentEvaluation of
       nestedAssignmentPattern with A as the argument.

---*/
var nextCount = 0;
var returnCount = 0;
var iterable = {};
var iterator = {
  next: function next() {
    nextCount += 1;
    return {
      done: true
    };
  },
  "return": function _return() {
    returnCount += 1;
  }
};

var thrower = function thrower() {
  throw new Test262Error();
};

iterable[Symbol.iterator] = function () {
  return iterator;
};

var counter = 0;
assert["throws"](Test262Error, function () {
  for (var _i = 0, _arr = [iterable]; _i < _arr.length; _i++) {
    var _arr$_i = _toArray(_arr[_i]);

    var _arr$_i$slice = _toArray(_arr$_i.slice(0));

    ({})[thrower()] = _arr$_i$slice.slice(0);
    counter += 1;
  }

  counter += 1;
});
assert.sameValue(counter, 0);
assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 0);
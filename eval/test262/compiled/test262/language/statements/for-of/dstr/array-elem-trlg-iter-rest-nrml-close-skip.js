function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-elem-trlg-iter-rest-nrml-close-skip.case
// - src/dstr-assignment/default/for-of.template

/*---
description: IteratorClose is not called when rest element evaluation has exhausted the iterator (For..of statement)
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

    ArrayAssignmentPattern :
        [ AssignmentElementList , Elisionopt AssignmentRestElementopt ]

    [...]
    7. If AssignmentRestElement is present, then
       a. Let status be the result of performing
          IteratorDestructuringAssignmentEvaluation of AssignmentRestElement
          with iteratorRecord as the argument.
    8. If iteratorRecord.[[done]] is false, return IteratorClose(iterator,
       status).
    9. Return Completion(status).

---*/
var nextCount = 0;
var returnCount = 0;
var iterable = {};
var x, y;
var iterator = {
  next: function next() {
    nextCount += 1;
    return {
      value: nextCount,
      done: nextCount > 1
    };
  },
  "return": function _return() {
    returnCount += 1;
  }
};

iterable[Symbol.iterator] = function () {
  return iterator;
};

var counter = 0;

for (var _i = 0, _arr = [iterable]; _i < _arr.length; _i++) {
  var _arr$_i = _toArray(_arr[_i]);

  x = _arr$_i[0];
  y = _arr$_i.slice(1);
  counter += 1;
}

assert.sameValue(counter, 1);
assert.sameValue(nextCount, 2, 'nextCount');
assert.sameValue(returnCount, 0, 'returnCount');
assert.sameValue(x, 1, 'x');
assert.sameValue(y.length, 0, 'y.length');
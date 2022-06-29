function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-elem-trlg-iter-rest-thrw-close-err.case
// - src/dstr-assignment/error/assignment-expr.template

/*---
description: IteratorClose is called when AssignmentRestEvaluation produces a "throw" completion due to reference evaluation (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [Symbol.iterator, destructuring-binding]
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
    7. If AssignmentRestElement is present, then
       a. Let status be the result of performing
          IteratorDestructuringAssignmentEvaluation of AssignmentRestElement
          with iteratorRecord as the argument.
    8. If iteratorRecord.[[done]] is false, return IteratorClose(iterator,
       status).
    9. Return Completion(status).

    7.4.6 IteratorClose( iterator, completion )

    [...]
    7. If completion.[[type]] is throw, return Completion(completion)

---*/
var nextCount = 0;
var returnCount = 0;
var x;

function ReturnError() {}

var iterable = {};
var iterator = {
  next: function next() {
    nextCount += 1; // Set an upper-bound to limit unnecessary iteration in non-conformant
    // implementations

    return {
      done: nextCount > 10
    };
  },
  "return": function _return() {
    returnCount += 1; // This value should be discarded.

    throw new ReturnError();
  }
};

var thrower = function thrower() {
  throw new Test262Error();
};

iterable[Symbol.iterator] = function () {
  return iterator;
};

assert["throws"](Test262Error, function () {
  var _iterable, _iterable2;

  0, (_iterable = iterable, _iterable2 = _toArray(_iterable), x = _iterable2[0], {}[thrower()] = _iterable2.slice(1), _iterable);
});
assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 1);
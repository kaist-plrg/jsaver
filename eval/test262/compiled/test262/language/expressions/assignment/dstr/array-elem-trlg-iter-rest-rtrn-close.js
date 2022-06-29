var _marked = /*#__PURE__*/regeneratorRuntime.mark(g);

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-elem-trlg-iter-rest-rtrn-close.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: IteratorClose is called when AssignmentRestEvaluation produces a "return" completion due to reference evaluation (AssignmentExpression)
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
    7. If AssignmentRestElement is present, then
       a. Let status be the result of performing
          IteratorDestructuringAssignmentEvaluation of AssignmentRestElement
          with iteratorRecord as the argument.
    8. If iteratorRecord.[[done]] is false, return IteratorClose(iterator,
       status).
    9. Return Completion(status).

    7.4.6 IteratorClose( iterator, completion )

    [...]
    6. Let innerResult be Call(return, iterator, « »).
    7. If completion.[[type]] is throw, return Completion(completion).
    8. If innerResult.[[type]] is throw, return Completion(innerResult).

---*/
var nextCount = 0;
var returnCount = 0;
var unreachable = 0;
var thisValue = null;
var args = null;
var iterable = {};
var x;
var iterator = {
  next: function next() {
    nextCount += 1; // Set an upper-bound to limit unnecessary iteration in non-conformant
    // implementations

    return {
      done: nextCount > 10
    };
  },
  "return": function _return() {
    returnCount += 1;
    thisValue = this;
    args = arguments;
    return {};
  }
};
var iter, result;

iterable[Symbol.iterator] = function () {
  return iterator;
};

function g() {
  var _vals, _vals2;

  var result, vals;
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          vals = iterable;
          _vals = vals;
          _vals2 = _toArray(_vals);
          x = _vals2[0];
          _context.next = 6;
          return;

        case 6:
          _context.t0 = _context.sent;
          ({})[_context.t0] = _vals2.slice(1);
          result = _vals;
          unreachable += 1;
          assert.sameValue(result, vals);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

iter = g();
iter.next();
result = iter["return"](999);
assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 1);
assert.sameValue(unreachable, 0, 'Unreachable statement was not executed');
assert.sameValue(result.value, 999);
assert(result.done, 'Iterator correctly closed');
assert.sameValue(thisValue, iterator, 'correct `this` value');
assert(!!args, 'arguments object provided');
assert.sameValue(args.length, 0, 'zero arguments specified');
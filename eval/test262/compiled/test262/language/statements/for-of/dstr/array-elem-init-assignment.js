function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-elem-init-assignment.case
// - src/dstr-assignment/default/for-of.template

/*---
description: If the Initializer is present and v is undefined, the Initializer should be evaluated and the result assigned to the target reference. (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding]
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
var v2, vNull, vHole, vUndefined, vOob;
var counter = 0;

for (var _i = 0, _arr = [[2, null,, undefined]]; _i < _arr.length; _i++) {
  var _arr$_i = _slicedToArray(_arr[_i], 5);

  var _arr$_i$ = _arr$_i[0];
  v2 = _arr$_i$ === void 0 ? 10 : _arr$_i$;
  var _arr$_i$2 = _arr$_i[1];
  vNull = _arr$_i$2 === void 0 ? 11 : _arr$_i$2;
  var _arr$_i$3 = _arr$_i[2];
  vHole = _arr$_i$3 === void 0 ? 12 : _arr$_i$3;
  var _arr$_i$4 = _arr$_i[3];
  vUndefined = _arr$_i$4 === void 0 ? 13 : _arr$_i$4;
  var _arr$_i$5 = _arr$_i[4];
  vOob = _arr$_i$5 === void 0 ? 14 : _arr$_i$5;
  assert.sameValue(v2, 2);
  assert.sameValue(vNull, null);
  assert.sameValue(vHole, 12);
  assert.sameValue(vUndefined, 13);
  assert.sameValue(vOob, 14);
  counter += 1;
}

assert.sameValue(counter, 1);
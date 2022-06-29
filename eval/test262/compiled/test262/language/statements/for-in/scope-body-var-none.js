function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
description: No variable environment is created for the statement body
info: |
    IterationStatement : for ( ForDeclaration of AssignmentExpression ) Statement

    [...]
    2. Return ? ForIn/OfBodyEvaluation(ForDeclaration, Statement, keyResult,
       lexicalBinding, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    5. Repeat
       [...]
       d. If lhsKind is either assignment or varBinding, then
          [...]
       e. Else,
          i. Assert: lhsKind is lexicalBinding.
          ii. Assert: lhs is a ForDeclaration.
          iii. Let iterationEnv be NewDeclarativeEnvironment(oldEnv).
          iv. Perform BindingInstantiation for lhs passing iterationEnv as the
              argument.
          v. Set the running execution context's LexicalEnvironment to
             iterationEnv.
          [...]
features: [let]
---*/
var probeBefore = function probeBefore() {
  return x;
};

var probeExpr, probeDecl, probeBody;
var x = 1;

for (var _ref in {
  '': probeExpr = function probeExpr() {
    return x;
  }
}) {
  var _ref2 = _slicedToArray(_ref, 1);

  var _ref2$ = _ref2[0];

  var _ = _ref2$ === void 0 ? probeDecl = function probeDecl() {
    return x;
  } : _ref2$;

  var x = 2,
      __ = probeBody = function probeBody() {
    return x;
  };
}

assert.sameValue(probeBefore(), 2, 'reference preceding statement');
assert.sameValue(probeExpr(), 2, 'reference from AssignmentExpression');
assert.sameValue(probeDecl(), 2, 'reference from ForDeclaration');
assert.sameValue(probeBody(), 2, 'reference from statement body');
assert.sameValue(x, 2, 'reference following statement');
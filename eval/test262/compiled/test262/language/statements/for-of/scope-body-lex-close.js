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
description: >
    Removal of lexical environment for the initial evaluation of the statement
    body
info: |
    IterationStatement : for ( ForDeclaration of AssignmentExpression ) Statement

    [...]
    2. Return ? ForIn/OfBodyEvaluation(ForDeclaration, Statement, keyResult,
       lexicalBinding, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    5. Repeat
       [...]
       i. Let result be the result of evaluating stmt.
       j. Set the running execution context's LexicalEnvironment to oldEnv.
       k. If LoopContinues(result, labelSet) is false, return ?
          IteratorClose(iterator, UpdateEmpty(result, V)).
       l. If result.[[Value]] is not empty, let V be result.[[Value]].
features: [let]
---*/
var x = 'outside';
var probeDecl, probeBody;

var _loop = function _loop() {
  var _arr$_i = _slicedToArray(_arr[_i], 2),
      x = _arr$_i[0],
      _arr$_i$ = _arr$_i[1],
      _ = _arr$_i$ === void 0 ? probeDecl = function probeDecl() {
    return x;
  } : _arr$_i$;

  probeBody = function probeBody() {
    return x;
  };
};

for (var _i = 0, _arr = [['inside']]; _i < _arr.length; _i++) {
  _loop();
}

assert.sameValue(probeDecl(), 'inside', 'reference from ForDeclaration');
assert.sameValue(probeBody(), 'inside', 'reference from statement body');
assert.sameValue(x, 'outside');
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-function-calls-runtime-semantics-evaluation
description: >
  Direct eval call with spread.
info: |
  12.3.4.1 Runtime Semantics: Evaluation
    ...
    3. If Type(ref) is Reference and IsPropertyReference(ref) is false and GetReferencedName(ref) is "eval", then
      a. If SameValue(func, %eval%) is true, then
        i. Let argList be ? ArgumentListEvaluation(Arguments).
        ii. If argList has no elements, return undefined.
        iii. Let evalText be the first element of argList.
        ...

features: [Symbol.iterator]
---*/
var elements = ["x = 1;", "x = 2;"];
var nextCount = 0;
var iter = {};

iter[Symbol.iterator] = function () {
  return {
    next: function next() {
      var i = nextCount++;

      if (i < elements.length) {
        return {
          done: false,
          value: elements[i]
        };
      }

      return {
        done: true,
        value: undefined
      };
    }
  };
};

var x = "global";

(function () {
  var x = "local";
  eval.apply(void 0, _toConsumableArray(iter));
  assert.sameValue(x, 1);
})();

assert.sameValue(x, "global");
assert.sameValue(nextCount, 3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-classdefinitionevaluation
description: >
    In a class, static computed property method names can be a number
info: |
  Set order: "length", "name", "prototype", static methods

  Runtime Semantics: ClassDefinitionEvaluation

  ...
  11. Let constructorInfo be ! DefineMethod of constructor with arguments proto and constructorParent.
  12. Let F be constructorInfo.[[Closure]].
  13. Perform SetFunctionName(F, className).
  14. Perform MakeConstructor(F, false, proto).
  ...
  19. Else, let methods be NonConstructorMethodDefinitions of ClassBody.
  20. For each ClassElement m in order from methods, do
    a. If IsStatic of m is false, then
      ...
    b. Else,
      i. Let status be PropertyDefinitionEvaluation of m with arguments F and false.
    ...

  ---

  Object.getOwnPropertyNames ( O )

  1. Return ? GetOwnPropertyKeys(O, string).

  Runtime Semantics: GetOwnPropertyKeys ( O, type )

  1. Let obj be ? ToObject(O).
  2. Let keys be ? obj.[[OwnPropertyKeys]]().
  3. Let nameList be a new empty List.
  4. For each element nextKey of keys in List order, do
    a. If Type(nextKey) is Symbol and type is symbol or Type(nextKey) is String and type is string, then
      i. Append nextKey as the last element of nameList.
  5. Return CreateArrayFromList(nameList).

  [[OwnPropertyKeys]] ( )

  1. Return ! OrdinaryOwnPropertyKeys(O).

  OrdinaryOwnPropertyKeys ( O )

  1. Let keys be a new empty List.
  2. For each own property key P of O such that P is an array index, in ascending numeric index order, do
    a. Add P as the last element of keys.
  3. For each own property key P of O such that Type(P) is String and P is not an array index, in ascending chronological order of property creation, do
    a. Add P as the last element of keys.
  4. For each own property key P of O such that Type(P) is Symbol, in ascending chronological order of property creation, do
    a. Add P as the last element of keys.
  5. Return keys.
includes: [compareArray.js]
---*/
var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, null, [{
    key: "a",
    value: function a() {
      return 'A';
    }
  }, {
    key: "1",
    value: function _() {
      return 'B';
    }
  }, {
    key: "c",
    value: function c() {
      return 'C';
    }
  }, {
    key: "2",
    value: function _() {
      return 'D';
    }
  }]);

  return C;
}();

assert.sameValue(C.a(), 'A', "`C.a()` returns `'A'`. Defined as `static a() { return 'A'; }`");
assert.sameValue(C[1](), 'B', "`C[1]()` returns `'B'`. Defined as `static [1]() { return 'B'; }`");
assert.sameValue(C.c(), 'C', "`C.c()` returns `'C'`. Defined as `static c() { return 'C'; }`");
assert.sameValue(C[2](), 'D', "`C[2]()` returns `'D'`. Defined as `static [2]() { return 'D'; }`");
assert.compareArray(Object.keys(C), []);
assert.compareArray(Object.getOwnPropertyNames(C), ['1', '2', 'length', 'name', 'prototype', 'a', 'c']);
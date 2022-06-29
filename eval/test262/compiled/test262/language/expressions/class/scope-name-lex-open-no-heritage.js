function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-classdefinitionevaluation
description: >
    Creation of new lexical environment for the class "name" (without a
    heritage)
info: |
    1. Let lex be the LexicalEnvironment of the running execution context.
    2. Let classScope be NewDeclarativeEnvironment(lex).
    3. Let classScopeEnvRec be classScope's EnvironmentRecord.
    4. If className is not undefined, then
       a. Perform classScopeEnvRec.CreateImmutableBinding(className, true).
    5. If ClassHeritageopt is not present, then
       [...]
    6. Else,
       a. Set the running execution context's LexicalEnvironment to classScope.
       [...]
    11. Set the running execution context's LexicalEnvironment to classScope.
---*/
var probeBefore = function probeBefore() {
  return C;
};

var C = 'outside';

var cls = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: "probe",
    value: function probe() {
      return C;
    }
  }, {
    key: "modify",
    value: function modify() {
      C = null;
    }
  }]);

  return C;
}();

assert.sameValue(probeBefore(), 'outside');
assert.sameValue(cls.prototype.probe(), cls, 'inner binding value');
assert["throws"](TypeError, cls.prototype.modify, 'inner binding rejects modification');
assert.sameValue(cls.prototype.probe(), cls, 'inner binding is immutable');
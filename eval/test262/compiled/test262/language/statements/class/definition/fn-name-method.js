function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.6.9
description: Assignment of function `name` attribute (MethodDefinition)
info: |
    6. If IsAnonymousFunctionDefinition(AssignmentExpression) is true, then
       a. Let hasNameProperty be HasOwnProperty(propValue, "name").
       b. ReturnIfAbrupt(hasNameProperty).
       c. If hasNameProperty is false, perform SetFunctionName(propValue,
          propKey).
includes: [propertyHelper.js]
features: [Symbol]
---*/
var namedSym = Symbol('test262');
var anonSym = Symbol();

var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "id",
    value: function id() {}
  }, {
    key: anonSym,
    value: function value() {}
  }, {
    key: namedSym,
    value: function value() {}
  }], [{
    key: "id",
    value: function id() {}
  }, {
    key: anonSym,
    value: function value() {}
  }, {
    key: namedSym,
    value: function value() {}
  }]);

  return A;
}();

assert.sameValue(A.prototype.id.name, 'id', 'via IdentifierName');
verifyNotEnumerable(A.prototype.id, 'name');
verifyNotWritable(A.prototype.id, 'name');
verifyConfigurable(A.prototype.id, 'name');
assert.sameValue(A.prototype[anonSym].name, '', 'via anonymous Symbol');
verifyNotEnumerable(A.prototype[anonSym], 'name');
verifyNotWritable(A.prototype[anonSym], 'name');
verifyConfigurable(A.prototype[anonSym], 'name');
assert.sameValue(A.prototype[namedSym].name, '[test262]', 'via Symbol');
verifyNotEnumerable(A.prototype[namedSym], 'name');
verifyNotWritable(A.prototype[namedSym], 'name');
verifyConfigurable(A.prototype[namedSym], 'name');
assert.sameValue(A.id.name, 'id', 'static via IdentifierName');
verifyNotEnumerable(A.id, 'name');
verifyNotWritable(A.id, 'name');
verifyConfigurable(A.id, 'name');
assert.sameValue(A[anonSym].name, '', 'static via anonymous Symbol');
verifyNotEnumerable(A[anonSym], 'name');
verifyNotWritable(A[anonSym], 'name');
verifyConfigurable(A[anonSym], 'name');
assert.sameValue(A[namedSym].name, '[test262]', 'static via Symbol');
verifyNotEnumerable(A[namedSym], 'name');
verifyNotWritable(A[namedSym], 'name');
verifyConfigurable(A[namedSym], 'name');
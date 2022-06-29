function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.3.9
description: Assignment of function `name` attribute ("set" accessor)
info: |
    MethodDefinition :
        set PropertyName ( PropertySetParameterList ) { FunctionBody }

    [...]
    7. Perform SetFunctionName(closure, propKey, "set").
includes: [propertyHelper.js]
features: [Symbol]
---*/
var namedSym = Symbol('test262');
var anonSym = Symbol();
var setter;

var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "id",
    set: function set(_) {}
  }, {
    key: anonSym,
    set: function set(_) {}
  }, {
    key: namedSym,
    set: function set(_) {}
  }], [{
    key: "id",
    set: function set(_) {}
  }, {
    key: anonSym,
    set: function set(_) {}
  }, {
    key: namedSym,
    set: function set(_) {}
  }]);

  return A;
}();

setter = Object.getOwnPropertyDescriptor(A.prototype, 'id').set;
assert.sameValue(setter.name, 'set id');
verifyNotEnumerable(setter, 'name');
verifyNotWritable(setter, 'name');
verifyConfigurable(setter, 'name');
setter = Object.getOwnPropertyDescriptor(A.prototype, anonSym).set;
assert.sameValue(setter.name, 'set ');
verifyNotEnumerable(setter, 'name');
verifyNotWritable(setter, 'name');
verifyConfigurable(setter, 'name');
setter = Object.getOwnPropertyDescriptor(A.prototype, namedSym).set;
assert.sameValue(setter.name, 'set [test262]');
verifyNotEnumerable(setter, 'name');
verifyNotWritable(setter, 'name');
verifyConfigurable(setter, 'name');
setter = Object.getOwnPropertyDescriptor(A, 'id').set;
assert.sameValue(setter.name, 'set id');
verifyNotEnumerable(setter, 'name');
verifyNotWritable(setter, 'name');
verifyConfigurable(setter, 'name');
setter = Object.getOwnPropertyDescriptor(A, anonSym).set;
assert.sameValue(setter.name, 'set ');
verifyNotEnumerable(setter, 'name');
verifyNotWritable(setter, 'name');
verifyConfigurable(setter, 'name');
setter = Object.getOwnPropertyDescriptor(A, namedSym).set;
assert.sameValue(setter.name, 'set [test262]');
verifyNotEnumerable(setter, 'name');
verifyNotWritable(setter, 'name');
verifyConfigurable(setter, 'name');
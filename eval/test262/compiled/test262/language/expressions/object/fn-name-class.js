var _o;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.6.9
description: Assignment of function `name` attribute (ClassExpression)
info: |
    6. If IsAnonymousFunctionDefinition(AssignmentExpression) is true, then
       a. Let hasNameProperty be HasOwnProperty(propValue, "name").
       b. ReturnIfAbrupt(hasNameProperty).
       c. If hasNameProperty is false, perform SetFunctionName(propValue,
          propKey).
includes: [propertyHelper.js]
features: [class, Symbol]
---*/
var namedSym = Symbol('test262');
var anonSym = Symbol();
var o;
o = (_o = {
  xId: /*#__PURE__*/_createClass(function x() {
    _classCallCheck(this, x);
  }),
  id: /*#__PURE__*/_createClass(function id() {
    _classCallCheck(this, id);
  })
}, _defineProperty(_o, anonSym, /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  return _createClass(_class);
}()), _defineProperty(_o, namedSym, /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  return _createClass(_class2);
}()), _o);
assert(o.xId.name !== 'xId');
assert.sameValue(o.id.name, 'id', 'via IdentifierName');
verifyNotEnumerable(o.id, 'name');
verifyNotWritable(o.id, 'name');
verifyConfigurable(o.id, 'name');
assert.sameValue(o[anonSym].name, '', 'via anonymous Symbol');
verifyNotEnumerable(o[anonSym], 'name');
verifyNotWritable(o[anonSym], 'name');
verifyConfigurable(o[anonSym], 'name');
assert.sameValue(o[namedSym].name, '[test262]', 'via Symbol');
verifyNotEnumerable(o[namedSym], 'name');
verifyNotWritable(o[namedSym], 'name');
verifyConfigurable(o[namedSym], 'name');
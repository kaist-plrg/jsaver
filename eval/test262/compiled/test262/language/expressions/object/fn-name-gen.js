var _o;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.2.6.9
description: >
    Assignment of function `name` attribute (GeneratorExpression)
info: |
    6. If IsAnonymousFunctionDefinition(AssignmentExpression) is true, then
       a. Let hasNameProperty be HasOwnProperty(propValue, "name").
       b. ReturnIfAbrupt(hasNameProperty).
       c. If hasNameProperty is false, perform SetFunctionName(propValue,
          propKey).
includes: [propertyHelper.js]
features: [generators, Symbol]
---*/
var namedSym = Symbol('test262');
var anonSym = Symbol();
var o;
o = (_o = {
  xId: /*#__PURE__*/regeneratorRuntime.mark(function x() {
    return regeneratorRuntime.wrap(function x$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, x);
  }),
  id: /*#__PURE__*/regeneratorRuntime.mark(function id() {
    return regeneratorRuntime.wrap(function id$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, id);
  })
}, _defineProperty(_o, anonSym, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee);
})), _defineProperty(_o, namedSym, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee2);
})), _o);
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
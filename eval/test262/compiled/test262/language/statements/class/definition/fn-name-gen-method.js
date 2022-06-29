function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.4.13
description: >
    Assignment of function `name` attribute (GeneratorMethod)
info: |
    GeneratorMethod :
        * PropertyName ( StrictFormalParameters ) { GeneratorBody }

    [...]
    9. Perform SetFunctionName(closure, propKey).
includes: [propertyHelper.js]
features: [generators, Symbol]
---*/
var namedSym = Symbol('test262');
var anonSym = Symbol();

var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "id",
    value: /*#__PURE__*/regeneratorRuntime.mark(function id() {
      return regeneratorRuntime.wrap(function id$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, id);
    })
  }, {
    key: anonSym,
    value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
      return regeneratorRuntime.wrap(function value$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, value);
    })
  }, {
    key: namedSym,
    value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
      return regeneratorRuntime.wrap(function value$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case "end":
              return _context3.stop();
          }
        }
      }, value);
    })
  }], [{
    key: "id",
    value: /*#__PURE__*/regeneratorRuntime.mark(function id() {
      return regeneratorRuntime.wrap(function id$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
            case "end":
              return _context4.stop();
          }
        }
      }, id);
    })
  }, {
    key: anonSym,
    value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
      return regeneratorRuntime.wrap(function value$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
            case "end":
              return _context5.stop();
          }
        }
      }, value);
    })
  }, {
    key: namedSym,
    value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
      return regeneratorRuntime.wrap(function value$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
            case "end":
              return _context6.stop();
          }
        }
      }, value);
    })
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.5
description: >
    ClassDeclaration:
      class BindingIdentifier ClassTail

    ClassTail:
      ... { ClassBodyopt }

    ClassBody[Yield] :
      ClassElementList[?Yield]


    ClassElementList[Yield] :
      ClassElement[?Yield]
      ClassElementList[?Yield] ClassElement[?Yield]

    ClassElement[Yield] :
      MethodDefinition[?Yield]
      ...

---*/
var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "1",
    value: /*#__PURE__*/regeneratorRuntime.mark(function _() {
      return regeneratorRuntime.wrap(function _$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _);
    })
  }]);

  return A;
}();

assert.sameValue(_typeof(A), "function");
assert.sameValue(_typeof(A.prototype[1]), "function");
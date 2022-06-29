function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Copyright (C) 2020 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-async-function-prototype-properties
description: >
  %AsyncFunction.prototype% is an ordinary non-callable object.
info: |
  Properties of the AsyncFunction Prototype Object

  The AsyncFunction prototype object:

  [...]
  * is an ordinary object.
  * is not a function object and does not have an [[ECMAScriptCode]] internal slot
    or any other of the internal slots listed in Table 28.
features: [async-functions]
---*/
var AsyncFunctionPrototype = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
assert.sameValue(_typeof(AsyncFunctionPrototype), "object");
assert["throws"](TypeError, function () {
  AsyncFunctionPrototype();
});
assert(!AsyncFunctionPrototype.hasOwnProperty("length"), "length");
assert(!AsyncFunctionPrototype.hasOwnProperty("name"), "name");
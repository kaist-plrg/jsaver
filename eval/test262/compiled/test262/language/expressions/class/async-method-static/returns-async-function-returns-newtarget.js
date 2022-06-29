var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/async-functions/returns-async-function-returns-newtarget.case
// - src/async-functions/evaluation/async-class-expr-static-method.template

/*---
description: Async function returns an async function. (Static async method as a ClassExpression element)
esid: prod-AsyncMethod
features: [async-functions]
flags: [generated, async]
info: |
    ClassElement :
      static MethodDefinition

    MethodDefinition :
      AsyncMethod

    Async Function Definitions

    AsyncMethod :
      async [no LineTerminator here] PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

---*/
var count = 0;

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, null, [{
    key: "method",
    value: function () {
      var _method = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(x) {
        return regeneratorRuntime.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _target() {
                  return regeneratorRuntime.wrap(function _target$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          return _context.abrupt("return", this instanceof _target ? this.constructor : void 0);

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _target, this);
                })));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee);
      }));

      function method(_x) {
        return _method.apply(this, arguments);
      }

      return method;
    }()
  }]);

  return C;
}(); // Stores a reference `asyncFn` for case evaluation


var asyncFn = C.method;
asyncFn(1).then(function (retFn) {
  _newArrowCheck(this, _this);

  count++;
  return retFn();
}.bind(this)).then(function (result) {
  _newArrowCheck(this, _this);

  assert.sameValue(result, undefined);
  assert.sameValue(count, 1);
}.bind(this)).then($DONE, $DONE);
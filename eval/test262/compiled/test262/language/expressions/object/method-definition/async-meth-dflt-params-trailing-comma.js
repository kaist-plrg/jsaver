var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-params-trailing-comma.case
// - src/function-forms/default/async-meth.template

/*---
description: A trailing comma should not increase the respective length, using default parameters (async method)
esid: sec-async-function-definitions
features: [async-functions]
flags: [generated, async]
info: |
    14.6 Async Function Definitions

    AsyncMethod :
     async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }


    Trailing comma in the parameters list

    14.1 Function Definitions

    FormalParameters[Yield, Await] : FormalParameterList[?Yield, ?Await] ,
---*/
var callCount = 0;
var __obj = {
  method: function method(a) {
    var _arguments = arguments;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var b;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              b = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 39;
              assert.sameValue(a, 42);
              assert.sameValue(b, 39);
              callCount = callCount + 1;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
}; // Stores a reference `ref` for case evaluation

var ref = __obj.method;
ref(42, undefined, 1).then(function () {
  _newArrowCheck(this, _this);

  assert.sameValue(callCount, 1, 'async method invoked exactly once');
}.bind(this)).then($DONE, $DONE);
assert.sameValue(ref.length, 1, 'length is properly set');
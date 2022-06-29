var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-params-ref-prior.case
// - src/function-forms/default/async-arrow-function.template

/*---
description: Referencing a parameter that occurs earlier in the ParameterList (async arrow function expression)
esid: sec-async-arrow-function-definitions
features: [default-parameters, async-functions]
flags: [generated, async]
info: |
    14.7 Async Arrow Function Definitions

    AsyncArrowFunction :
      ...
      CoverCallExpressionAndAsyncArrowHead => AsyncConciseBody

    AsyncConciseBody :
      { AsyncFunctionBody }

    ...

    Supplemental Syntax

    When processing an instance of the production AsyncArrowFunction :
    CoverCallExpressionAndAsyncArrowHead => AsyncConciseBody the interpretation of
    CoverCallExpressionAndAsyncArrowHead is refined using the following grammar:

    AsyncArrowHead :
      async ArrowFormalParameters


    14.1.19 Runtime Semantics: IteratorBindingInitialization

    FormalsList : FormalsList , FormalParameter

    1. Let status be the result of performing IteratorBindingInitialization for
       FormalsList using iteratorRecord and environment as the arguments.
    2. ReturnIfAbrupt(status).
    3. Return the result of performing IteratorBindingInitialization for
       FormalParameter using iteratorRecord and environment as the arguments.

---*/
var x = 0;
var callCount = 0; // Stores a reference `ref` for case evaluation

var ref = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(x) {
    var y,
        z,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            y = _args.length > 1 && _args[1] !== undefined ? _args[1] : x;
            z = _args.length > 2 && _args[2] !== undefined ? _args[2] : y;
            assert.sameValue(x, 3, 'first argument value');
            assert.sameValue(y, 3, 'second argument value');
            assert.sameValue(z, 3, 'third argument value');
            callCount = callCount + 1;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function ref(_x) {
    return _ref.apply(this, arguments);
  };
}();

ref(3).then(function () {
  _newArrowCheck(this, _this);

  assert.sameValue(callCount, 1, 'async arrow function invoked exactly once');
}.bind(this)).then($DONE, $DONE);
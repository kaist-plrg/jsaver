function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// This file was procedurally generated from the following sources:
// - src/function-forms/reassign-fn-name-in-body.case
// - src/function-forms/expr-named/async-func-expr-named-strict-error.template

/*---
description: Reassignment of function name is silently ignored in non-strict mode code. (async function named expression in strict mode code)
esid: sec-async-function-definitions
features: [async-functions]
flags: [generated, async, onlyStrict]
info: |
    Async Function Definitions

    AsyncFunctionExpression :
      async function BindingIdentifier ( FormalParameters ) { AsyncFunctionBody }

---*/
// increment callCount in case "body"
var callCount = 0;

var ref = /*#__PURE__*/function () {
  var _BindingIdentifier = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            callCount++;
            BindingIdentifier = 1;
            return _context.abrupt("return", BindingIdentifier);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function BindingIdentifier() {
    return _BindingIdentifier.apply(this, arguments);
  }

  return BindingIdentifier;
}();

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var catchCount;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          catchCount = 0;
          _context2.prev = 1;
          _context2.next = 4;
          return ref();

        case 4:
          _context2.next = 10;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](1);
          catchCount++;
          assert(_context2.t0 instanceof TypeError);

        case 10:
          assert.sameValue(catchCount, 1);
          assert.sameValue(callCount, 1);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, null, [[1, 6]]);
}))().then($DONE, $DONE);
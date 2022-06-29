function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

// This file was procedurally generated from the following sources:
// - src/function-forms/reassign-fn-name-in-body.case
// - src/function-forms/expr-named/async-gen-func-expr-named-strict-error.template

/*---
description: Reassignment of function name is silently ignored in non-strict mode code. (async generator named function expression in strict mode code)
esid: sec-asyncgenerator-definitions-evaluation
features: [async-iteration]
flags: [generated, async, onlyStrict]
info: |
    AsyncGeneratorExpression :
        async function * BindingIdentifier ( FormalParameters ) { AsyncGeneratorBody }

---*/
// increment callCount in case "body"
var callCount = 0;

var ref = /*#__PURE__*/function () {
  var _BindingIdentifier = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
          _context2.next = 6;
          return _context2.sent.next();

        case 6:
          _context2.sent.value;
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          catchCount++;
          assert(_context2.t0 instanceof TypeError);

        case 13:
          assert.sameValue(catchCount, 1);
          assert.sameValue(callCount, 1);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, null, [[1, 9]]);
}))().then($DONE, $DONE);
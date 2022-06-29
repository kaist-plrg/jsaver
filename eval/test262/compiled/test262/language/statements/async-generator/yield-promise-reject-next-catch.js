var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

// This file was procedurally generated from the following sources:
// - src/async-generators/yield-promise-reject-next-catch.case
// - src/async-generators/default/async-declaration.template

/*---
description: yield Promise.reject(value) is treated as throw value (Async generator Function declaration)
esid: prod-AsyncGeneratorDeclaration
features: [async-iteration]
flags: [generated, async]
info: |
    Async Generator Function Definitions

    AsyncGeneratorDeclaration:
      async [no LineTerminator here] function * BindingIdentifier ( FormalParameters ) {
        AsyncGeneratorBody }

---*/
var error = new Error();
var callCount = 0;

function gen() {
  return _gen.apply(this, arguments);
}

function _gen() {
  _gen = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            callCount += 1;
            _context.next = 3;
            return Promise.reject(error);

          case 3:
            _context.next = 5;
            return "unreachable";

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _gen.apply(this, arguments);
}

var iter = gen();
iter.next().then(function () {
  _newArrowCheck(this, _this);

  throw new Test262Error("Promise incorrectly resolved.");
}.bind(this))["catch"](function (rejectValue) {
  var _this2 = this;

  _newArrowCheck(this, _this);

  // yield Promise.reject(error);
  assert.sameValue(rejectValue, error);
  iter.next().then(function (_ref) {
    _newArrowCheck(this, _this2);

    var done = _ref.done,
        value = _ref.value;
    // iter is closed now.
    assert.sameValue(done, true, "The value of IteratorResult.done is `true`");
    assert.sameValue(value, undefined, "The value of IteratorResult.value is `undefined`");
  }.bind(this)).then($DONE, $DONE);
}.bind(this));
assert.sameValue(callCount, 1);
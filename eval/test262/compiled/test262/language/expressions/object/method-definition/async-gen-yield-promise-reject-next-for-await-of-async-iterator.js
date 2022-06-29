var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

// This file was procedurally generated from the following sources:
// - src/async-generators/yield-promise-reject-next-for-await-of-async-iterator.case
// - src/async-generators/default/async-obj-method.template

/*---
description: yield * [Promise.reject(value)] is treated as throw value (Async generator method)
esid: prod-AsyncGeneratorMethod
features: [async-iteration]
flags: [generated, async]
info: |
    Async Generator Function Definitions

    AsyncGeneratorMethod :
      async [no LineTerminator here] * PropertyName ( UniqueFormalParameters ) { AsyncGeneratorBody }

---*/
var error = new Error();

function readFile() {
  return _readFile.apply(this, arguments);
}

function _readFile() {
  _readFile = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.reject(error);

          case 2:
            _context.next = 4;
            return "unreachable";

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _readFile.apply(this, arguments);
}

var callCount = 0;
var gen = {
  method: function method() {
    return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, line;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              callCount += 1;
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context2.prev = 3;
              _iterator = _asyncIterator(readFile());

            case 5:
              _context2.next = 7;
              return _awaitAsyncGenerator(_iterator.next());

            case 7:
              if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
                _context2.next = 14;
                break;
              }

              line = _step.value;
              _context2.next = 11;
              return line;

            case 11:
              _iteratorAbruptCompletion = false;
              _context2.next = 5;
              break;

            case 14:
              _context2.next = 20;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](3);
              _didIteratorError = true;
              _iteratorError = _context2.t0;

            case 20:
              _context2.prev = 20;
              _context2.prev = 21;

              if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                _context2.next = 25;
                break;
              }

              _context2.next = 25;
              return _awaitAsyncGenerator(_iterator["return"]());

            case 25:
              _context2.prev = 25;

              if (!_didIteratorError) {
                _context2.next = 28;
                break;
              }

              throw _iteratorError;

            case 28:
              return _context2.finish(25);

            case 29:
              return _context2.finish(20);

            case 30:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 16, 20, 30], [21,, 25, 29]]);
    }))();
  }
}.method;
var iter = gen();
iter.next().then(function () {
  _newArrowCheck(this, _this);

  throw new Test262Error("Promise incorrectly resolved.");
}.bind(this), function (rejectValue) {
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
}.bind(this))["catch"]($DONE);
assert.sameValue(callCount, 1);
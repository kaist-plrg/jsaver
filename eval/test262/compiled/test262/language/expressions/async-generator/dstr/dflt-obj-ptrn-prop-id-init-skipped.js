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
// - src/dstr-binding/obj-ptrn-prop-id-init-skipped.case
// - src/dstr-binding/default/async-gen-func-expr-dflt.template

/*---
description: Destructuring initializer is not evaluated when value is not `undefined` (async generator function expression (default parameter))
esid: sec-asyncgenerator-definitions-evaluation
features: [async-iteration]
flags: [generated, async]
info: |
    AsyncGeneratorExpression : async [no LineTerminator here] function * ( FormalParameters ) {
        AsyncGeneratorBody }

        [...]
        3. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters,
           AsyncGeneratorBody, scope, strict).
        [...]


    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    BindingElement : BindingPattern Initializeropt

    [...]
    3. If Initializer is present and v is undefined, then
    [...]
---*/
var initCount = 0;

function counter() {
  initCount += 1;
}

var callCount = 0;
var f;

f = /*#__PURE__*/function () {
  var _ref = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _ref2,
        _ref2$s,
        t,
        _ref2$u,
        v,
        _ref2$w,
        x,
        _ref2$y,
        z,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {
              s: null,
              u: 0,
              w: false,
              y: ''
            }, _ref2$s = _ref2.s, t = _ref2$s === void 0 ? counter() : _ref2$s, _ref2$u = _ref2.u, v = _ref2$u === void 0 ? counter() : _ref2$u, _ref2$w = _ref2.w, x = _ref2$w === void 0 ? counter() : _ref2$w, _ref2$y = _ref2.y, z = _ref2$y === void 0 ? counter() : _ref2$y;
            assert.sameValue(t, null);
            assert.sameValue(v, 0);
            assert.sameValue(x, false);
            assert.sameValue(z, '');
            assert.sameValue(initCount, 0);
            assert["throws"](ReferenceError, function () {
              s;
            });
            assert["throws"](ReferenceError, function () {
              u;
            });
            assert["throws"](ReferenceError, function () {
              w;
            });
            assert["throws"](ReferenceError, function () {
              y;
            });
            callCount = callCount + 1;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function f() {
    return _ref.apply(this, arguments);
  };
}();

f().next().then(function () {
  _newArrowCheck(this, _this);

  assert.sameValue(callCount, 1, 'invoked exactly once');
}.bind(this)).then($DONE, $DONE);
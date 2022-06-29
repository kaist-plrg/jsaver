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
// - src/function-forms/dflt-params-arg-val-not-undefined.case
// - src/function-forms/default/async-gen-func-expr.template

/*---
description: Use of initializer when argument value is not `undefined` (async generator function expression)
esid: sec-asyncgenerator-definitions-evaluation
features: [default-parameters, async-iteration]
flags: [generated, async]
info: |
    AsyncGeneratorExpression : async [no LineTerminator here] function * ( FormalParameters ) {
        AsyncGeneratorBody }

        [...]
        3. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters,
           AsyncGeneratorBody, scope, strict).
        [...]


    14.1.19 Runtime Semantics: IteratorBindingInitialization

    FormalsList : FormalsList , FormalParameter

    [...]
    23. Let iteratorRecord be Record {[[Iterator]]:
        CreateListIterator(argumentsList), [[Done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        a. Perform ? IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]

---*/
var obj = {};
var falseCount = 0;
var stringCount = 0;
var nanCount = 0;
var zeroCount = 0;
var nullCount = 0;
var objCount = 0;
var callCount = 0; // Stores a reference `ref` for case evaluation

var ref;

ref = /*#__PURE__*/function () {
  var _ref = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var aFalse,
        aString,
        aNaN,
        a0,
        aNull,
        aObj,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            aFalse = _args.length > 0 && _args[0] !== undefined ? _args[0] : falseCount += 1;
            aString = _args.length > 1 && _args[1] !== undefined ? _args[1] : stringCount += 1;
            aNaN = _args.length > 2 && _args[2] !== undefined ? _args[2] : nanCount += 1;
            a0 = _args.length > 3 && _args[3] !== undefined ? _args[3] : zeroCount += 1;
            aNull = _args.length > 4 && _args[4] !== undefined ? _args[4] : nullCount += 1;
            aObj = _args.length > 5 && _args[5] !== undefined ? _args[5] : objCount += 1;
            assert.sameValue(aFalse, false);
            assert.sameValue(aString, '');
            assert.sameValue(aNaN, NaN);
            assert.sameValue(a0, 0);
            assert.sameValue(aNull, null);
            assert.sameValue(aObj, obj);
            callCount = callCount + 1;

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function ref() {
    return _ref.apply(this, arguments);
  };
}();

ref(false, '', NaN, 0, null, obj).next().then(function () {
  _newArrowCheck(this, _this);

  assert.sameValue(callCount, 1, 'generator function invoked exactly once');
}.bind(this)).then($DONE, $DONE);
assert.sameValue(falseCount, 0, 'initializer not evaluated: false');
assert.sameValue(stringCount, 0, 'initializer not evaluated: string');
assert.sameValue(nanCount, 0, 'initializer not evaluated: NaN');
assert.sameValue(zeroCount, 0, 'initializer not evaluated: 0');
assert.sameValue(nullCount, 0, 'initializer not evaluated: null');
assert.sameValue(objCount, 0, 'initializer not evaluated: object');
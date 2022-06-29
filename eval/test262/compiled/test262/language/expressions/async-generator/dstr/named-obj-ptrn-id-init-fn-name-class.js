var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-init-fn-name-class.case
// - src/dstr-binding/default/async-gen-func-named-expr.template

/*---
description: SingleNameBinding assigns `name` to "anonymous" classes (async generator named function expression)
esid: sec-asyncgenerator-definitions-evaluation
features: [async-iteration]
flags: [generated, async]
info: |
    AsyncGeneratorExpression : async [no LineTerminator here] function * BindingIdentifier
        ( FormalParameters ) { AsyncGeneratorBody }

        [...]
        7. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters,
           AsyncGeneratorBody, funcEnv, strict).
        [...]


    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    6. If Initializer is present and v is undefined, then
       [...]
       d. If IsAnonymousFunctionDefinition(Initializer) is true, then
          i. Let hasNameProperty be HasOwnProperty(v, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(v,
               bindingId).
---*/
var callCount = 0;
var f;

f = /*#__PURE__*/function () {
  var _h = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var _ref$cls, cls, _ref$xCls, xCls, _ref$xCls2, xCls2;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$cls = _ref.cls, cls = _ref$cls === void 0 ? /*#__PURE__*/function () {
              function _class() {
                _classCallCheck(this, _class);
              }

              return _createClass(_class);
            }() : _ref$cls, _ref$xCls = _ref.xCls, xCls = _ref$xCls === void 0 ? /*#__PURE__*/_createClass(function X() {
              _classCallCheck(this, X);
            }) : _ref$xCls, _ref$xCls2 = _ref.xCls2, xCls2 = _ref$xCls2 === void 0 ? /*#__PURE__*/function () {
              function _class2() {
                _classCallCheck(this, _class2);
              }

              _createClass(_class2, null, [{
                key: "name",
                value: function name() {}
              }]);

              return _class2;
            }() : _ref$xCls2;
            assert.sameValue(cls.name, 'cls');
            assert.notSameValue(xCls.name, 'xCls');
            assert.notSameValue(xCls2.name, 'xCls2');
            callCount = callCount + 1;

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function h(_x) {
    return _h.apply(this, arguments);
  }

  return h;
}();

f({}).next().then(function () {
  _newArrowCheck(this, _this);

  assert.sameValue(callCount, 1, 'invoked exactly once');
}.bind(this)).then($DONE, $DONE);
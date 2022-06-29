var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }

function _asyncGeneratorDelegate(inner, awaitWrap) { var iter = {}, waiting = false; function pump(key, value) { waiting = true; value = new Promise(function (resolve) { resolve(inner[key](value)); }); return { done: false, value: awaitWrap(value) }; } ; iter[typeof Symbol !== "undefined" && Symbol.iterator || "@@iterator"] = function () { return this; }; iter.next = function (value) { if (waiting) { waiting = false; return value; } return pump("next", value); }; if (typeof inner["throw"] === "function") { iter["throw"] = function (value) { if (waiting) { waiting = false; throw value; } return pump("throw", value); }; } if (typeof inner["return"] === "function") { iter["return"] = function (value) { if (waiting) { waiting = false; return value; } return pump("return", value); }; } return iter; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

// Copyright (C) 2019 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-createasyncfromsynciterator
description: >
  Async-from-Sync Iterator instances are not accessible from user code.
info: |
  25.1.4.1 CreateAsyncFromSyncIterator ( syncIteratorRecord )
    1. Let asyncIterator be ! ObjectCreate(%AsyncFromSyncIteratorPrototype%, « [[SyncIteratorRecord]] »).
    2. Set asyncIterator.[[SyncIteratorRecord]] to syncIteratorRecord.
    3. Let nextMethod be ! Get(asyncIterator, "next").
    4. Let iteratorRecord be Record { [[Iterator]]: asyncIterator, [[NextMethod]]: nextMethod, [[Done]]: false }.
    5. Return iteratorRecord.

  14.4.14 Runtime Semantics: Evaluation
    YieldExpression : yield * AssignmentExpression
      1. Let generatorKind be ! GetGeneratorKind().
      ...
      4. Let iteratorRecord be ? GetIterator(value, generatorKind).
      ...

  7.4.1 GetIterator ( obj [ , hint [ , method ] ] )
    ...
    3. If method is not present, then
      a. If hint is async, then
        i. Set method to ? GetMethod(obj, @@asyncIterator).
        ii. If method is undefined, then
          1. Let syncMethod be ? GetMethod(obj, @@iterator).
          2. Let syncIteratorRecord be ? GetIterator(obj, sync, syncMethod).
          3. Return ? CreateAsyncFromSyncIterator(syncIteratorRecord).
      ...

flags: [async]
features: [async-iteration]
---*/
var AsyncIteratorPrototype = Object.getPrototypeOf( /*#__PURE__*/_wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})).constructor.prototype.prototype);
Object.defineProperty(AsyncIteratorPrototype, Symbol.iterator, {
  get: function get() {
    throw new Error("@@iterator accessed");
  }
});
Object.defineProperty(AsyncIteratorPrototype, Symbol.asyncIterator, {
  get: function get() {
    throw new Error("@@asyncIterator accessed");
  }
});

function g() {
  return _g.apply(this, arguments);
}

function _g() {
  _g = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator([]), _awaitAsyncGenerator), "t0", 1);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _g.apply(this, arguments);
}

g().next().then(function () {
  _newArrowCheck(this, _this);

  return $DONE();
}.bind(this), $DONE);
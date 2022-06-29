function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

// Copyright (C) 2018 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asyncgenerator-prototype-next
description: next() requests from iterator processed in order, await
info: >
  AsyncGenerator.prototype.next ( value )
  1. Let generator be the this value.
  2. Let completion be NormalCompletion(value).
  3. Return ! AsyncGeneratorEnqueue(generator, completion).

  AsyncGeneratorEnqueue ( generator, completion )
  ...
  4. Let queue be generator.[[AsyncGeneratorQueue]].
  5. Let request be AsyncGeneratorRequest{[[Completion]]: completion,
     [[Capability]]: promiseCapability}.
  6. Append request to the end of queue.
  ...

  AsyncGeneratorResolve ( generator, value, done )
  ...
  2. Let queue be generator.[[AsyncGeneratorQueue]].
  3. Assert: queue is not an empty List.
  4. Remove the first element from queue and let next be the value of that element.
  ...

flags: [async]
features: [async-iteration]
---*/
var yieldorder = 0;
var resolveLatePromise;

function resolveLater() {
  var _this = this;

  return new Promise(function (resolve) {
    _newArrowCheck(this, _this);

    resolveLatePromise = resolve;
  }.bind(this));
}

function g() {
  return _g.apply(this, arguments);
}

function _g() {
  _g = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return resolveLater();

          case 2:
            _context.next = 4;
            return ++yieldorder;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _g.apply(this, arguments);
}

var iter = g();
assert.sameValue(yieldorder, 0);
var item1 = iter.next();
var item2 = iter.next();
var item3 = iter.next();

function awaitnexts() {
  return _awaitnexts.apply(this, arguments);
}

function _awaitnexts() {
  _awaitnexts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = assert;
            _context2.next = 3;
            return item3;

          case 3:
            _context2.t1 = _context2.sent.value;
            _context2.t2 = undefined;

            _context2.t0.sameValue.call(_context2.t0, _context2.t1, _context2.t2);

            assert.sameValue(yieldorder, 2, "All next requests have been proccessed.");
            _context2.t3 = assert;
            _context2.next = 10;
            return item2;

          case 10:
            _context2.t4 = _context2.sent.value;

            _context2.t3.sameValue.call(_context2.t3, _context2.t4, 2);

            _context2.t5 = assert;
            _context2.next = 15;
            return item1;

          case 15:
            _context2.t6 = _context2.sent.value;

            _context2.t5.sameValue.call(_context2.t5, _context2.t6, 1);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _awaitnexts.apply(this, arguments);
}

awaitnexts().then($DONE, $DONE); // At this point:
//   yieldorder == 0
//   item1 is an unresolved promise

resolveLatePromise(++yieldorder);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2019  Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Collection of functions used to capture references cleanup from garbage collectors
features: [cleanupSome, FinalizationRegistry, Symbol, async-functions]
flags: [non-deterministic]
defines: [asyncGC, asyncGCDeref, resolveAsyncGC]
---*/
function asyncGC() {
  var _this = this;

  for (var _len = arguments.length, targets = new Array(_len), _key = 0; _key < _len; _key++) {
    targets[_key] = arguments[_key];
  }

  var finalizationRegistry = new FinalizationRegistry(function () {
    _newArrowCheck(this, _this);
  }.bind(this));
  var length = targets.length;

  for (var _i = 0, _targets = targets; _i < _targets.length; _i++) {
    var target = _targets[_i];
    finalizationRegistry.register(target, 'target');
    target = null;
  }

  targets = null;
  return Promise.resolve('tick').then(function () {
    _newArrowCheck(this, _this);

    return asyncGCDeref();
  }.bind(this)).then(function () {
    var _this2 = this;

    _newArrowCheck(this, _this);

    var names = []; // consume iterator to capture names

    finalizationRegistry.cleanupSome(function (name) {
      _newArrowCheck(this, _this2);

      names.push(name);
    }.bind(this));

    if (!names || names.length != length) {
      throw asyncGC.notCollected;
    }
  }.bind(this));
}

asyncGC.notCollected = Symbol('Object was not collected');

function asyncGCDeref() {
  return _asyncGCDeref.apply(this, arguments);
}

function _asyncGCDeref() {
  _asyncGCDeref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var trigger;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // TODO: Remove this when $262.clearKeptObject becomes documented and required
            if ($262.clearKeptObjects) {
              trigger = $262.clearKeptObjects();
            }

            _context.next = 3;
            return $262.gc();

          case 3:
            return _context.abrupt("return", Promise.resolve(trigger));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncGCDeref.apply(this, arguments);
}

function resolveAsyncGC(err) {
  if (err === asyncGC.notCollected) {
    // Do not fail as GC can't provide necessary resources.
    $DONE();
  }

  $DONE(err);
}
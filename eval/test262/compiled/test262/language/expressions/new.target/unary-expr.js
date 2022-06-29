function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Copyright (C) 2019 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-UnaryExpression
description: >
  While increments and decrements are restricted to use with NewTarget,
  other unary operators should not throw SyntaxError.
info: |
  UnaryExpression[Yield, Await]:
    UpdateExpression[?Yield, ?Await]:
      LeftHandSideExpression[?Yield, ?Await]:
        NewExpression[?Yield, ?Await]:
          MemberExpression[Yield, Await]:
            MetaProperty:
              NewTarget
features: [new.target, async-functions]
flags: [async]
---*/
(function _target() {
  assert.sameValue(delete (this instanceof _target ? this.constructor : void 0), true);
})();

(function _target2() {
  assert.sameValue(void (this instanceof _target2 ? this.constructor : void 0), undefined);
})();

new function _target3() {
  assert.sameValue(_typeof(this instanceof _target3 ? this.constructor : void 0), 'function');
}();
new function _target4() {
  assert.sameValue(+(this instanceof _target4 ? this.constructor : void 0), NaN);
}();

(function _target5() {
  assert.sameValue(-(this instanceof _target5 ? this.constructor : void 0), NaN);
})();

new function _target6() {
  assert.sameValue(~(this instanceof _target6 ? this.constructor : void 0), -1);
}();

(function _target7() {
  assert.sameValue(!(this instanceof _target7 ? this.constructor : void 0), true);
})();

new function _target8() {
  assert.sameValue(delete void _typeof(+-~!(this instanceof _target8 ? this.constructor : void 0)), true);
}();

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _target9() {
  return regeneratorRuntime.wrap(function _target9$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = assert;
          _context.next = 3;
          return this instanceof _target9 ? this.constructor : void 0;

        case 3:
          _context.t1 = _context.sent;
          _context.t2 = undefined;

          _context.t0.sameValue.call(_context.t0, _context.t1, _context.t2);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _target9, this);
}))().then($DONE, $DONE);
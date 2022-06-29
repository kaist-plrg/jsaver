function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// This file was procedurally generated from the following sources:
// - src/generators/yield-spread-arr-multiple.case
// - src/generators/default/expression.template

/*---
description: Use yield value in a array spread position (Unnamed generator expression)
esid: prod-GeneratorExpression
features: [generators]
flags: [generated]
includes: [compareArray.js]
info: |
    14.4 Generator Function Definitions

    GeneratorExpression:
      function * BindingIdentifier opt ( FormalParameters ) { GeneratorBody }


    Array Initializer

    SpreadElement[Yield, Await]:
      ...AssignmentExpression[+In, ?Yield, ?Await]

---*/
var arr = ['a', 'b', 'c'];
var item;
var callCount = 0;
var gen = /*#__PURE__*/regeneratorRuntime.mark(function gen() {
  return regeneratorRuntime.wrap(function gen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          callCount += 1;
          _context.t0 = _toConsumableArray;
          _context.next = 4;
          return;

        case 4:
          _context.next = 6;
          return _context.sent;

        case 6:
          _context.t1 = _context.sent;
          _context.next = 9;
          return (0, _context.t0)(_context.t1);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, gen);
});
var iter = gen();
iter.next(false);
item = iter.next(['a', 'b', 'c']);
item = iter.next(item.value);
assert(compareArray(item.value, arr));
assert.sameValue(item.done, false);
assert.sameValue(callCount, 1);
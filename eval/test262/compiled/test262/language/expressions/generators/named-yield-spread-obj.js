function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This file was procedurally generated from the following sources:
// - src/generators/yield-spread-obj.case
// - src/generators/default/expression-named.template

/*---
description: Use yield value in a object spread position (Named generator expression)
esid: prod-GeneratorExpression
features: [object-spread, generators]
flags: [generated]
info: |
    14.4 Generator Function Definitions

    GeneratorExpression:
      function * BindingIdentifier opt ( FormalParameters ) { GeneratorBody }


    Spread Properties

    PropertyDefinition[Yield]:
      (...)
      ...AssignmentExpression[In, ?Yield]

---*/
var callCount = 0;
var gen = /*#__PURE__*/regeneratorRuntime.mark(function g() {
  return regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          callCount += 1;
          _context.t0 = _objectSpread;
          _context.t1 = _objectSpread;
          _context.t2 = {};
          _context.next = 6;
          return;

        case 6:
          _context.t3 = _context.sent;
          _context.t4 = (0, _context.t1)(_context.t2, _context.t3);
          _context.t5 = {};
          _context.t6 = {
            y: 1
          };
          _context.next = 12;
          return;

        case 12:
          _context.next = 14;
          return _context.sent;

        case 14:
          _context.t7 = _context.sent;
          _context.next = 17;
          return (0, _context.t0)(_context.t4, _context.t5, _context.t6, _context.t7);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, g);
});
var iter = gen();
iter.next();
iter.next({
  x: 42
});
iter.next({
  x: 'lol'
});
var item = iter.next({
  y: 39
});
assert.sameValue(item.value.x, 42);
assert.sameValue(item.value.y, 39);
assert.sameValue(Object.keys(item.value).length, 2);
assert.sameValue(item.done, false);
assert.sameValue(callCount, 1);
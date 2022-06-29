function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/generators/yield-spread-obj.case
// - src/generators/default/class-decl-static-method.template

/*---
description: Use yield value in a object spread position (Static generator method as a ClassDeclaration element)
esid: prod-GeneratorMethod
features: [object-spread, generators]
flags: [generated]
info: |
    ClassElement :
      static MethodDefinition

    MethodDefinition :
      GeneratorMethod

    14.4 Generator Function Definitions

    GeneratorMethod :
      * PropertyName ( UniqueFormalParameters ) { GeneratorBody }


    Spread Properties

    PropertyDefinition[Yield]:
      (...)
      ...AssignmentExpression[In, ?Yield]

---*/
var callCount = 0;

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, null, [{
    key: "gen",
    value: /*#__PURE__*/regeneratorRuntime.mark(function gen() {
      return regeneratorRuntime.wrap(function gen$(_context) {
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
      }, gen);
    })
  }]);

  return C;
}();

var gen = C.gen;
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
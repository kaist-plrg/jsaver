function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/arguments/args-trailing-comma-spread-operator.case
// - src/arguments/default/cls-expr-gen-meth-static.template

/*---
description: A trailing comma should not increase the arguments.length, using spread args (static class expression generator method)
esid: sec-arguments-exotic-objects
features: [generators]
flags: [generated]
info: |
    9.4.4 Arguments Exotic Objects

    Most ECMAScript functions make an arguments object available to their code. Depending upon the
    characteristics of the function definition, its arguments object is either an ordinary object
    or an arguments exotic object.


    Trailing comma in the arguments list

    Left-Hand-Side Expressions

    Arguments :
        ( )
        ( ArgumentList )
        ( ArgumentList , )

    ArgumentList :
        AssignmentExpression
        ... AssignmentExpression
        ArgumentList , AssignmentExpression
        ArgumentList , ... AssignmentExpression
---*/
var arr = [2, 3];
var callCount = 0;

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, null, [{
    key: "method",
    value: /*#__PURE__*/regeneratorRuntime.mark(function method() {
      var _args = arguments;
      return regeneratorRuntime.wrap(function method$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              assert.sameValue(_args.length, 4);
              assert.sameValue(_args[0], 42);
              assert.sameValue(_args[1], 1);
              assert.sameValue(_args[2], 2);
              assert.sameValue(_args[3], 3);
              callCount = callCount + 1;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, method);
    })
  }]);

  return C;
}();

C.method.apply(C, [42].concat([1], arr)).next(); // Stores a reference `ref` for case evaluation

var ref = C.method;
assert.sameValue(callCount, 1, 'method invoked exactly once');
// This file was procedurally generated from the following sources:
// - src/arguments/args-trailing-comma-spread-operator.case
// - src/arguments/default/gen-func-expr.template

/*---
description: A trailing comma should not increase the arguments.length, using spread args (generator function expression)
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
var callCount = 0; // Stores a reference `ref` for case evaluation

var ref;
ref = /*#__PURE__*/regeneratorRuntime.mark(function ref() {
  var _args = arguments;
  return regeneratorRuntime.wrap(function ref$(_context) {
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
  }, ref);
});
ref.apply(void 0, [42].concat([1], arr)).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');
var _marked = /*#__PURE__*/regeneratorRuntime.mark(ref);

// This file was procedurally generated from the following sources:
// - src/arguments/args-trailing-comma-multiple.case
// - src/arguments/default/gen-func-decl.template

/*---
description: A trailing comma should not increase the arguments.length, using multiple args (generator function declaration)
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
var callCount = 0; // Stores a reference `ref` for case evaluation

function ref() {
  var _args = arguments;
  return regeneratorRuntime.wrap(function ref$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          assert.sameValue(_args.length, 2);
          assert.sameValue(_args[0], 42);
          assert.sameValue(_args[1], 'TC39');
          callCount = callCount + 1;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

ref(42, 'TC39').next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');
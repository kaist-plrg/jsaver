// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-id-iter-val-array-prototype.case
// - src/dstr-binding/default/for-let.template

/*---
description: Array destructuring uses overriden Array.prototype[Symbol.iterator] (for statement)
esid: sec-for-statement-runtime-semantics-labelledevaluation
features: [Symbol.iterator, generators, destructuring-binding]
flags: [generated]
info: |
    IterationStatement :
        for ( LexicalDeclaration Expressionopt ; Expressionopt ) Statement

    [...]
    7. Let forDcl be the result of evaluating LexicalDeclaration.
    [...]

    LexicalDeclaration : LetOrConst BindingList ;

    1. Let next be the result of evaluating BindingList.
    2. ReturnIfAbrupt(next).
    3. Return NormalCompletion(empty).

    BindingList : BindingList , LexicalBinding

    1. Let next be the result of evaluating BindingList.
    2. ReturnIfAbrupt(next).
    3. Return the result of evaluating LexicalBinding.

    LexicalBinding : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let value be GetValue(rhs).
    3. ReturnIfAbrupt(value).
    4. Let env be the running execution context’s LexicalEnvironment.
    5. Return the result of performing BindingInitialization for BindingPattern
       using value and env as the arguments.

    Runtime Semantics: IteratorBindingInitialization

    SingleNameBinding : BindingIdentifier Initializer_opt

    1. Let bindingId be StringValue of BindingIdentifier.
    2. Let lhs be ? ResolveBinding(bindingId, environment).
    3. If iteratorRecord.[[Done]] is false, then
        a. Let next be IteratorStep(iteratorRecord).
        b. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
        c. ReturnIfAbrupt(next).
        d. If next is false, set iteratorRecord.[[Done]] to true.
        e. Else,
            i. Let v be IteratorValue(next).
            ii. If v is an abrupt completion, set iteratorRecord.[[Done]] to true.
            iii. ReturnIfAbrupt(v).
    [...]
    7. Return InitializeReferencedBinding(lhs, v).

---*/
Array.prototype[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(this.length > 0)) {
            _context.next = 3;
            break;
          }

          _context.next = 3;
          return this[0];

        case 3:
          if (!(this.length > 1)) {
            _context.next = 6;
            break;
          }

          _context.next = 6;
          return this[1];

        case 6:
          if (!(this.length > 2)) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return 42;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
});
var iterCount = 0;

for (var x = 1, y = 2, z = 3; iterCount < 1;) {
  assert.sameValue(x, 1);
  assert.sameValue(y, 2);
  assert.sameValue(z, 42);
  iterCount += 1;
}

assert.sameValue(iterCount, 1, 'Iteration occurred as expected');
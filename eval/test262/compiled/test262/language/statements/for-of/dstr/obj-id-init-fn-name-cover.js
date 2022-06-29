// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-id-init-fn-name-cover.case
// - src/dstr-assignment/default/for-of.template

/*---
description: Assignment of function `name` attribute (CoverParenthesizedExpression) (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    IterationStatement :
      for ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    4. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]

    AssignmentProperty : IdentifierReference Initializeropt
    [...] 6. If Initializeropt is present and v is undefined, then
       [...]
       d. If IsAnonymousFunctionDefinition(Initializer) is true, then
          i. Let hasNameProperty be HasOwnProperty(v, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(v, P).

---*/
var xCover, cover;
var counter = 0;

for (var _i = 0, _arr = [{}]; _i < _arr.length; _i++) {
  var _arr$_i = _arr[_i];
  var _arr$_i$xCover = _arr$_i.xCover;
  xCover = _arr$_i$xCover === void 0 ? (0, function () {}) : _arr$_i$xCover;
  var _arr$_i$cover = _arr$_i.cover;
  cover = _arr$_i$cover === void 0 ? function () {} : _arr$_i$cover;
  assert.notSameValue(xCover.name, 'xCover');
  verifyProperty(cover, 'name', {
    enumerable: false,
    writable: false,
    configurable: true,
    value: 'cover'
  });
  counter += 1;
}

assert.sameValue(counter, 1);
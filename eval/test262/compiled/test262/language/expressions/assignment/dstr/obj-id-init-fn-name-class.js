var _vals, _vals$xCls, _vals$cls, _vals$xCls2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-id-init-fn-name-class.case
// - src/dstr-assignment/default/assignment-expr.template

/*---
description: Assignment of function `name` attribute (ClassExpression) (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [class, destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.

    AssignmentProperty : IdentifierReference Initializeropt
    [...] 6. If Initializeropt is present and v is undefined, then
       [...]
       d. If IsAnonymousFunctionDefinition(Initializer) is true, then
          i. Let hasNameProperty be HasOwnProperty(v, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(v, P).

---*/
var xCls, cls, xCls2;
var result;
var vals = {};
result = (_vals = vals, _vals$xCls = _vals.xCls, xCls = _vals$xCls === void 0 ? /*#__PURE__*/_createClass(function x() {
  _classCallCheck(this, x);
}) : _vals$xCls, _vals$cls = _vals.cls, cls = _vals$cls === void 0 ? /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  return _createClass(_class);
}() : _vals$cls, _vals$xCls2 = _vals.xCls2, xCls2 = _vals$xCls2 === void 0 ? /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, null, [{
    key: "name",
    value: function name() {}
  }]);

  return _class2;
}() : _vals$xCls2, _vals);
assert.notSameValue(xCls.name, 'xCls');
assert.notSameValue(xCls2.name, 'xCls2');
verifyProperty(cls, 'name', {
  enumerable: false,
  writable: false,
  configurable: true,
  value: 'cls'
});
assert.sameValue(result, vals);
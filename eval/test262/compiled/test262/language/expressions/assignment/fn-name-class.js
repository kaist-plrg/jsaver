function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 12.14.4
description: Assignment of function `name` attribute (ClassExpression)
info: |
    AssignmentExpression[In, Yield] :
        LeftHandSideExpression[?Yield] = AssignmentExpression[?In, ?Yield]

    1. If LeftHandSideExpression is neither an ObjectLiteral nor an
       ArrayLiteral, then
       [...]
       e. If IsAnonymousFunctionDefinition(AssignmentExpression) and
          IsIdentifierRef of LeftHandSideExpression are both true, then

          i. Let hasNameProperty be HasOwnProperty(rval, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(rval,
               GetReferencedName(lref)).
includes: [propertyHelper.js]
features: [class]
---*/
var xCls, cls, xCls2;
xCls = /*#__PURE__*/_createClass(function x() {
  _classCallCheck(this, x);
});
cls = /*#__PURE__*/_createClass(function cls() {
  _classCallCheck(this, cls);
});

xCls2 = /*#__PURE__*/function () {
  function xCls2() {
    _classCallCheck(this, xCls2);
  }

  _createClass(xCls2, null, [{
    key: "name",
    value: function name() {}
  }]);

  return xCls2;
}();

assert.notSameValue(xCls.name, 'xCls');
assert.notSameValue(xCls2.name, 'xCls2');
assert.sameValue(cls.name, 'cls');
verifyNotEnumerable(cls, 'name');
verifyNotWritable(cls, 'name');
verifyConfigurable(cls, 'name');
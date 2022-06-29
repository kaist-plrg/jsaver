var _o,
    _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This file was procedurally generated from the following sources:
// - src/assignment-target-type/memberexpression-expression.case
// - src/assignment-target-type/simple/complex/default.template

/*---
description: Static Semantics AssignmentTargetType, Return simple (Simple Direct assignment)
flags: [generated]
info: |
    MemberExpression [ Expression ]
    Static Semantics AssignmentTargetType, Return simple

---*/
var v = 'v';
var o = (_o = {}, _defineProperty(_o, v, 1), _defineProperty(_o, "f", function f() {}), _o);

var f = function f() {
  _newArrowCheck(this, _this);

  return o;
}.bind(this);

o[v] = 1;
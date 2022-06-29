function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.2.16
description: >
    Runtime Semantics: Evaluation

    new.target

    ...
    4. Let closure be FunctionCreate(Arrow, parameters, ConciseBody, scope, strict).
    ...

    The non-normative note elaborates on the "scope" argument:

    An ArrowFunction does not define local bindings for arguments, super, this, or new.target. Any reference to arguments, super, or this within an ArrowFunction must resolve to a binding in a lexically enclosing environment. Typically this will be the Function Environment of an immediately enclosing function. Even though an ArrowFunction may contain references to super, the function object created in step 4 is not made into a method by performing MakeMethod. An ArrowFunction that references super is always contained within a non-ArrowFunction and the necessary state to implement super is accessible via the scope that is captured by the function object of the ArrowFunction.
features: [arrow-function, new.target]
---*/
function F() {
  var _newtarget = this instanceof F ? this.constructor : void 0,
      _this = this;

  this.af = function (_) {
    _newArrowCheck(this, _this);

    if (_newtarget) {
      return 1;
    }

    return 2;
  }.bind(this);
}

var f = new F();
assert.sameValue(f.af(), 1);
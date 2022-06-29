var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2015 Caitlin Potter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Functions created using ArrowFunction syntactic form do not have
    own properties "caller" or "arguments", but inherit them from
    %FunctionPrototype%.
es6id: 16.1
---*/
var arrowFn = function arrowFn() {
  _newArrowCheck(this, _this);
}.bind(this);

assert.sameValue(arrowFn.hasOwnProperty('caller'), false, 'Functions created using ArrowFunction syntactic form do not have own property "caller"');
assert.sameValue(arrowFn.hasOwnProperty('arguments'), false, 'Functions created using ArrowFunction syntactic form do not have own property "arguments"');
assert["throws"](TypeError, function () {
  return arrowFn.caller;
});
assert["throws"](TypeError, function () {
  arrowFn.caller = {};
});
assert["throws"](TypeError, function () {
  return arrowFn.arguments;
});
assert["throws"](TypeError, function () {
  arrowFn.arguments = {};
});
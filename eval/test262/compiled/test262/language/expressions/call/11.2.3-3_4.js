// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.2.3-3_4
description: >
    Call arguments are evaluated before the check is made to see if
    the object is actually callable (property)
---*/
var fooCalled = false;

function foo() {
  fooCalled = true;
}

var o = {};
Object.defineProperty(o, "bar", {
  get: function get() {
    this.barGetter = true;
    return 42;
  },
  set: function set(x) {
    this.barSetter = true;
  }
});
assert["throws"](TypeError, function () {
  o.bar(foo());
  $ERROR("o.bar does not exist!");
});
assert.sameValue(fooCalled, true, 'fooCalled');
assert.sameValue(o.barGetter, true, 'o.barGetter');
assert.sameValue(o.barSetter, undefined, 'o.barSetter');
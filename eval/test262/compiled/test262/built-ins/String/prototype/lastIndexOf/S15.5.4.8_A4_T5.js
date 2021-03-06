// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    when String.prototype.lastIndexOf(searchString, position) is called first Call ToString, giving it the this value as its argument.
    Then Call ToString(searchString) and Call ToNumber(position)
es5id: 15.5.4.8_A4_T5
description: >
    Override toString and valueOf functions, first and second valueOf
    throw exception
---*/
var __obj = {
  toString: function toString() {
    return {};
  },
  valueOf: function valueOf() {
    throw "intostr";
  }
};
var __obj2 = {
  valueOf: function valueOf() {
    throw "intointeger";
  }
};
__FACTORY.prototype.lastIndexOf = String.prototype.lastIndexOf;

var __instance = new __FACTORY(void 0); //////////////////////////////////////////////////////////////////////////////
//CHECK#1


try {
  var x = __instance.lastIndexOf(__obj, __obj2);

  $ERROR('#1: var x = __instance.lastIndexOf(__obj, __obj2) lead to throwing exception');
} catch (e) {
  if (e !== "intostr") {
    $ERROR('#1.1: Exception === "intostr". Actual: ' + e);
  }
} //
//////////////////////////////////////////////////////////////////////////////


function __FACTORY(value) {
  this.value = value;

  this.toString = function () {
    return new Number();
  };

  this.valueOf = function () {
    return this.value + "";
  };
}
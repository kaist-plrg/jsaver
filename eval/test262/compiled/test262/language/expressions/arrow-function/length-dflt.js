// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.1.6
description: >
  Default parameters' effect on function length
info: |
  Function length is counted by the non initialized parameters in the left.

  9.2.4 FunctionInitialize (F, kind, ParameterList, Body, Scope)

  [...]
  2. Let len be the ExpectedArgumentCount of ParameterList.
  3. Perform ! DefinePropertyOrThrow(F, "length", PropertyDescriptor{[[Value]]:
     len, [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true}).
  [...]

  FormalsList : FormalParameter

    1. If HasInitializer of FormalParameter is true return 0
    2. Return 1.

  FormalsList : FormalsList , FormalParameter

    1. Let count be the ExpectedArgumentCount of FormalsList.
    2. If HasInitializer of FormalsList is true or HasInitializer of
    FormalParameter is true, return count.
    3. Return count+1.
features: [default-parameters]
includes: [propertyHelper.js]
---*/
var f1 = function f1() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 42;
};

assert.sameValue(f1.length, 0, 'FormalsList: x = 42');
verifyNotEnumerable(f1, 'length');
verifyNotWritable(f1, 'length');
verifyConfigurable(f1, 'length');

var f2 = function f2() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 42;
  var y = arguments.length > 1 ? arguments[1] : undefined;
};

assert.sameValue(f2.length, 0, 'FormalsList: x = 42, y');
verifyNotEnumerable(f2, 'length');
verifyNotWritable(f2, 'length');
verifyConfigurable(f2, 'length');

var f3 = function f3(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 42;
};

assert.sameValue(f3.length, 1, 'FormalsList: x, y = 42');
verifyNotEnumerable(f3, 'length');
verifyNotWritable(f3, 'length');
verifyConfigurable(f3, 'length');

var f4 = function f4(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 42;
  var z = arguments.length > 2 ? arguments[2] : undefined;
};

assert.sameValue(f4.length, 1, 'FormalsList: x, y = 42, z');
verifyNotEnumerable(f4, 'length');
verifyNotWritable(f4, 'length');
verifyConfigurable(f4, 'length');
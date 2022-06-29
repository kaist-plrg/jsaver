function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
    Functions to help generate test cases for testing type coercion abstract
    operations like ToNumber.
defines:
  - testCoercibleToIndexZero
  - testCoercibleToIndexOne
  - testCoercibleToIndexFromIndex
  - testCoercibleToIntegerZero
  - testCoercibleToIntegerOne
  - testCoercibleToNumberZero
  - testCoercibleToNumberNan
  - testCoercibleToNumberOne
  - testCoercibleToIntegerFromInteger
  - testPrimitiveWrappers
  - testCoercibleToPrimitiveWithMethod
  - testNotCoercibleToIndex
  - testNotCoercibleToInteger
  - testNotCoercibleToNumber
  - testNotCoercibleToPrimitive
  - testCoercibleToString
  - testNotCoercibleToString
  - testCoercibleToBooleanTrue
  - testCoercibleToBooleanFalse
  - testCoercibleToBigIntZero
  - testCoercibleToBigIntOne
  - testCoercibleToBigIntFromBigInt
  - testNotCoercibleToBigInt
---*/
function testCoercibleToIndexZero(test) {
  testCoercibleToIntegerZero(test);
}

function testCoercibleToIndexOne(test) {
  testCoercibleToIntegerOne(test);
}

function testCoercibleToIndexFromIndex(nominalIndex, test) {
  assert(Number.isInteger(nominalIndex));
  assert(0 <= nominalIndex && nominalIndex <= Math.pow(2, 53) - 1);
  testCoercibleToIntegerFromInteger(nominalIndex, test);
}

function testCoercibleToIntegerZero(test) {
  testCoercibleToNumberZero(test);
  testCoercibleToIntegerFromInteger(0, test); // NaN -> +0

  testCoercibleToNumberNan(test); // When toString() returns a string that parses to NaN:

  test({});
  test([]);
}

function testCoercibleToIntegerOne(test) {
  testCoercibleToNumberOne(test);
  testCoercibleToIntegerFromInteger(1, test); // When toString() returns "1"

  test([1]);
  test(["1"]);
}

function testCoercibleToNumberZero(test) {
  function testPrimitiveValue(value) {
    test(value); // ToPrimitive

    testPrimitiveWrappers(value, "number", test);
  }

  testPrimitiveValue(null);
  testPrimitiveValue(false);
  testPrimitiveValue(0);
  testPrimitiveValue("0");
}

function testCoercibleToNumberNan(test) {
  function testPrimitiveValue(value) {
    test(value); // ToPrimitive

    testPrimitiveWrappers(value, "number", test);
  }

  testPrimitiveValue(undefined);
  testPrimitiveValue(NaN);
  testPrimitiveValue("");
  testPrimitiveValue("foo");
  testPrimitiveValue("true");
}

function testCoercibleToNumberOne(test) {
  function testPrimitiveValue(value) {
    test(value); // ToPrimitive

    testPrimitiveWrappers(value, "number", test);
  }

  testPrimitiveValue(true);
  testPrimitiveValue(1);
  testPrimitiveValue("1");
}

function testCoercibleToIntegerFromInteger(nominalInteger, test) {
  assert(Number.isInteger(nominalInteger));

  function testPrimitiveValue(value) {
    test(value); // ToPrimitive

    testPrimitiveWrappers(value, "number", test); // Non-primitive values that coerce to the nominal integer:
    // toString() returns a string that parsers to a primitive value.

    test([value]);
  }

  function testPrimitiveNumber(number) {
    testPrimitiveValue(number); // ToNumber: String -> Number

    testPrimitiveValue(number.toString());
  }

  testPrimitiveNumber(nominalInteger); // ToInteger: floor(abs(number))

  if (nominalInteger >= 0) {
    testPrimitiveNumber(nominalInteger + 0.9);
  }

  if (nominalInteger <= 0) {
    testPrimitiveNumber(nominalInteger - 0.9);
  }
}

function testPrimitiveWrappers(primitiveValue, hint, test) {
  if (primitiveValue != null) {
    // null and undefined result in {} rather than a proper wrapper,
    // so skip this case for those values.
    test(Object(primitiveValue));
  }

  testCoercibleToPrimitiveWithMethod(hint, function () {
    return primitiveValue;
  }, test);
}

function testCoercibleToPrimitiveWithMethod(hint, method, test) {
  var _test, _test2, _test4, _test5, _test6, _test7, _test8, _test9, _test10;

  var methodNames;

  if (hint === "number") {
    methodNames = ["valueOf", "toString"];
  } else if (hint === "string") {
    methodNames = ["toString", "valueOf"];
  } else {
    throw new Test262Error();
  } // precedence order


  test((_test = {}, _defineProperty(_test, Symbol.toPrimitive, method), _defineProperty(_test, methodNames[0], function () {
    throw new Test262Error();
  }), _defineProperty(_test, methodNames[1], function () {
    throw new Test262Error();
  }), _test));
  test((_test2 = {}, _defineProperty(_test2, methodNames[0], method), _defineProperty(_test2, methodNames[1], function () {
    throw new Test262Error();
  }), _test2));

  if (hint === "number") {
    // The default valueOf returns an object, which is unsuitable.
    // The default toString returns a String, which is suitable.
    // Therefore this test only works for valueOf falling back to toString.
    test(_defineProperty({}, methodNames[1], method));
  } // GetMethod: if func is undefined or null, return undefined.


  test((_test4 = {}, _defineProperty(_test4, Symbol.toPrimitive, undefined), _defineProperty(_test4, methodNames[0], method), _defineProperty(_test4, methodNames[1], method), _test4));
  test((_test5 = {}, _defineProperty(_test5, Symbol.toPrimitive, null), _defineProperty(_test5, methodNames[0], method), _defineProperty(_test5, methodNames[1], method), _test5)); // if methodNames[0] is not callable, fallback to methodNames[1]

  test((_test6 = {}, _defineProperty(_test6, methodNames[0], null), _defineProperty(_test6, methodNames[1], method), _test6));
  test((_test7 = {}, _defineProperty(_test7, methodNames[0], 1), _defineProperty(_test7, methodNames[1], method), _test7));
  test((_test8 = {}, _defineProperty(_test8, methodNames[0], {}), _defineProperty(_test8, methodNames[1], method), _test8)); // if methodNames[0] returns an object, fallback to methodNames[1]

  test((_test9 = {}, _defineProperty(_test9, methodNames[0], function () {
    return {};
  }), _defineProperty(_test9, methodNames[1], method), _test9));
  test((_test10 = {}, _defineProperty(_test10, methodNames[0], function () {
    return Object(1);
  }), _defineProperty(_test10, methodNames[1], method), _test10));
}

function testNotCoercibleToIndex(test) {
  function testPrimitiveValue(value) {
    test(RangeError, value); // ToPrimitive

    testPrimitiveWrappers(value, "number", function (value) {
      test(RangeError, value);
    });
  } // Let integerIndex be ? ToInteger(value).


  testNotCoercibleToInteger(test); // If integerIndex < 0, throw a RangeError exception.

  testPrimitiveValue(-1);
  testPrimitiveValue(-2.5);
  testPrimitiveValue("-2.5");
  testPrimitiveValue(-Infinity); // Let index be ! ToLength(integerIndex).
  // If SameValueZero(integerIndex, index) is false, throw a RangeError exception.

  testPrimitiveValue(Math.pow(2, 53));
  testPrimitiveValue(Infinity);
}

function testNotCoercibleToInteger(test) {
  // ToInteger only throws from ToNumber.
  testNotCoercibleToNumber(test);
}

function testNotCoercibleToNumber(test) {
  function testPrimitiveValue(value) {
    test(TypeError, value); // ToPrimitive

    testPrimitiveWrappers(value, "number", function (value) {
      test(TypeError, value);
    });
  } // ToNumber: Symbol -> TypeError


  testPrimitiveValue(Symbol("1"));

  if (typeof BigInt !== "undefined") {
    // ToNumber: BigInt -> TypeError
    testPrimitiveValue(BigInt(0));
  } // ToPrimitive


  testNotCoercibleToPrimitive("number", test);
}

function testNotCoercibleToPrimitive(hint, test) {
  function MyError() {} // ToPrimitive: input[@@toPrimitive] is not callable (and non-null)


  test(TypeError, _defineProperty({}, Symbol.toPrimitive, 1));
  test(TypeError, _defineProperty({}, Symbol.toPrimitive, {})); // ToPrimitive: input[@@toPrimitive] returns object

  test(TypeError, _defineProperty({}, Symbol.toPrimitive, function () {
    return Object(1);
  }));
  test(TypeError, _defineProperty({}, Symbol.toPrimitive, function () {
    return {};
  })); // ToPrimitive: input[@@toPrimitive] throws

  test(MyError, _defineProperty({}, Symbol.toPrimitive, function () {
    throw new MyError();
  })); // OrdinaryToPrimitive: method throws

  testCoercibleToPrimitiveWithMethod(hint, function () {
    throw new MyError();
  }, function (value) {
    test(MyError, value);
  }); // OrdinaryToPrimitive: both methods are unsuitable

  function testUnsuitableMethod(method) {
    test(TypeError, {
      valueOf: method,
      toString: method
    });
  } // not callable:


  testUnsuitableMethod(null);
  testUnsuitableMethod(1);
  testUnsuitableMethod({}); // returns object:

  testUnsuitableMethod(function () {
    return Object(1);
  });
  testUnsuitableMethod(function () {
    return {};
  });
}

function testCoercibleToString(test) {
  function testPrimitiveValue(value, expectedString) {
    test(value, expectedString); // ToPrimitive

    testPrimitiveWrappers(value, "string", function (value) {
      test(value, expectedString);
    });
  }

  testPrimitiveValue(undefined, "undefined");
  testPrimitiveValue(null, "null");
  testPrimitiveValue(true, "true");
  testPrimitiveValue(false, "false");
  testPrimitiveValue(0, "0");
  testPrimitiveValue(-0, "0");
  testPrimitiveValue(Infinity, "Infinity");
  testPrimitiveValue(-Infinity, "-Infinity");
  testPrimitiveValue(123.456, "123.456");
  testPrimitiveValue(-123.456, "-123.456");
  testPrimitiveValue("", "");
  testPrimitiveValue("foo", "foo");

  if (typeof BigInt !== "undefined") {
    // BigInt -> TypeError
    testPrimitiveValue(BigInt(0), "0");
  } // toString of a few objects


  test([], "");
  test(["foo", "bar"], "foo,bar");
  test({}, "[object Object]");
}

function testNotCoercibleToString(test) {
  function testPrimitiveValue(value) {
    test(TypeError, value); // ToPrimitive

    testPrimitiveWrappers(value, "string", function (value) {
      test(TypeError, value);
    });
  } // Symbol -> TypeError


  testPrimitiveValue(Symbol("1")); // ToPrimitive

  testNotCoercibleToPrimitive("string", test);
}

function testCoercibleToBooleanTrue(test) {
  test(true);
  test(1);
  test("string");
  test(Symbol("1"));
  test({});
}

function testCoercibleToBooleanFalse(test) {
  test(undefined);
  test(null);
  test(false);
  test(0);
  test(-0);
  test(NaN);
  test("");
}

function testCoercibleToBigIntZero(test) {
  function testPrimitiveValue(value) {
    test(value); // ToPrimitive

    testPrimitiveWrappers(value, "number", test);
  }

  testCoercibleToBigIntFromBigInt(BigInt(0), test);
  testPrimitiveValue(-BigInt(0));
  testPrimitiveValue("-0");
  testPrimitiveValue(false);
  testPrimitiveValue("");
  testPrimitiveValue("   "); // toString() returns ""

  test([]); // toString() returns "0"

  test([0]);
}

function testCoercibleToBigIntOne(test) {
  function testPrimitiveValue(value) {
    test(value); // ToPrimitive

    testPrimitiveWrappers(value, "number", test);
  }

  testCoercibleToBigIntFromBigInt(BigInt(1), test);
  testPrimitiveValue(true); // toString() returns "1"

  test([1]);
}

function testCoercibleToBigIntFromBigInt(nominalBigInt, test) {
  function testPrimitiveValue(value) {
    test(value); // ToPrimitive

    testPrimitiveWrappers(value, "number", test);
  }

  testPrimitiveValue(nominalBigInt);
  testPrimitiveValue(nominalBigInt.toString());
  testPrimitiveValue("0b" + nominalBigInt.toString(2));
  testPrimitiveValue("0o" + nominalBigInt.toString(8));
  testPrimitiveValue("0x" + nominalBigInt.toString(16));
  testPrimitiveValue("   " + nominalBigInt.toString() + "   "); // toString() returns the decimal string representation

  test([nominalBigInt]);
  test([nominalBigInt.toString()]);
}

function testNotCoercibleToBigInt(test) {
  function testPrimitiveValue(error, value) {
    test(error, value); // ToPrimitive

    testPrimitiveWrappers(value, "number", function (value) {
      test(error, value);
    });
  } // Undefined, Null, Number, Symbol -> TypeError


  testPrimitiveValue(TypeError, undefined);
  testPrimitiveValue(TypeError, null);
  testPrimitiveValue(TypeError, 0);
  testPrimitiveValue(TypeError, NaN);
  testPrimitiveValue(TypeError, Infinity);
  testPrimitiveValue(TypeError, Symbol("1")); // when a String parses to NaN -> SyntaxError

  function testStringValue(string) {
    testPrimitiveValue(SyntaxError, string);
    testPrimitiveValue(SyntaxError, "   " + string);
    testPrimitiveValue(SyntaxError, string + "   ");
    testPrimitiveValue(SyntaxError, "   " + string + "   ");
  }

  testStringValue("a");
  testStringValue("0b2");
  testStringValue("0o8");
  testStringValue("0xg");
  testStringValue("1n");
}
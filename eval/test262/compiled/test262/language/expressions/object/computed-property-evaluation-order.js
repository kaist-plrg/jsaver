var _o;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object-initializer-runtime-semantics-propertydefinitionevaluation
description: >
    Evaluation of PropertyDefinitionList occurs in order, and each
    PropertyDefinition's PropertyName is evaluated before its
    AssignmentExpression.
---*/
var counter = 0;
var o = (_o = {}, _defineProperty(_o, ++counter, ++counter), _defineProperty(_o, ++counter, ++counter), _defineProperty(_o, ++counter, ++counter), _o);
var keys = Object.getOwnPropertyNames(o);
assert.sameValue(keys.length, 3, '3 PropertyDefinitions should result in 3 properties');
assert.sameValue(keys[0], '1');
assert.sameValue(o[keys[0]], 2);
assert.sameValue(keys[1], '3');
assert.sameValue(o[keys[1]], 4);
assert.sameValue(keys[2], '5');
assert.sameValue(o[keys[2]], 6);
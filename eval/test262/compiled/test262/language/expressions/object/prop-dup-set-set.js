var _foo, _foo$foo, _mutatorMap;

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } if (Object.getOwnPropertySymbols) { var objectSymbols = Object.getOwnPropertySymbols(descs); for (var i = 0; i < objectSymbols.length; i++) { var sym = objectSymbols[i]; var desc = descs[sym]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, sym, desc); } } return obj; }

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.5_4-4-d-2
description: Object literal - No SyntaxError for duplicate property name (set,set)
---*/
void (_foo$foo = {
  set foo(arg) {}

}, _foo = "foo", _mutatorMap = {}, _mutatorMap[_foo] = _mutatorMap[_foo] || {}, _mutatorMap[_foo].set = function (arg1) {}, _defineEnumerableProperties(_foo$foo, _mutatorMap), _foo$foo);
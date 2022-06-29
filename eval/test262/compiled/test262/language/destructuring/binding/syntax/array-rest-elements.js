function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.3.3
description: >
  Array Binding Pattern with Rest Element
info: |
  Destructuring Binding Patterns - Syntax

  ArrayBindingPattern[Yield] :
    [ Elisionopt BindingRestElement[?Yield]opt ]
    [ BindingElementList[?Yield] ]
    [ BindingElementList[?Yield] , Elisionopt BindingRestElement[?Yield]opt ]

  BindingRestElement[Yield] :
    ... BindingIdentifier[?Yield]
features: [destructuring-binding]
---*/
function fn1(_ref) {
  var _ref2 = _toArray(_ref),
      args = _ref2.slice(0);
}

function fn2(_ref3) {
  var _ref4 = _toArray(_ref3),
      args = _ref4.slice(7);
}

function fn3(_ref5) {
  var _ref6 = _toArray(_ref5),
      x = _ref6[0],
      y = _ref6[1].y,
      z = _ref6.slice(2);
}

function fn4(_ref7) {
  var _ref8 = _toArray(_ref7),
      x = _ref8[1],
      y = _ref8[2].y,
      z = _ref8.slice(4);
}

function fn5(_ref9) {
  var _ref9$x = _toArray(_ref9.x),
      y = _ref9$x.slice(0);
}
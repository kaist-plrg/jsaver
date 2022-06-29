function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-destructuring-binding-patterns
description: >
  The rest parameter can be a binding pattern.
info: |
  Destructuring Binding Patterns - Syntax

  BindingRestElement[Yield]:
    ...BindingPattern[?Yield]
---*/
function empty() {
  for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {
    _ref[_key] = arguments[_key];
  }
}

function emptyWithArray() {
  for (var _len2 = arguments.length, _ref2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    _ref2[_key2] = arguments[_key2];
  }

  var _ref2$ = _toArray(_ref2[0]);
}

function emptyWithObject() {
  for (var _len3 = arguments.length, _ref3 = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    _ref3[_key3] = arguments[_key3];
  }

  _objectDestructuringEmpty(_ref3[0]);
}

function emptyWithRest() {
  for (var _len4 = arguments.length, _ref4 = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    _ref4[_key4] = arguments[_key4];
  }

  var _ref4$slice = _toArray(_ref4.slice(0));
}

function emptyWithLeading(x) {
  for (var _len5 = arguments.length, _ref5 = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    _ref5[_key5 - 1] = arguments[_key5];
  }
}

function singleElement() {
  for (var _len6 = arguments.length, _ref6 = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    _ref6[_key6] = arguments[_key6];
  }

  var a = _ref6[0];
}

function singleElementWithInitializer() {
  for (var _len7 = arguments.length, _ref7 = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    _ref7[_key7] = arguments[_key7];
  }

  var _ref7$ = _ref7[0],
      a = _ref7$ === void 0 ? 0 : _ref7$;
}

function singleElementWithArray() {
  for (var _len8 = arguments.length, _ref8 = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    _ref8[_key8] = arguments[_key8];
  }

  var _ref8$ = _slicedToArray(_ref8[0], 1),
      a = _ref8$[0];
}

function singleElementWithObject() {
  for (var _len9 = arguments.length, _ref9 = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    _ref9[_key9] = arguments[_key9];
  }

  var q = _ref9[0].p;
}

function singleElementWithRest() {
  for (var _len10 = arguments.length, _ref10 = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    _ref10[_key10] = arguments[_key10];
  }

  var a = _ref10.slice(0);
}

function singleElementWithLeading(x) {
  for (var _len11 = arguments.length, _ref11 = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
    _ref11[_key11 - 1] = arguments[_key11];
  }

  var a = _ref11[0];
}

function multiElement() {
  for (var _len12 = arguments.length, _ref12 = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    _ref12[_key12] = arguments[_key12];
  }

  var a = _ref12[0],
      b = _ref12[1],
      c = _ref12[2];
}

function multiElementWithInitializer() {
  for (var _len13 = arguments.length, _ref13 = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    _ref13[_key13] = arguments[_key13];
  }

  var _ref13$ = _ref13[0],
      a = _ref13$ === void 0 ? 0 : _ref13$,
      b = _ref13[1],
      _ref13$2 = _ref13[2],
      c = _ref13$2 === void 0 ? 1 : _ref13$2;
}

function multiElementWithArray() {
  for (var _len14 = arguments.length, _ref14 = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    _ref14[_key14] = arguments[_key14];
  }

  var _ref14$ = _slicedToArray(_ref14[0], 1),
      a = _ref14$[0],
      b = _ref14[1],
      _ref14$2 = _slicedToArray(_ref14[2], 1),
      c = _ref14$2[0];
}

function multiElementWithObject() {
  for (var _len15 = arguments.length, _ref15 = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    _ref15[_key15] = arguments[_key15];
  }

  var q = _ref15[0].p,
      r = _ref15[1].r,
      _ref15$2$s = _ref15[2].s,
      s = _ref15$2$s === void 0 ? 0 : _ref15$2$s;
}

function multiElementWithRest() {
  for (var _len16 = arguments.length, _ref16 = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    _ref16[_key16] = arguments[_key16];
  }

  var a = _ref16[0],
      b = _ref16[1],
      c = _ref16.slice(2);
}

function multiElementWithLeading(x, y) {
  for (var _len17 = arguments.length, _ref17 = new Array(_len17 > 2 ? _len17 - 2 : 0), _key17 = 2; _key17 < _len17; _key17++) {
    _ref17[_key17 - 2] = arguments[_key17];
  }

  var a = _ref17[0],
      b = _ref17[1],
      c = _ref17[2];
}
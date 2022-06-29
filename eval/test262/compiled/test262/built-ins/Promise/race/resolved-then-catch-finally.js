var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.race
description: >
  Resolution the first resolved promise
info: |
  PerformPromiseRace

  Repeat,
    Let next be IteratorStep(iteratorRecord).
    If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
    ReturnIfAbrupt(next).
    If next is false, then
      Set iteratorRecord.[[Done]] to true.
      Return resultCapability.[[Promise]].
    Let nextValue be IteratorValue(next).
    If nextValue is an abrupt completion, set iteratorRecord.[[Done]] to true.
    ReturnIfAbrupt(nextValue).
    Let nextPromise be ? Call(promiseResolve, constructor, « nextValue »).
    Perform ? Invoke(nextPromise, "then", « resultCapability.[[Resolve]], resultCapability.[[Reject]] »).

flags: [async]
---*/
var a = Promise.reject('a')["catch"](function (v) {
  _newArrowCheck(this, _this);

  return v;
}.bind(this));
var b = Promise.resolve('b').then(function (v) {
  _newArrowCheck(this, _this);

  throw v;
}.bind(this));
var c = Promise.reject('c').then(function (v) {
  _newArrowCheck(this, _this);

  throw v;
}.bind(this));
var d = Promise.resolve('d')["finally"](function (v) {
  _newArrowCheck(this, _this);

  return v;
}.bind(this));
var e = Promise.reject('e')["finally"](function (v) {
  _newArrowCheck(this, _this);

  return v;
}.bind(this));
var f = Promise.resolve('f')["finally"](function (v) {
  _newArrowCheck(this, _this);

  throw v;
}.bind(this));
var g = Promise.reject('g')["finally"](function (v) {
  _newArrowCheck(this, _this);

  throw v;
}.bind(this));
var h = Promise.reject('h').then(function (v) {
  _newArrowCheck(this, _this);

  return v;
}.bind(this), function () {
  _newArrowCheck(this, _this);

  return 'j';
}.bind(this));
var i = Promise.resolve('i').then(function (v) {
  _newArrowCheck(this, _this);

  return v;
}.bind(this));
Promise.race([a, b, c, d, e, f, g, h, i]).then(function (winner) {
  _newArrowCheck(this, _this);

  assert.sameValue(winner, 'a');
}.bind(this)).then($DONE, $DONE);
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-meta-properties-runtime-semantics-evaluation
es6id: 12.3.8.1
description: NewTarget is composed of three distinct tokens
features: [new.target]
---*/
var newTarget = null;

var withSpaces = function _target() {
  newTarget = this instanceof _target ? this.constructor : void 0;
};

withSpaces();
assert.sameValue(newTarget, undefined, 'tokens seperated by whitespace');
new withSpaces();
assert.sameValue(newTarget, withSpaces, 'tokens separateed by whitespace');
newTarget = null;

var withLineBreaks = function _target2() {
  newTarget = this instanceof _target2 ? this.constructor : void 0;
};

withLineBreaks();
assert.sameValue(newTarget, undefined, 'tokens seperated by line breaks');
new withLineBreaks();
assert.sameValue(newTarget, withLineBreaks, 'tokens seperated by line breaks');

var withSLDC = function _target3() {
  newTarget = this instanceof _target3 ? this.constructor : void 0;
};

withSLDC();
assert.sameValue(newTarget, undefined, 'tokens separated by SingleLineDelimitedComments');
new withSLDC();
assert.sameValue(newTarget, withSLDC, 'tokens separated by SingleLineDelimitedComments');

var withMLC = function _target4() {
  newTarget = this instanceof _target4 ? this.constructor : void 0;
};

withMLC();
assert.sameValue(newTarget, undefined, 'tokens separated by MultiLineComments');
new withMLC();
assert.sameValue(newTarget, withMLC, 'tokens separated by MultiLineComments');
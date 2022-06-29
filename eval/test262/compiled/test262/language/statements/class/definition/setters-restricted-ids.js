function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.5
description: >
    class setters 2
---*/
var x = 0;

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: "eval",
    set: function set(v) {
      x = v;
    }
  }, {
    key: "arguments",
    set: function set(v) {
      x = v;
    }
  }], [{
    key: "eval",
    set: function set(v) {
      x = v;
    }
  }, {
    key: "arguments",
    set: function set(v) {
      x = v;
    }
  }]);

  return C;
}();

;
new C().eval = 1;
assert.sameValue(x, 1, "The value of `x` is `1`");
new C().arguments = 2;
assert.sameValue(x, 2, "The value of `x` is `2`");
C.eval = 3;
assert.sameValue(x, 3, "The value of `x` is `3`");
C.arguments = 4;
assert.sameValue(x, 4, "The value of `x` is `4`");
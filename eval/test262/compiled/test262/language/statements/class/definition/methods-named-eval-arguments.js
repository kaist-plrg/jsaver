function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.5
description: >
    class methods 2
---*/
var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: "eval",
    value: function _eval() {
      return 1;
    }
  }, {
    key: "arguments",
    value: function _arguments() {
      return 2;
    }
  }], [{
    key: "eval",
    value: function _eval() {
      return 3;
    }
  }, {
    key: "arguments",
    value: function _arguments() {
      return 4;
    }
  }]);

  return C;
}();

;
assert.sameValue(new C().eval(), 1, "`new C().eval()` returns `1`");
assert.sameValue(new C().arguments(), 2, "`new C().arguments()` returns `2`");
assert.sameValue(C.eval(), 3, "`C.eval()` returns `3`");
assert.sameValue(C.arguments(), 4, "`C.arguments()` returns `4`");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-id-init-fn-name-class.case
// - src/dstr-binding/default/try.template

/*---
description: SingleNameBinding assigns `name` to "anonymous" classes (try statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding]
flags: [generated]
info: |
    Catch : catch ( CatchParameter ) Block

    [...]
    5. Let status be the result of performing BindingInitialization for
       CatchParameter passing thrownValue and catchEnv as arguments.
    [...]

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    6. If Initializer is present and v is undefined, then
       [...]
       d. If IsAnonymousFunctionDefinition(Initializer) is true, then
          i. Let hasNameProperty be HasOwnProperty(v, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(v,
               bindingId).
---*/
var ranCatch = false;

try {
  throw {};
} catch (_ref) {
  var _ref$cls = _ref.cls;
  var cls = _ref$cls === void 0 ? /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    return _createClass(_class);
  }() : _ref$cls;
  var _ref$xCls = _ref.xCls;
  var xCls = _ref$xCls === void 0 ? /*#__PURE__*/_createClass(function X() {
    _classCallCheck(this, X);
  }) : _ref$xCls;
  var _ref$xCls2 = _ref.xCls2;
  var xCls2 = _ref$xCls2 === void 0 ? /*#__PURE__*/function () {
    function _class2() {
      _classCallCheck(this, _class2);
    }

    _createClass(_class2, null, [{
      key: "name",
      value: function name() {}
    }]);

    return _class2;
  }() : _ref$xCls2;
  assert.sameValue(cls.name, 'cls');
  assert.notSameValue(xCls.name, 'xCls');
  assert.notSameValue(xCls2.name, 'xCls2');
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');
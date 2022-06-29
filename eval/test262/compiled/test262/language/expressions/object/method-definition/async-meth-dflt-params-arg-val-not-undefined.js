var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-params-arg-val-not-undefined.case
// - src/function-forms/default/async-meth.template

/*---
description: Use of initializer when argument value is not `undefined` (async method)
esid: sec-async-function-definitions
features: [default-parameters, async-functions]
flags: [generated, async]
info: |
    14.6 Async Function Definitions

    AsyncMethod :
     async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }


    14.1.19 Runtime Semantics: IteratorBindingInitialization

    FormalsList : FormalsList , FormalParameter

    [...]
    23. Let iteratorRecord be Record {[[Iterator]]:
        CreateListIterator(argumentsList), [[Done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        a. Perform ? IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]

---*/
var obj = {};
var falseCount = 0;
var stringCount = 0;
var nanCount = 0;
var zeroCount = 0;
var nullCount = 0;
var objCount = 0;
var callCount = 0;
var __obj = {
  method: function method() {
    var _arguments = arguments;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var aFalse, aString, aNaN, a0, aNull, aObj;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              aFalse = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : falseCount += 1;
              aString = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : stringCount += 1;
              aNaN = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : nanCount += 1;
              a0 = _arguments.length > 3 && _arguments[3] !== undefined ? _arguments[3] : zeroCount += 1;
              aNull = _arguments.length > 4 && _arguments[4] !== undefined ? _arguments[4] : nullCount += 1;
              aObj = _arguments.length > 5 && _arguments[5] !== undefined ? _arguments[5] : objCount += 1;
              assert.sameValue(aFalse, false);
              assert.sameValue(aString, '');
              assert.sameValue(aNaN, NaN);
              assert.sameValue(a0, 0);
              assert.sameValue(aNull, null);
              assert.sameValue(aObj, obj);
              callCount = callCount + 1;

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
}; // Stores a reference `ref` for case evaluation

var ref = __obj.method;
ref(false, '', NaN, 0, null, obj).then(function () {
  _newArrowCheck(this, _this);

  assert.sameValue(callCount, 1, 'async method invoked exactly once');
}.bind(this)).then($DONE, $DONE);
assert.sameValue(falseCount, 0, 'initializer not evaluated: false');
assert.sameValue(stringCount, 0, 'initializer not evaluated: string');
assert.sameValue(nanCount, 0, 'initializer not evaluated: NaN');
assert.sameValue(zeroCount, 0, 'initializer not evaluated: 0');
assert.sameValue(nullCount, 0, 'initializer not evaluated: null');
assert.sameValue(objCount, 0, 'initializer not evaluated: object');
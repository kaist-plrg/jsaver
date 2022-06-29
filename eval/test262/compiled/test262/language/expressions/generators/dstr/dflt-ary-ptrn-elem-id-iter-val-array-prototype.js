function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-id-iter-val-array-prototype.case
// - src/dstr-binding/default/gen-func-expr-dflt.template

/*---
description: Array destructuring uses overriden Array.prototype[Symbol.iterator] (generator function expression (default parameter))
esid: sec-generator-function-definitions-runtime-semantics-evaluation
features: [Symbol.iterator, generators, destructuring-binding, default-parameters]
flags: [generated]
info: |
    GeneratorExpression : function * ( FormalParameters ) { GeneratorBody }

        [...]
        3. Let closure be GeneratorFunctionCreate(Normal, FormalParameters,
           GeneratorBody, scope, strict).
        [...]

    9.2.1 [[Call]] ( thisArgument, argumentsList)

    [...]
    7. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
    [...]

    9.2.1.3 OrdinaryCallEvaluateBody ( F, argumentsList )

    1. Let status be FunctionDeclarationInstantiation(F, argumentsList).
    [...]

    9.2.12 FunctionDeclarationInstantiation(func, argumentsList)

    [...]
    23. Let iteratorRecord be Record {[[iterator]]:
        CreateListIterator(argumentsList), [[done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        b. Let formalStatus be IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]

    Runtime Semantics: IteratorBindingInitialization

    SingleNameBinding : BindingIdentifier Initializer_opt

    1. Let bindingId be StringValue of BindingIdentifier.
    2. Let lhs be ? ResolveBinding(bindingId, environment).
    3. If iteratorRecord.[[Done]] is false, then
        a. Let next be IteratorStep(iteratorRecord).
        b. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
        c. ReturnIfAbrupt(next).
        d. If next is false, set iteratorRecord.[[Done]] to true.
        e. Else,
            i. Let v be IteratorValue(next).
            ii. If v is an abrupt completion, set iteratorRecord.[[Done]] to true.
            iii. ReturnIfAbrupt(v).
    [...]
    7. Return InitializeReferencedBinding(lhs, v).

---*/
Array.prototype[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(this.length > 0)) {
            _context.next = 3;
            break;
          }

          _context.next = 3;
          return this[0];

        case 3:
          if (!(this.length > 1)) {
            _context.next = 6;
            break;
          }

          _context.next = 6;
          return this[1];

        case 6:
          if (!(this.length > 2)) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return 42;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
});
var callCount = 0;
var f;
f = /*#__PURE__*/regeneratorRuntime.mark(function f() {
  var _ref,
      _ref2,
      x,
      y,
      z,
      _args2 = arguments;

  return regeneratorRuntime.wrap(function f$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _ref = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : [1, 2, 3], _ref2 = _slicedToArray(_ref, 3), x = _ref2[0], y = _ref2[1], z = _ref2[2];
          assert.sameValue(x, 1);
          assert.sameValue(y, 2);
          assert.sameValue(z, 42);
          callCount = callCount + 1;

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, f);
});
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');
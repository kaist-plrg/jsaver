function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-id-init-skipped.case
// - src/dstr-binding/default/cls-decl-gen-meth-dflt.template

/*---
description: Destructuring initializer is not evaluated when value is not `undefined` (class expression method (default parameters))
esid: sec-class-definitions-runtime-semantics-evaluation
features: [generators, destructuring-binding, default-parameters]
flags: [generated]
info: |
    ClassDeclaration : class BindingIdentifier ClassTail

    1. Let className be StringValue of BindingIdentifier.
    2. Let value be the result of ClassDefinitionEvaluation of ClassTail with
       argument className.
    [...]

    14.5.14 Runtime Semantics: ClassDefinitionEvaluation

    21. For each ClassElement m in order from methods
        a. If IsStatic of m is false, then
           i. Let status be the result of performing
              PropertyDefinitionEvaluation for m with arguments proto and
              false.
        [...]

    14.4.13 Runtime Semantics: PropertyDefinitionEvaluation

    GeneratorMethod : * PropertyName ( StrictFormalParameters ) { GeneratorBody }

    1. Let propKey be the result of evaluating PropertyName.
    2. ReturnIfAbrupt(propKey).
    3. If the function code for this GeneratorMethod is strict mode code,
       let strict be true. Otherwise let strict be false.
    4. Let scope be the running execution context's LexicalEnvironment.
    5. Let closure be GeneratorFunctionCreate(Method,
       StrictFormalParameters, GeneratorBody, scope, strict).

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

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    6. If Initializer is present and v is undefined, then
       [...]
    7. If environment is undefined, return PutValue(lhs, v).
    8. Return InitializeReferencedBinding(lhs, v).
---*/
var initCount = 0;

function counter() {
  initCount += 1;
}

var callCount = 0;

var C = /*#__PURE__*/function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: "method",
    value: /*#__PURE__*/regeneratorRuntime.mark(function method() {
      var _ref,
          _ref2,
          _ref2$,
          w,
          _ref2$2,
          x,
          _ref2$3,
          y,
          _ref2$4,
          z,
          _args = arguments;

      return regeneratorRuntime.wrap(function method$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : [null, 0, false, ''], _ref2 = _slicedToArray(_ref, 4), _ref2$ = _ref2[0], w = _ref2$ === void 0 ? counter() : _ref2$, _ref2$2 = _ref2[1], x = _ref2$2 === void 0 ? counter() : _ref2$2, _ref2$3 = _ref2[2], y = _ref2$3 === void 0 ? counter() : _ref2$3, _ref2$4 = _ref2[3], z = _ref2$4 === void 0 ? counter() : _ref2$4;
              assert.sameValue(w, null);
              assert.sameValue(x, 0);
              assert.sameValue(y, false);
              assert.sameValue(z, '');
              assert.sameValue(initCount, 0);
              callCount = callCount + 1;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, method);
    })
  }]);

  return C;
}();

;
new C().method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');
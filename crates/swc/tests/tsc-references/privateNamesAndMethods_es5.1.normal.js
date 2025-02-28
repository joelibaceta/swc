// @target: esnext, es2022
// @lib: esnext, es2022
// @useDefineForClassFields: false
import _assert_this_initialized from "@swc/helpers/src/_assert_this_initialized.mjs";
import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _class_private_field_get from "@swc/helpers/src/_class_private_field_get.mjs";
import _class_private_field_init from "@swc/helpers/src/_class_private_field_init.mjs";
import _class_private_field_set from "@swc/helpers/src/_class_private_field_set.mjs";
import _class_private_field_update from "@swc/helpers/src/_class_private_field_update.mjs";
import _class_private_method_get from "@swc/helpers/src/_class_private_method_get.mjs";
import _class_private_method_init from "@swc/helpers/src/_class_private_method_init.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
import regeneratorRuntime from "regenerator-runtime";
var _foo = /*#__PURE__*/ new WeakSet(), _bar = /*#__PURE__*/ new WeakSet(), _baz = /*#__PURE__*/ new WeakSet(), __quux = /*#__PURE__*/ new WeakMap(), _quux = /*#__PURE__*/ new WeakMap();
var A = function A() {
    "use strict";
    _class_call_check(this, A);
    _class_private_method_init(this, _foo);
    _class_private_method_init(this, _bar);
    _class_private_method_init(this, _baz);
    _class_private_field_init(this, _quux, {
        get: get_quux,
        set: set_quux
    });
    _class_private_field_init(this, __quux, {
        writable: true,
        value: void 0
    });
    _class_private_method_get(this, _foo, foo).call(this, 30);
    _class_private_method_get(this, _bar, bar).call(this, 30);
    _class_private_method_get(this, _baz, baz).call(this, 30);
    _class_private_field_set(this, _quux, _class_private_field_get(this, _quux) + 1);
    _class_private_field_update(this, _quux).value++;
};
function foo(a) {}
function bar(a) {
    return _bar1.apply(this, arguments);
}
function _bar1() {
    _bar1 = _async_to_generator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee(a) {
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return _bar1.apply(this, arguments);
}
function baz(a) {
    return _baz1.apply(this, arguments);
}
function _baz1() {
    _baz1 = _wrap_async_generator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee(a) {
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.abrupt("return", 3);
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return _baz1.apply(this, arguments);
}
function get_quux() {
    return _class_private_field_get(this, __quux);
}
function set_quux(val) {
    _class_private_field_set(this, __quux, val);
}
var _foo1 = /*#__PURE__*/ new WeakSet();
var B = /*#__PURE__*/ function(A) {
    "use strict";
    _inherits(B, A);
    var _super = _create_super(B);
    function B() {
        _class_call_check(this, B);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _foo1);
        _class_private_method_get(_this, _foo1, foo1).call(_assert_this_initialized(_this), "str");
        return _this;
    }
    return B;
}(A);
function foo1(a) {}

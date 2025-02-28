// @target: es5
// @lib: esnext
// @filename: F1.ts
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import regeneratorRuntime from "regenerator-runtime";
var f1 = function() {
    var _ref = _wrap_async_generator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function f1() {
        return _ref.apply(this, arguments);
    };
}();
// @filename: F2.ts
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import regeneratorRuntime from "regenerator-runtime";
var f2 = function() {
    var _ref = _wrap_async_generator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var x;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return;
                case 2:
                    x = _ctx.sent;
                case 3:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function f2() {
        return _ref.apply(this, arguments);
    };
}();
// @filename: F3.ts
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import regeneratorRuntime from "regenerator-runtime";
var f3 = function() {
    var _ref = _wrap_async_generator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var x;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return 1;
                case 2:
                    x = _ctx.sent;
                case 3:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function f3() {
        return _ref.apply(this, arguments);
    };
}();
// @filename: F4.ts
import _async_generator_delegate from "@swc/helpers/src/_async_generator_delegate.mjs";
import _async_iterator from "@swc/helpers/src/_async_iterator.mjs";
import _await_async_generator from "@swc/helpers/src/_await_async_generator.mjs";
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import regeneratorRuntime from "regenerator-runtime";
var f4 = function() {
    var _ref = _wrap_async_generator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var x;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.delegateYield(_async_generator_delegate(_async_iterator([
                        1
                    ]), _await_async_generator), "t0", 1);
                case 1:
                    x = _ctx.t0;
                case 2:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function f4() {
        return _ref.apply(this, arguments);
    };
}();
// @filename: F5.ts
import _async_generator_delegate from "@swc/helpers/src/_async_generator_delegate.mjs";
import _async_iterator from "@swc/helpers/src/_async_iterator.mjs";
import _await_async_generator from "@swc/helpers/src/_await_async_generator.mjs";
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import regeneratorRuntime from "regenerator-runtime";
var f5 = function() {
    var _ref = _wrap_async_generator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var x;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.delegateYield(_async_generator_delegate(_async_iterator(_wrap_async_generator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return 1;
                                case 2:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))()), _await_async_generator), "t0", 1);
                case 1:
                    x = _ctx.t0;
                case 2:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function f5() {
        return _ref.apply(this, arguments);
    };
}();
// @filename: F6.ts
import _await_async_generator from "@swc/helpers/src/_await_async_generator.mjs";
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import regeneratorRuntime from "regenerator-runtime";
var f6 = function() {
    var _ref = _wrap_async_generator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var x;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return _await_async_generator(1);
                case 2:
                    x = _ctx.sent;
                case 3:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function f6() {
        return _ref.apply(this, arguments);
    };
}();
// @filename: F7.ts
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
import regeneratorRuntime from "regenerator-runtime";
var f7 = function() {
    var _ref = _wrap_async_generator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.abrupt("return", 1);
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function f7() {
        return _ref.apply(this, arguments);
    };
}();

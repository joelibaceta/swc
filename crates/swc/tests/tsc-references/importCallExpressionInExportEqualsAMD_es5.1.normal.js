// @module: amd
// @target: esnext
// @filename: something.ts
module.exports = 42;
export { };
// @filename: index.ts
import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
import regeneratorRuntime from "regenerator-runtime";
module.exports = /*#__PURE__*/ _async_to_generator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
    var something;
    return regeneratorRuntime.wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                _ctx.next = 2;
                return import("./something");
            case 2:
                something = _ctx.sent;
            case 3:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
}));
export { };

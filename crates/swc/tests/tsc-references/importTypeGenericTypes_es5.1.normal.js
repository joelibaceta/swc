// @declaration: true
// @lib: es6
// @filename: foo.ts
module.exports = Point;
export { };
// @filename: foo2.ts
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var Bar = function Bar(input) {
    "use strict";
    _class_call_check(this, Bar);
};
export { Bar };
// @filename: usage.ts
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
export var x = {
    x: 0,
    y: 0,
    data: {
        x: 12
    }
};
export var y = {
    a: "",
    b: 0,
    data: {
        x: 12
    }
};
export var Bar2 = function Bar2(input) {
    "use strict";
    _class_call_check(this, Bar2);
};
export var shim = {
    Bar: Bar2
};

// @module: amd
// @Filename: foo_0.ts
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var Foo = function Foo() {
    "use strict";
    _class_call_check(this, Foo);
    this.test = "test";
};
(function(Foo) {
    var answer = Foo.answer = 42;
})(Foo || (Foo = {}));
module.exports = Foo;
export { };
// @Filename: foo_1.ts
var foo = require("./foo_0");
if (foo.answer === 42) {
    var x = new foo();
}
export { };

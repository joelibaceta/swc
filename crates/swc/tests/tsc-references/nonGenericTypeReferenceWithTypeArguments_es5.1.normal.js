// Check that errors are reported for non-generic types with type arguments
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var C = function C() {
    "use strict";
    _class_call_check(this, C);
};
var E;
(function(E) {})(E || (E = {}));
var v1;
var v2;
var v3;
var v4;
function f() {
    var C = function C() {
        "use strict";
        _class_call_check(this, C);
    };
    var E;
    (function(E) {})(E || (E = {}));
    var v1;
    var v2;
    var v3;
    var v4;
    var v5;
}

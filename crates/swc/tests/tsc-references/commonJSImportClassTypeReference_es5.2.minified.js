require("./mod1").K;
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var K = function() {
    "use strict";
    function K() {
        _class_call_check(this, K);
    }
    return K.prototype.values = function() {
        return new K();
    }, K;
}();
exports.K = K;

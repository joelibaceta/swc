// @target: es5
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _define_property from "@swc/helpers/src/_define_property.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var Base = function Base() {
    "use strict";
    _class_call_check(this, Base);
};
var C = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(C, Base);
    var _super = _create_super(C);
    function C() {
        var _this = this;
        _class_call_check(this, C);
        var _this1;
        _this1 = _super.call(this);
        (function() {
            var obj = // Ideally, we would capture this. But the reference is
            // illegal, and not capturing this is consistent with
            //treatment of other similar violations.
            _define_property({}, (_this1 = _super.call(_this), "prop"), function() {});
        });
        return _this1;
    }
    return C;
}(Base);

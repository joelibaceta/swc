var Outer = Outer || {};
Outer.app = Outer.app || {};
Outer.app.SomeView = function() {}, Outer.app.Inner = class {
    constructor(){
        this.y = 12;
    }
}, new Outer.app.Inner().y, Outer.app.statische = function(k) {
    return Math.pow(k, k);
};
Outer.app.Application = function() {
    var me = this;
    me.view = new Outer.app.SomeView();
};
var x;
new Outer.app.Application(), new Outer.app.Inner().y, x.y, Outer.app.statische(101);

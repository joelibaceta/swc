// @target: es5
class Foo {
}
class Foo2 {
}
class C {
}
class D extends C {
    // Computed properties
    get ["get1"]() {
        return new Foo;
    }
    set ["set1"](p) {}
}

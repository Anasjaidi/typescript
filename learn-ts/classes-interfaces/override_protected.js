"use strict";
class base1 {
    constructor(index, name) {
        this.index = index;
        this.name = name;
    }
    foo() { }
}
class dirived2 extends base1 {
    constructor(extra, index, name) {
        super(index, name);
        this.extra = extra;
    }
    foo() {
        this.name;
        this.index;
    }
}

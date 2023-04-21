"use strict";
class base {
    constructor(index, name) {
        this.index = index;
        this.name = name;
    }
}
class dirived extends base {
    constructor(extra, index, name) {
        super(index, name);
        this.extra = extra;
    }
}

"use strict";
class readOnly {
    constructor(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
}
const read = new readOnly("id123");
console.log(read.getId());

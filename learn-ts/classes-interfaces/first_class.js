"use strict";
class Departement {
    constructor(n) {
        this.name = n;
        this.memebers = [];
    }
    desc() {
        console.log(this.name);
    }
}
const d1 = new Departement("code");
console.log(d1.desc());

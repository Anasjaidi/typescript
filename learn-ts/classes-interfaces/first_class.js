"use strict";
class Departement {
    constructor(name) {
        this.name = name;
        this.memebers = [];
    }
    addNewMember(memebr) {
        this.memebers.push(memebr);
    }
    desc() {
        console.log(this.name);
    }
}
const d1 = new Departement("code");
console.log(d1.desc());

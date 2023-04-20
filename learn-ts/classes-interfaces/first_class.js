"use strict";
class Departement {
    constructor(name, _id) {
        this.name = name;
        this._id = _id;
        this.memebers = [];
    }
    addNewMember(memebr) {
        this.memebers.push(memebr);
    }
    desc() {
        console.log(this.name);
    }
}
const d1 = new Departement("code", "id");
console.log(d1.desc());

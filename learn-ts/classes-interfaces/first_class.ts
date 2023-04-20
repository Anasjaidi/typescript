class Departement {
	private name: string;
	private memebers: string[];
	constructor(n: string) {
		this.name = n;
		this.memebers = [];
	}

  addNewMember(memebr: string) {
    this.memebers.push(memebr)
  }
  
  desc() {
    
    console.log(this.name);
  }
}
const d1 = new Departement("code");
console.log(d1.desc());
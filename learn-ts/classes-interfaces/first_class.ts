class Departement {
	private memebers: string[];
	constructor(private name: string) {
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
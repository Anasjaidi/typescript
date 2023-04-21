class Departement {
	private memebers: string[];
	constructor(private name: string, private readonly _id: string) {
		this.memebers = [];
	}

  addNewMember(memebr: string) {
    this.memebers.push(memebr)
  }
  
  desc() {
    
    console.log(this.name);
  }
}
const d1 = new Departement("code", "id");
console.log(d1.desc());
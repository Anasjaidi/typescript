class Departement {
	private name: string;
	public memebers: [];
	constructor(n: string) {
		this.name = n;
		this.memebers = [];
	}

  desc() {
    console.log(this.name);
  }
}
const d1 = new Departement("code");
console.log(d1.desc());

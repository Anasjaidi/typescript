// approach 1

type Admin = {
  name: string;
  previliges: string[];
}

type Empl = {
  name: string;
  age: Date;
}

type AdvancedEmpl = Empl & Admin


const AdvEmplBasic: AdvancedEmpl = {
  "age": new Date(),
  name: "aaa",
  previliges: []
}

// approach 2

interface Ad {
	name: string;
	previliges: string[];
}


interface Em {
	name: string;
	age: Date;
}

type EmpAdv1 = Em & Ad

interface EmpAdv2 extends Em , Ad {

}



const AdvEmplBasic1: EmpAdv1 = {
	age: new Date(),
	name: "aaa",
	previliges: [],
};

const AdvEmplBasic2: EmpAdv2 = {
	age: new Date(),
	name: "aaa",
	previliges: [],
};
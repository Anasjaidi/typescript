type Admin2 = {
	name: string;
	previliges: string[];
};

type Empl2 = {
	name: string;
	age: Date;
};

type UnknownEmpl = Empl2 | Admin2

const Tst1: UnknownEmpl = {
  name: "anas jaidi",
  age: new Date()
}

const Tst2: UnknownEmpl = {
	name: "anas jaidi",
	previliges: ["ana"]
};

const fn = (em: UnknownEmpl) => {
  console.log(em.name);

  if ('age' in em) {
    console.log(em.age);
  }
  if ('previliges' in em) {
    console.log(em.previliges);
  }
}

class Car {
  drive() {
    console.log("drive");
  }
}

class Truck {
	drive() {
		console.log("drive");
	}
	load() {
		console.log("load");
	}
}

type Veh = Car | Truck


const fnVeh = (veh : Veh) => {
  veh.drive()

  if (veh instanceof Truck) {
    veh.load()
  }
}
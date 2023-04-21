interface Bird {
  type: 'bird';
  FlySpeed: number;
}

interface Horse {
	type: "horse";
	RunningSpeed: number;
}

type Animal = Horse | Bird

const fn9 = (animal: Animal) => {
  switch (animal.type) {
    case 'bird':
      console.log("speed " + animal.FlySpeed);
      break;
    case 'horse':
      console.log("speed " + animal.RunningSpeed);
      break;
  
    default:
      break;
  }
}
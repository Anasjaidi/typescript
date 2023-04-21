function Looger(target: Function) {
  console.log('looging');
  console.log(target);
}

@Looger
class Person {
  name: string = 'max';

  constructor() {
    console.log('creating person');
  }
}

const p1 = new Person()
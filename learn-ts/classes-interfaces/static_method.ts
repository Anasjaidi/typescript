class stati {
  private static name1: string = "anas jaidi"
  constructor() {
    
  }

  setit() {
    return stati.name1
  }

  static gt(n: number | string) : number | string{
    if (typeof n === 'number') return n + 1;
    else return n.toLowerCase() + this.name1
  }
}

console.log(stati.gt('12'));

const tes : stati = new stati()

console.log(tes.setit());
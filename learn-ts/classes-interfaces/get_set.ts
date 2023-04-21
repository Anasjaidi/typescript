class gs {
  private encapsulate : number = 2;

  get theEncapsulate() {
    return this.encapsulate;
  }

  set theEncapsulate(n: number) {
    this.encapsulate = n;
  }
}

const enc = new gs();

enc.theEncapsulate = 122
console.log(enc.theEncapsulate);
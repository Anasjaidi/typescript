class readOnly {
  constructor(private readonly id: string) {
    
  }

  getId() {
    return this.id;
  }
}

const read = new readOnly("id123")


console.log(read.getId());
class base1 {
	constructor(protected index: number, protected name: string) {}


  foo() {}
}

class dirived2 extends base1 {
	constructor(private extra: unknown, index: number, name: string) {
		super(index, name);
	}
  foo(): void {
      this.name;
      this.index;
  }
}

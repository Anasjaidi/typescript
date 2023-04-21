class base {
  constructor(private index: number, private name: string) {
    
  }
}

class dirived extends base {
	constructor(private extra: unknown, index: number, name :string) {
		super(index, name);
	}
}
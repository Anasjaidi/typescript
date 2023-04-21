interface Greetable {
	greet(): string;
}

interface kickable {
	kick(): string;
}

class mee implements Greetable, kickable {
	greet(): string {
		return "hi";
	}
	kick(): string {
		return "kicked";
	}
}

const theme: Greetable = new mee();

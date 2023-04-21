function mer<T, U>(obja: T, objb: U): U & T {
	return Object.assign(objb, obja);
}
const merged = mer<{ name: string }, { age: number }>(
	{ name: "anas" },
	{ age: 12 }
);

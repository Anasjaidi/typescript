function mer<T extends object, U extends object>(obja: T, objb: U): U & T {
	return Object.assign(objb, obja);
}
const merge = mer<{ name: string }, { age: number }>(
	{ name: "anas" },
	{ age: 12 }
);

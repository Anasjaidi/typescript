function meer<T extends object, U extends object>(obja: T, objb: U): U & T {
	return Object.assign(objb, obja);
}
const merge = meer<{ name: string }, { age: number }>(
	{ name: "anas" },
	{ age: 12 }
);

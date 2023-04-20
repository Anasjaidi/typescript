type fn = Function;

type fnAdd = (v1: number, v2: number) => number;

const add = (v1: number, v2: number): number => {
	return v1 + v2;
};

function merge(v1: number, v2: number): number {
	return v1 + v2;
}
// let comb: (v1: number, v2: number) => number

let comb: fnAdd = add;

// let cmb: (v1: number, v2: number) => number
let cmb: fnAdd = merge;

let fnCmb: () => void = () => {};

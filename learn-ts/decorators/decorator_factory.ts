function Looger(log: string) {
	return (target: Function) => {
		console.log("looging " + log);
		console.log(target);
	};
}


/**
 * excution of decoratorsfrom top to bottom 
 * 
 * excution of decorators factories from bottom to top
*/

@Looger("anas jaidi")
class Person2 {
	name: string = "max";

	constructor() {
		console.log("creating person");
	}
}

const p21 = new Person2();

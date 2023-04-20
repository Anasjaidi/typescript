/**
 * Tuples are fixed length & type 
 * 
 * example: [1,2]
 * 
 * @description here we say to ts that we have atype with 
 * two elements where the first needs to be number and second 
 * needs to be string
*/

const person4: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string]; // this mark the role as a tuple
} = {
	name: "anas",
	age: 20,
	hobbies: ["hahahahaha"],
	role: [2, "anas"],
};

// ts cant catch problem of pushing to tuple
person4.role.push(12)

// person4.role[1] = 12 // ERROR
// persone.role = [12, "a", 13] // ERROR


person4.role = [12, "anas jaidi"] // Works Fine
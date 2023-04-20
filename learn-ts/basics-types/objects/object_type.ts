/**
 * const me: {
    name: string;
    age: number;
  }
*/

const me = {
	name: "anas jaidi",
	age: 20,
};

// Property 'nick' does not exist on type
// console.log(me.nick) // ERROR !!!!!!!

const obj : object = {
  name: 'anas jaidi'
}

const obj2: {} = {
  name: 'anas jaidi'
}

// console.log((obj.name) === (obj2.name)) // // ERROR !!!!!!!


/**
 * as we say is better to let ts infere the type like we do in in `me` object
*/
const person : {
  name: string;
  age: number;
} = {
  name: "new",
  age: 12
}
/**
 * unions give a way to accept more than one type  
 */


let v1: (number | string);


v1 = 12
v1 = "name"


const combine = (v1 : (number | string), v2: (number | string)) => {
  if (typeof v1 === "number" && typeof v2 === "number") {
		return v1 + v2;
	} else if (typeof v1 === "string" && typeof v2 === "number") {
		return v1 + v2;
	} else if (typeof v1 === "string" && typeof v2 === "string") {
		return v1 + v2;
	} else {
    return v1.toString() + v2.toString()
  }
}


combine(1, 2)

combine("anas ", "jaidi")
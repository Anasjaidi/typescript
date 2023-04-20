
type fnMan = (str: string) => string;

const fnCallback = (
	arr: string[],
	action: fnMan
): string[] | void => {
	return arr.map(action);
};


const upper: fnMan = (str: string) : string => {
  return str.toUpperCase();
}



console.log(fnCallback(["anas", "jaidi"], upper))





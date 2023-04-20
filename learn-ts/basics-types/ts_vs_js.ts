
// ts use types check at compile time
// js use types check at run time

const tsFn = (a : number, b : number ) => {
  return a + b
}

const jsFn = (a, b) => {

  if (typeof a !== 'number' || typeof b !== 'number')
    throw new Error('something wrong')
	return a + b;
};
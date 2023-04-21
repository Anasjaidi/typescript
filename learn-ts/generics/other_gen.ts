
interface Lengthy {
  length: number;
}

const countAndDesc = <T extends Lengthy>(a: T) : [T, string] => {
  
  let desc = "Non"
  if (a.length) {
    desc = 'Got ' + a.length
  }
  return [a, desc] 
}

console.log(countAndDesc("hello there")); // [ 'hello there', 'Got 11' ]

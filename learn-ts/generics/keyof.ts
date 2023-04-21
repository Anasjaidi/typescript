const extract = <T extends object, U extends keyof T>(o: T, k: U) => {
  return o[k]
}

console.log(extract({age: 12}, 'age'));
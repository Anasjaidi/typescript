// numbers : floats + int
// string : chars + strings
// boolean

const {log} = console



function testTypes(a1 : number , a2 : boolean , a3 : string) {
  return [a1, a2, a3]
}

const arr: (number| boolean| string)[] = testTypes(12, true, "anas");

log(arr)
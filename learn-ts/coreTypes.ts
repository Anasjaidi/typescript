const add = (a: number, b:number, str : string, print : boolean) => {
  if (print)
    console.log(str + (a+b))
  else
    console.log(a + b)
}

const a = 1
const b = 2
add(a, b, 'result is ', true)
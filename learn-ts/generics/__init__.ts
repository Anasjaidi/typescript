const arr_str : Array<string> = []; // string[]

const my_promise : Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hi hello')
  }, 2000);
})

my_promise.then(res => console.log(res))
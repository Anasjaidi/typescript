/**
 * the never type used when we are never reac the return statement => error throwing
*/


const ErrorHandler = (code: number, message: string) : never => {
  throw {code, message}
}

ErrorHandler(400, "something is not god")
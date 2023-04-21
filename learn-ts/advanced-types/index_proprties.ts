interface Errors {
  [Error: string]: string;
}


const errors : Errors = {
  "username": "must have 3 chars",
  12: 'is okay cuz it can be converted to str'
}


interface MAP {
  [key: number]: unknown;
}


const mp: MAP = {
  12: "is possible",
  // "not": "possible"
}
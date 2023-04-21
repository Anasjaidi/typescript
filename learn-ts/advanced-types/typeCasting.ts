// const InputElement = document.getElementById('in1')! as HTMLInputElement
// const InputElement = <HTMLInputElement>document.getElementById('in1')!


// InputElement.value = "yes itis"


const inElem = document.getElementById('in1')

if (inElem) {
  (inElem as HTMLInputElement).value = "yes "
}
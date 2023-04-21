
function Log(target: any, name: string | Symbol) {
 console.log(target);
 console.log(name); 
}

function Log2(target: any, name: string, property: PropertyDescriptor) {
  console.log(target);
  console.log(name); 
  console.log(property);
}


function Log4(target: any, Methodename: string, positionOfargument: number) {
  console.log(target);
  console.log(Methodename); 
  console.log(positionOfargument);
}

function Log3(target: any, name: string, property: PropertyDescriptor ) {
    console.log(target);
		console.log(name);
		console.log(property);
}

class Product {
  
  private _price: number;
  
  @Log
  title : string;

  constructor(t: string, p : number) {
    this.title = t;
    this._price = p;
  }

  @Log2
  set price(p: number) {
    if (p > 0)
      this._price = p;
    else
      throw {message: 'negative value'}
  }


  @Log3
  getPriceWithtax(@Log4 tax:number) {
    console.log(this._price + (tax * 20 / 100));
  }
}
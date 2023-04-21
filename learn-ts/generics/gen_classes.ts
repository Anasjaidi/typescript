class test<T> {
  private item : T;

  constructor(i: T) {
    this.item = i
  }
}

class DataStorage<T> {
  private items: T[];

  constructor() {
    this.items = []
  }

  addItem(item: T) {
    this.items.push(item)
  }

  removeItem(item: T) {
    this.items = this.items.filter(el => el !== item)
  }

  get Items() {
    return this.items
  }
}

const s1 = new DataStorage<number>()

s1.addItem(12)

console.log(s1.Items);

const s2 = new DataStorage<string>()


s2.addItem("anas jaidi")
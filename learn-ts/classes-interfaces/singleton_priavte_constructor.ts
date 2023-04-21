class singletone {
  private static instance: singletone;


  private constructor () {}

  static getinst() {
    if (!this.instance) {
      this.instance = new singletone()
    }
    return this.instance;
  }
}

console.log(singletone.getinst());
class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  getAddress() {
    return "I live in " + this.address;
  }
}

const test = new Person("Lita Nguyen", "Ho Chi Minh");
console.log("Check test:", test);
console.log("Check address:", test.getAddress());

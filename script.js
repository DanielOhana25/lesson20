class Costumers {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.arrProduct = [];
  }
  addPhone(phone) {
    this.arrProduct.push(phone);
  }
  addComputer(computer) {
    this.arrProduct.push(computer);
  }
}

class Phone {
  #price;
  constructor(type, num) {
    this.type = type;
    this.num = num;
    this.#price = this.#definePrice();
  }
  #definePrice() {
    if (this.type == "Iphone") {
      return Number(this.num * 1000);
    } else if (this.type == "Samsung") {
      return Number(this.num * 100);
    }
  }
}

class Computer extends Phone {
  constructor(type, num, mobile) {
    super(type, num, mobile);
    this.mobile = mobile;
    this.price = this.totalPriceandTaxe();
  }

  totalPriceandTaxe() {
    let taxe = 200;
    if (this.type == "Asus") {
      return Number(this.num * 1000) + taxe;
    } else if (this.type == "Mac") {
      return Number(this.num * 100) + taxe;
    }
  }
}

let costumer1 = new Costumers("Daniel", 24);
let costumer2 = new Costumers("Shany", 21);
let phone1 = new Phone("Iphone", 3);
let phone2 = new Phone("Samsung", 5);
let computer1 = new Computer("Asus", 4, "true");
let computer2 = new Computer("Mac", 2, "False");
costumer1.addPhone(phone1);
costumer2.addPhone(phone2);
costumer1.addComputer(computer1);
costumer2.addComputer(computer2);
console.log(costumer1);
console.log(costumer2);

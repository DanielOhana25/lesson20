class Users {
  books;
  constructor(name, lastName, city) {
    this.name = name;
    this.lastName = lastName;
    this.city = city;
    this.books = [];
  }
  addBook(book) {
    if (book.borrow == "True") {
      this.books.push(book);
    }
  }
}

class Bilan {
  constructor() {
    this.user = [];
  }
  addUser(user) {
    this.user.push(user);
  }
  printArrBooks() {
    for (let i = 0; i < this.user.length; i++) {
      console.log(this.user[i].books);
    }
  }
}

class Books {
  constructor(name, author, borrow) {
    this.bookName = name;
    this.author = author;
    this.borrow = borrow;
  }
}

let a = new Users("daniel", "Ohana", "Netanya");
let b = new Users("shany", "Ohana", "Netanya");

let book1 = new Books("gensis", "god", "True");
let book2 = new Books("exodus", "god", "False");
let book3 = new Books("levitiv", "god", "True");
let book4 = new Books("numbers", "god", "False");
let book5 = new Books("deteronome", "god", "True");

let book6 = new Books("shmouel", "god", "True");
let book7 = new Books("Iyov", "god", "False");
let book8 = new Books("Ovadia", "god", "True");
let book9 = new Books("Daniel", "god", "False");
let book10 = new Books("Yoel", "god", "True");

a.addBook(book1);
a.addBook(book2);
a.addBook(book3);
a.addBook(book4);
a.addBook(book5);
b.addBook(book6);
b.addBook(book7);
b.addBook(book8);
b.addBook(book9);
b.addBook(book10);

let bilan1 = new Bilan();

bilan1.addUser(a);
bilan1.addUser(b);
bilan1.printArrBooks();

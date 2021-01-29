let x = 10;
let Product = require("./Product.js");
class Order {
  constructor(orderid, price, product) {
    this.orderid = orderid;
    this.price = price;
    this.product = product;
  }
}

let order1 = new Order(121, 25000, new Product("iphone 5s"));
console.log(order1);

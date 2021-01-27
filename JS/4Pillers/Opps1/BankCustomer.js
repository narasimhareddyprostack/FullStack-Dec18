//import Addrss from "./Address";  ES6

const Address = require("./Address");

class BankCustomer {
  constructor(num, name, mobile, address) {
    this.accNumber = num;
    this.accName = name;
    this.accMobile = mobile;
    this.accAddress = address;
  }
  getCustomerDetails() {
    console.log("Hello: ", this.accName, this.accAddress);
  }
}
let pranayAcc = new BankCustomer(
  234,
  "Pranay",
  959161,
  new Address(11, "rj Garden", "Bangalore", "KA")
);
pranayAcc.getCustomerDetails();

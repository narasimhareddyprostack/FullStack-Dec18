class Address {
  constructor(houseNum, area, city, state) {
    this.houseNumber = houseNum;
    this.area = area;
    this.city = city;
    this.state = state;
  }
}
class BankCustomer {
  constructor(num, name, mobile, address) {
    this.accNumber = num;
    this.accName = name;
    this.accMobile = mobile;
    this.accAddress = address;
  }
  getCustomerDetails() {
    console.log("Hello, Good Morning", this.accName, this.accAddress);
  }
}
let pranayAcc = new BankCustomer(
  234,
  "Pranay",
  959161,
  new Address(11, "rj Garden", "Bangalore", "KA")
);
pranayAcc.getCustomerDetails();

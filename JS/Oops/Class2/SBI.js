class Customer {
  min_Bal = 500;
  constructor(num, name) {
    this.acc_No = num;
    this.acc_Name = name;
    console.log("constructor Executed");
  }
  getDetails() {
    console.log("Account Name:", this.acc_Name, " created");
  }
}
let t = new Customer(89732222, "Teja");
console.log(t);
t.getDetails();
console.log(t.min_Bal);
console.log(t.acc_Name);

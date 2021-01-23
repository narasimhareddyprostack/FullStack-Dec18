class Customer {
  constructor(accNum, accName) {
    this.accountNumber = accNum;
    this.accountName = accName;
    console.log(
      "Account:",
      this.accountNumber,
      "Accout Name: ",
      this.accountName
    );
  }
  openAccount = () => {
    console.log(
      "Account Holder:",
      this.accountName,
      "account opened Successfully"
    );
  };
}

let obj_Teja = new Customer(2255, "Teja");
obj_Teja.openAccount();

let obj_Pranay = new Customer(143, "Pranay");
obj_Pranay.openAccount();

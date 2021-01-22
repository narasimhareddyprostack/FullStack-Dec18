class BankUser {
  acc_No = 4781;
  acc_Name = "Narasimha Reddy";
  getDetails = () => {
    console.log(
      "My Account No:",
      this.acc_No,
      " and My A/c Name:",
      this.acc_Name
    );
  };
}

let newUser = new BankUser();

console.log(newUser);

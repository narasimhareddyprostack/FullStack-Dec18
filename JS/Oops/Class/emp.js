class Customer {
  acc_No = 4781;
  getAccountDetails = () => {
    console.log("Your Account No is:", this.acc_No);
  };
}

let custObj = new Customer();
console.log(custObj);
console.log(custObj.acc_No);
custObj.getAccountDetails();

//How to access Class member? (properties and methods)
/*
    Obj.property

*/

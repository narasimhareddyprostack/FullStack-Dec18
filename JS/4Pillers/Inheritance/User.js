class Employee extends Customer {
    constructor(id, name, email, degi) {
      super(id, name, email);
      this.empDesignation = degi;
      console.log("Employee Constructor...");
    }
    working() {
      console.log(this.userName, "Employee Working as a:", this.empDesignation);
    }
  }
  


class User {
  constructor(id, name, email) {
    this.userId = id;
    this.userName = name;
    this.userEmail = email;
    console.log("Parent constructor..");
  }
  login() {
    console.log(this.userName, ": Loggin in Successfully !");
    //console.log(` ${this.userName} : Logged in Successfully !`);
  }
  logout() {
    console.log(` ${this.userName} : Logged Out Successfully !`);
  }
}
class Customer extends User {
  constructor(id, name, email) {
    super(id, name, email);
    console.log("Child constructor..");
  }
  searchProduct() {
    console.log(` ${this.userName} :Searching Products .... !`);
  }
}


let Emp_Pranay = new Employee(149, "Pranay", "PJ@gmail.com", "Sales Executive");
Emp_Pranay.login();
Emp_Pranay.searchProduct();
Emp_Pranay.working();
Emp_Pranay.logout();
/*
let Teja_Ref_Obj = new Customer(141, "Teja", "Teja@gmail.com");
console.log(Teja_Ref_Obj.login());
console.log(Teja_Ref_Obj.searchProduct());
console.log(Teja_Ref_Obj.logout());
//let Ravi_Ref_Obj = new Customer(142, "Ravi", "Ravi@gmail.com");
*/

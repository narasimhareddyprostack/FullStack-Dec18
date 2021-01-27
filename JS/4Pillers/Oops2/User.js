const Details = require("./Details");
class User {
  constructor(name, email, mobile, wish) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.wish = wish;
  }
  getUserDetails() {
    console.log("User Details :", this.name, this.email, this.wish);
  }
}

let newUser = new User(
  "Narasimha",
  "greetlabs@gmail.com",
  9591619191,
  new Details()
);
newUser.getUserDetails();

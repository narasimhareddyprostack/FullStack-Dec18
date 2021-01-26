const bcrypt = require("bcrypt");

let user = {
  name: "Pranay",
  email: "jyothiPranay@gmailc.om",
  password: "123ABC",
};

let salt = bcrypt.genSaltSync(10);
let newPassword = bcrypt.hashSync(user.password, salt);

console.log(newPassword);

let updateUser = {
  ...user,
  password: newPassword,
};
console.log(updateUser);

/*
npm init -y

npm i bcrypt

*/

const jwt = require("jsonwebtoken");

let payload = {
  userName: "Narasimha Reddy",
};
let token = jwt.sign(payload, "PSA@100");
console.log(token);

//Client Token from browser local storage
let token_Client = "";

let paylod_New = jwt.verify(token_Client, "PSA@100");
console.log(paylod_New);

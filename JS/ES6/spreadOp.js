let user = {
  name: "Pranay",
  email: "jyothiPranay@gmailc.om",
};
let details = {
  address: "#97, PSA, Bangalore - 47",
  email: "jyothi@psa.com",
};

let userDetails = {
  ...user,
  mobile: 95272232323,
  ...details,
};

console.log(userDetails);

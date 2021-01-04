let Today = new Date();
let day = Today.getDay();

switch (day) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is tuesday");
    break;
  case 3:
    console.log("Today is wednesday");
    break;
  case 4:
    console.log("Today is thursday");
    break;
  case 5:
    console.log("Today is friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("No match found");
}

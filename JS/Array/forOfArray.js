let sal = [20, 30, 40, 50, 60];
//how to iterate - for / for of
/*
  for( singleValue of arrayName){

  }
*/
let sum = 0;
for (x of sal) {
  console.log("array - Values", x);
  sum = sum + x;
}

console.log("Sum of array Values:", sum);

let marks = [20, 30, 40, 60, 70];
let total = 0;

for (let i = 0; i <= marks.length - 1; i++) {
  console.log("array value", marks[i]);
  total = total + marks[i];
  console.log(total);
}
console.log("Grand Totla", total);

let newTotal = 0;
//
for (value of marks) {
  newTotal = newTotal + value;
}
console.log(newTotal);

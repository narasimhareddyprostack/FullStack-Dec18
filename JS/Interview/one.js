let names = ["psa", "prostack", "prostack academy"];
console.log(names.forEach((word) => word.toLocaleUpperCase()));

console.log(names.map((word) => word.toLocaleUpperCase()));

let newNames = [];
for (let i = 0; i <= names.length - 1; i++) {
  newNames[i] = names[i].toLocaleUpperCase();
}
console.log(newNames);

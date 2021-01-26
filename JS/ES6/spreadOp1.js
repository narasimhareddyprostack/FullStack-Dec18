let size = [38, 40, 42];
let size1 = [42, 44, 46];

let new_Size = [...size, ...size1];

console.log(new_Size);

//create new array based on existing.
/*
let new_Size = [];
for (let i = 0; i <= size.length - 1; i++) {
  new_Size[i] = size[i];
}
console.log(new_Size);
*/
//let new_Size = size.slice(0, 2);

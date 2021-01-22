/*
function objConEx() {
  console.log(this);
}
objConEx();
*/

let objConEx = () => {
  console.log(this);
};
objConEx();
class Test {
  min_Bal = 500;
  
  getMinBalInfo() {
    this.newBal = 100;
    console.log(this.newBal);
  }
}
let test = new Test();
console.log(test);
console.log(test.min_Bal);
test.getMinBalInfo();

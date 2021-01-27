class Test {
  constructor(a, b, c) {
    this.one = a;
    this.two = b;
    this.three = c;
    console.log("Hello", this.one);
  }
}
new Test(1, 2, 3);
new Test(100, 200, 300);

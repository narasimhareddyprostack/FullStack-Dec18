var n = 111;
var count = 0;

for (var i = 1; i <= n; i++) {
  count++;
  n /= 10;
}

if (count == 3) {
  console.log("3 digit");
} else {
  console.log("not 3 digit");
}

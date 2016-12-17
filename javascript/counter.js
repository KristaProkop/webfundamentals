
function printRange(a, b, c) {
  console.log(a);
  while (a < (b - c)) {
    var result = (a + c);
    console.log(result);
    a = result;
  }
}

printRange(2, 10, 2)
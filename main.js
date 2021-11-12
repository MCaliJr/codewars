function diamond(n) {
  if (n <= 0 || n % 2 == 0) return null;
  let diam = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n - (n + 1) / 2; j > 0; j--) {
      diam = diam.concat(" ");
    }
    for (let z = 0; z < n - (n + 1) / 2; z++) {
      diam = diam.concat("*");
    }
    diam = diam.concat("\n");
  }
  console.log(diam);
  //return diam;
}
diamond(5);

function createDimondShape(size) {
  let heya = "";
  for (var i = 1; i <= size; i++) {
    for (var s = size - 1; s >= i; s--) {
      heya = heya.concat(" ");
    }
    for (var j = 1; j <= i; j++) {
      heya = heya.concat("*");
    }
    heya = heya.concat("\n");
  }
  if (i == size + 1) {
    for (var i = 1; i <= size - 1; i++) {
      for (var s = 1; s <= i; s++) {
        heya = heya.concat(" ");
      }
      for (j = i; j <= size - 1; j++) {
        heya = heya.concat("*");
      }
      heya = heya.concat("\n");
    }
  }
  console.log(heya);
}
createDimondShape(9);

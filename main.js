function permutations(string) {
  if (!string || typeof string !== "string") {
    return;
  } else if (string.length < 2) {
    return [string];
  }

  let permutArr = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (string.indexOf(char) != i) continue;

    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of permutations(remainingChars)) {
      permutArr.push(char + permutation);
    }
  }
  return permutArr;
}

string = "hello";
console.log([string]);

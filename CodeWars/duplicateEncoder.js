function duplicateEncode(word) {
  let newString = "";
  word = word.toLowerCase();
  let testedString = word;
  for (let i = 0; i < word.length; i++) {
    let testedChar = word.substr(i, 1);

    testedString = testedString.slice(1);
    if (testedString.includes(testedChar)) {
      newString = newString + ")";
    } else {
      newString = newString + "(";
    }
    testedString = testedString + testedChar;
  }
  return newString;
}

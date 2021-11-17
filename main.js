function incrementString(strng) {
  let letters = strng.match(/[a-zA-Z]+/g); // "foo"
  let number = strng.match(/\d+/g); // "009"
  let lastNumber = number[0].charAt(number[0].length - 1);

  console.log(number[0].slice(0, -2));
  if (number) {
    if (lastNumber == 9) {
      return `${letters}${number[0].slice(0, -2)}${
        Number(number[0].charAt(number.length - 1)) + 1
      }0`;
    }
    return (strng = `${letters}${number[0].charAt(number[0].length - 1) + 1}`);
  } else {
    return (strng = `${letters}1`);
  }
}

incrementString("foobar099");

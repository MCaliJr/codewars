// I dont remember name of this problem so I will go back to it later. Covid hit me like a freakin bus...

function incrementString(strng) {
  let letters = strng.match(/[a-zA-Z]+/g); // "foo"
  let number = strng.match(/\d+/g); // "009"

  console.log(number);
  let lastNumber = number[0].charAt(number[0].length - 1);
  let newArr = number[0].split("");

  if (number) {
    if (lastNumber == 9) {
      newArr[newArr.length - 1] = parseInt(newArr[newArr.length - 1]) + 1;
      console.log(newArr[newArr.length - 1]);
      do {
        newArr.forEach((element, index) => {
          if (element == 10) {
            newArr[index - 1] = Number(newArr[index - 1]) + 1;
            newArr[index] = 0;
          }
        });
      } while (newArr.includes(10));
      number = newArr.join("");
      return `${letters}${number}`;
    }

    return (strng = `${letters}${number[0].substring(0, number[0].length - 1)}${
      Number(lastNumber) + 1
    }`);
  } else {
    return (strng = `${letters}1`);
  }
}

incrementString("foo");

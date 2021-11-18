function incrementString(strng) {
  let letters = strng.match(/[a-zA-Z]+/g); // "foo"
  let number = strng.match(/\d+/g); // "009"
  let lastNumber = number[0].charAt(number[0].length - 1);
  let newArr = number[0].split("");

  console.log(newArr[newArr.length - 1]);

  if (lastNumber == 9) {
    newArr[newArr.length - 1] = parseInt(newArr[newArr.length - 1]) + 1;
    console.log(newArr[newArr.length - 1]);
    // do {
    //   newArr.forEach((element, index) => {
    //     if (element == "10" || element == 10) {
    //       newArr[index - 1] = Number(newArr[index - 1]) + 1;
    //       element = 0;
    //     }
    //   });
    // } while (newArr.includes(10 || "10"));
  }

  // split foo and 000

  // make newArr array from 000, which is splitted by every digit

  // if (number)

  // if (lastNumber == 9)

  // do while newArr contains "10" loop

  // newArr.forEach((element, index) => {
  //   if (element == "10") {
  //     element = "0";
  //     element[index - 1] = element[index - 1] + 1;
  //   }
  // });

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

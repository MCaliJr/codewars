// complete the function
function solution(string) {
  newArr = string.split("");
  uppercasedSpaceArr = newArr.map((letter) => {
    if (letter == letter.toUpperCase()) {
      return (letter = ` ${letter}`);
    }
    return letter;
  });
  return uppercasedSpaceArr.join("");
}

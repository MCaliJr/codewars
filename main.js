// complete the function
function solution(string) {
  // for every big letter add space before and return new string

  newArr = string.split("");
  uppercasedSpaceArr = newArr.map((letter) => {
    if (letter == letter.toUpperCase()) {
      return (letter = ` ${letter}`);
    }
    return letter;
  });
  string = uppercasedSpaceArr.join("");
  console.log(string);
}

solution("jfksaFSssdf");

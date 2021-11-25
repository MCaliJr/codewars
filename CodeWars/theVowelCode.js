function encode(string) {
  return Array.from(string)
    .map((letter) => {
      switch (letter) {
        case "a":
          return 1;
        case "e":
          return 2;
        case "i":
          return 3;
        case "o":
          return 4;
        case "u":
          return 5;
      }
      return letter;
    })
    .join("");
}

console.log(encode("hello"));

function decode(string) {
  return Array.from(string)
    .map((letter) => {
      switch (letter) {
        case "1":
          return "a";
        case "2":
          return "e";
        case "3":
          return "i";
        case "4":
          return "o";
        case "5":
          return "u";
      }
      return letter;
    })
    .join("");
}

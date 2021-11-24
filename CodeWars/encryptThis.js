var encryptThis = function (text) {
  let textArr = text.split(" ");
  let outcome = [];

  textArr.forEach((str) => {
    if (str.length == 1) {
      // Switching one letter words to ASCII
      outcome.push(str.charCodeAt(0));
    } else {
      let tempStr = str.split("");
      // Switching first letter to ASCII
      tempStr[0] = str.charCodeAt(0);
      // Switching second and last letter
      tempStr[1] = str[str.length - 1];
      tempStr[str.length - 1] = str[1];
      outcome.push(tempStr.join(""));
    }
  });
  return outcome.join(" ");
};

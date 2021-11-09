/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s == "") {
    return true;
  }
  if (s.length < 2) {
    return false;
  }
  const pairBrackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stk = [];
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    let br = arr[i];
    if (pairBrackets[br]) {
      stk.push(br);
    } else {
      let checkBracket = stk.pop();
      if (pairBrackets[checkBracket] != br) {
        return false;
      }
    }
  }
  if (stk.length > 0) {
    return false;
  }
  return true;
};

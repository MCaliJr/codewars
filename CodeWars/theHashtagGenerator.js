function generateHashtag(str) {
  strArr = str.split(" ");
  strArr = strArr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  str = strArr.join("");
  if (!str) return false;
  str = `#${str}`;
  if (str.length > 140) return false;
  return str;
}

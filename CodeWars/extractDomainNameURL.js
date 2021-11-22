// Tried working on a hardcode solution but it didn't passed some tests

function domainName(url) {
  if (url.includes("//")) {
    console.log(url.split("//")[1].split(".")[0]);
    return url.split("//")[1].split(".")[0];
  } else if (url.includes("www.")) {
    console.log(url.split("www.")[1].split(".")[0]);
    return url.split("www.")[1].split(".")[0];
  }
}

// So went with some regex solution that worked great!
function domainName(url) {
  return url.replace(/.+\/\/|www.|\..+/g, "");
}

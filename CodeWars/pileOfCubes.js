function findNb(m) {
  let currentM = 0;
  let n = 0;

  while (currentM < m) {
    n += 1;
    currentM += n ** 3;
  }

  return currentM === m ? n : -1;
}

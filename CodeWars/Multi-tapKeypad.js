function presses(phrase) {
  if (phrase.length < 1) {
    return 0;
  }
  let outcome = 0;
  let keyNumber = {
    0: 2,
    1: 1,
    a: 1,
    b: 2,
    c: 3,
    2: 4,
    d: 1,
    e: 2,
    f: 3,
    3: 4,
    g: 1,
    h: 2,
    i: 3,
    4: 4,
    j: 1,
    k: 2,
    l: 3,
    5: 4,
    m: 1,
    n: 2,
    o: 3,
    6: 4,
    p: 1,
    q: 2,
    r: 3,
    s: 4,
    7: 5,
    t: 1,
    u: 2,
    v: 3,
    8: 4,
    w: 1,
    x: 2,
    y: 3,
    z: 4,
    9: 5,
    " ": 1,
  };
  let phraseArray = phrase.toLowerCase().split("");
  phraseArray.forEach((number) => {
    outcome += keyNumber[`${number}`];
  });
  return outcome;
}

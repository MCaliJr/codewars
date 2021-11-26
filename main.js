function race(v1, v2, g) {
  if (v1 >= v2) return null;
  v1sec = v1 / 3600;
  v1DistAtGivensec = g;
  v2sec = v2 / 3600;
  v2DistAtGivensec = 0;
  secsPassed = -1;

  while (v2DistAtGivensec <= v1DistAtGivensec) {
    v1DistAtGivensec += v1sec;
    v2DistAtGivensec += v2sec;
    secsPassed++;
  }

  let h = Math.floor(secsPassed / 3600);
  let m = Math.floor((secsPassed % 3600) / 60);
  let s = Math.floor((secsPassed % 3600) % 60);

  return [h, m, s];
}

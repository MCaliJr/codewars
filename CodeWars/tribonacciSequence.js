function tribonacci(signature, n) {
  if (n < 1) return [];
  if (n == 1) return [signature[0]];
  if (n == 2) return [signature[0], signature[1]];
  for (let i = 0; i < n - 3; i++) {
    signature[i + 3] = signature[i] + signature[i + 1] + signature[i + 2];
  }
  return signature;
}

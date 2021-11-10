function twoSum(numbers, target) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i != j && numbers[i] + numbers[j] === target) {
        answer.push(i);
        answer.push(j);
        return answer;
      }
    }
  }
}

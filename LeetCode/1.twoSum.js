/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (i != j && currentNumber + nums[j] === target) {
        answer.push(i);
        answer.push(j);
        return answer;
      }
    }
  }
};

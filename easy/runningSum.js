// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

const runningSum = (nums) => {
    const result = []
   nums.reduce((acc, num, index) => {
      const res = acc + num
      result.push(res)
      return res
  }, 0)
    return result
}

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
const num = [1,2,3,4]
console.log(runningSum(num))
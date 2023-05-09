// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

const pivotIndex = (nums) => {
  const reverseNums = [...nums].reverse()
  const numsSumArr = runningSum(nums)
  const reverseNumsSumArr = runningSum(reverseNums).reverse()
    for (let i = 0; i < numsSumArr.length; i++) {
        if (numsSumArr[i] === reverseNumsSumArr[i]){
            return i
        }
    }
    return -1
}

const runningSum = (nums) => {
    const result = []
    nums.reduce((acc, num, index) => {
        const res = acc + num
        result.push(res)
        return res
    }, 0)
    return result
}

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
//     The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
const nums = [1, 7, 3, 6, 5, 6]
console.log(pivotIndex(nums))

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
const nums1 = [1, 2, 3]
console.log(pivotIndex(nums1))

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

const nums2 = [2, 1, -1]
console.log(pivotIndex(nums2))
//  You are given two integer arrays nums1 and nums2. We write the integers of nums1 and nums2 (in the order they are given) on two separate horizontal lines.
//  We may draw connecting lines: a straight line connecting two numbers nums1[i] and nums2[j] such that:
//  nums1[i] == nums2[j], and
//  the line we draw does not intersect any other connecting (non-horizontal) line.
//  Note that a connecting line cannot intersect even at the endpoints (i.e., each number can only belong to one connecting line).
//  Return the maximum number of connecting lines we can draw in this way.
//

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxUncrossedLines = (nums1, nums2) => {
    let allNums = [...new Set([...nums1, ...nums2])]
    const cross = allNums.reduce((acc,val, i )=>{
        return {...acc, [val] : { firstLine : getAllIndexes(nums1, val), secondLine : getAllIndexes(nums2, val)}}
    },{})
    const normalizeData = Object.values(cross).filter(el => el.firstLine.length !== 0 && el.secondLine.length !== 0).reduce((acc, el) =>{
        return [[...acc[0], ...el.firstLine], [...acc[1], ...el.secondLine]]
    },[[],[]])

    let result = 0
    // console.log(normalizeData)
    const linkArr = []
    const [firstLine, secondLine] = normalizeData
    for (let i = 0; i < firstLine.length; i++) {
        if(firstLine[i] === secondLine[i]){
            linkArr.push(i + '_' + i)
        }
        const bindFirstLineIndex = firstLine.indexOf(secondLine[i], i)
        const bindSecondLineIndex = secondLine.indexOf(firstLine[i], i)
        if(bindFirstLineIndex !== -1){
            linkArr.push(bindFirstLineIndex + '_' + i)
        }
        if(bindSecondLineIndex !== -1){
            linkArr.push(i + '_' + bindSecondLineIndex)
        }

    }
    console.log(firstLine, secondLine, [...new Set(linkArr)])

    return new Set(linkArr).size
}

function getAllIndexes(arr, val) {
    let indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

// Input: nums1 = [1,4,2], nums2 = [1,2,4]
// Output: 2
// Explanation: We can draw 2 uncrossed lines as in the diagram.
//     We cannot draw 3 uncrossed lines, because the line from nums1[1] = 4 to nums2[2] = 4 will intersect the line from nums1[2]=2 to nums2[1]=2.
// Example 2:
//
// Input: nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
// Output: 3
// Example 3:
//
// Input: nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
// Output: 2

console.log(maxUncrossedLines([1,4,2], [1,2,4])) // 2
// console.log([1,4,2], [1,2,4])
console.log(maxUncrossedLines([2,5,1,2,5], [10,5,2,1,5,2])) // 3
// console.log([2,5,1,2,5], [10,5,2,1,5,2])
console.log(maxUncrossedLines([1,3,7,1,7,5], [1,9,2,5,1])) // 2
// console.log([1,3,7,1,7,5], [1,9,2,5,1])
console.log(maxUncrossedLines([3,3], [1,3,1,2,1])) // 1
// console.log([3,3], [1,3,1,2,1])

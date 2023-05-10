// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

const generateMatrix = (n) => {
    if(n < 1) return []
    const result  = Array.from({length:n}, () => Array.from({length: n}))
    let [row, column, val] = [0, 0, 1]
        for(let start = 0, end = n - 1; start<=end; end -=1){
            while (column < end){
                result[row][column] = val
                column += 1
                val += 1
            }
            while (row < end){
                result[row][column] = val
                row += 1
                val += 1
            }
            while (column > start){
                result[row][column] = val
                column -= 1
                val += 1
            }
            for (start += 1; row > start;  row -= 1){
                result[row][column] = val
                val += 1
            }
        }
    result[row][column] = val
    return result
}


// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Output: [[1,2,3],[4,5,6],[7,8,9]]

const n = 4
console.table(generateMatrix(n))
console.table([[1,2,3],[8,9,4],[7,6,5]])

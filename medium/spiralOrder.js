const spiralOrder = (matrix) => {
  const result = []
  if(matrix[0].length === 1) return matrix.flat(1)
  while (matrix.length){
    result.push(...matrix.shift())
    matrix.map((row) => {
      if(row.length>0){
        result.push(row.pop())
        row.reverse()
      }
    })
    matrix.reverse()
  }
  return result
}

const matrix = [[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]]
const matrix2 = [[7],[9],[6]]
// Output: [1,2,3,6,9,8,7,4,5]

console.log(spiralOrder((matrix)))
console.table([[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]])

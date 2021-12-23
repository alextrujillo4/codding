const iTargetSum = (targetsum, numbers) => {
    const table = Array(targetsum + 1)
    .fill(null)
    table[0] = [];
    for (let i = 0; i < targetsum; i++) {
        if(table[i] != null){
            for (let j = 0; j < numbers.length; j++) {
                const num = numbers[j];
                table[i + num] = [...table[i],num]
            }
        }
        
    }
  return table[targetsum]
}

console.log(iTargetSum(7,[2,3]))//[3,2,2]
console.log(iTargetSum(7,[2,4]))//null
console.log(iTargetSum(7,[2,3,5]))//[2,2,2,2]
console.log(iTargetSum(300,[7,14]))//null

module.exports = iTargetSum
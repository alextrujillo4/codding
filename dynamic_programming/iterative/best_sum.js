const iBestSum = (targetsum, numbers) => {
    const table = Array(targetsum + 1)
    .fill(null)
    table[0] = [];

    for (let i = 0; i < targetsum; i++) {
        if(table[i] != null){
            for (let j = 0; j < numbers.length; j++) {
                const num = numbers[j];
                const combination = [...table[i],num]
                if(!table[i + num]|| table[i + 1].length > combination.length){
                    table[i + num] = combination
                }
            }
        }
        
    }
  return table[targetsum]
}

console.log(iBestSum(7,[3,4,5,7]))//[3,5]
console.log(iBestSum(8,[2,3,5]))//[3,5]

module.exports = iBestSum
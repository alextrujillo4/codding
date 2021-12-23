const iCanSum = (targetsum, numbers) => {
    const table = Array(targetsum + 1)
    .fill(false)

    table[0] = true


for (let i = 0; i < targetsum ; i++) {
   if(table[i] == true){
       for (const num of numbers) {
           table[i+num] = true
       }
   }
    
}
  return table[targetsum]
}

//console.log(iCanSum(7,[2,3]))

console.log(iCanSum(7,[5,3,4]))

module.exports = iCanSum
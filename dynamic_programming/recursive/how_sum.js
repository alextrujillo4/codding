const { number } = require("yargs")

const howSum = (targetsum, numbers, memo = {}) => {
    if(targetsum in memo) return memo[targetsum]
    if(targetsum === 0) return []
    if(targetsum < 0) return null

    for(let num of numbers){
        var remainder = targetsum - num
        var remainderResult = howSum(remainder,numbers,memo)
        if (remainderResult !== null){
            memo[targetsum] = [...remainderResult, num]
            return memo[targetsum] 
        }
    }
    memo[targetsum] = null
    return null
}

module.exports = howSum
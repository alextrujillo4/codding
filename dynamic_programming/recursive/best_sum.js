const { number } = require("yargs")

const bestSum = (target, numbers, memo = {}) => {
    if(target in memo) return memo[target]
    
    if(target === 0) return []
    if(target < 0) return null

    let shortestCombination = null

    for(let num of numbers){
        const remainder = target - num
        const remainderCombination = bestSum(remainder, numbers, memo)
        if(remainderCombination != null){
            const combination=  [...remainderCombination,num]
            //if combinaton is shorter than the current shortest
            if(shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination  = combination;
            }
        }

    }
     memo[target] = shortestCombination
     return shortestCombination
};

module.exports = bestSum
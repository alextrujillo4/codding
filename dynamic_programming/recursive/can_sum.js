const canSum = (targetsum, numbers, memo = {}) => {
    if(targetsum in memo) return memo[targetsum]
    if(targetsum === 0) return true
    if(targetsum < 0) return false

    for(let num of numbers){
        const remainder = targetsum - num
        if(canSum(remainder,numbers,memo) === true){
            memo[targetsum] = true
            return true
        }
    }

    memo[targetsum] = false
    return false
}

module.exports = canSum
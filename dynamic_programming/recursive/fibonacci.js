
// By Memoizing we can just pass from a exponencial to a lineat time complexity.
var fib = (n, memo = {}) => {
    if(n in memo) return memo[n]
    if(n <= 2) return 1
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

module.exports = fib;

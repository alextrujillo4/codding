var iCanConstruct = (target, words) => {
    const table = Array(target.length + 1).fill(false)
    table[0] = true

    
    for (let i = 0; i < target.length; i++) {
        if(table[i] === true){
        for (const word of words) {
            if(target.slice(i,i+word.length) === word)
            table[i+word.length] = true
            }
        }
        
    }
    
 return table[target.length]
}
console.log(iCanConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])) // true
console.log(iCanConstruct("skateboard", ["bo", "rd", "ate", "ska", "boar"])) // false


module.exports = iCanConstruct
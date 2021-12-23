var canConstruct = (word, subWords, memo = {}) => {
    if(word in memo) return memo[word]
    if(word in subWords) return true
    if(word === "") return true
    
    for(let w of subWords){
        if(word.startsWith(w)){
            var newWord = word.slice(w.length)
           if(canConstruct(newWord,subWords,memo)){
            memo[word] = true;
               return true
           }
        }
    }
    memo[word] = false;
    return false;

}

module.exports = canConstruct
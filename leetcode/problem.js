
    //Converts a string to 32 bit signed integer
    var threeSum = (nums) => {      
        if(nums == "") return []
 
        let phone = {
           "0" : [],
           "1": [],
           "2"  : ["a","b","c"],
           "3"  : ["d","e","f"],
           "4"  : ["g","h","i"],
           "5"  : ["j","k","l"],
           "6"  : ["m","n","o"],
           "7"  : ["p","q","r","s"],
           "8"  : ["t","u","v"],
           "9"  : ["w","x","y", "z"],
        }

        if(nums.length == 1) return phone[nums]

        let len = 1
        let selection = []
        //Getting the length of array
        for (const num of nums) {
            len = len * phone[num].length
            selection= [...selection, ...phone[num]]
        }
        
        let response = {

        }

        nums.length
        for (let i = 0; i < len; i++) {
            const element = array[i];
            
            
        }


        
       return ["ad","ae","af","bd","be","bf","cd","ce","cf"]

        

    };


threeSum("23")


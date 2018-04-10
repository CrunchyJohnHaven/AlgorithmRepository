// Check permutation -> Given two strings, write a method to decide is one is a permutation of the other. 

// SOLUTION: 
// Confirm the details with your interviewer: 
//      Permutation comparison is case sensitive
//      Is whitespace significant? -> yes 
// God, dog -> not a permutation 
// god, dog -> is a permutation


function isPermutation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    var sortStr1 = str1.split('').sort().join('');
    // console.log("sortStr1: ", sortStr1)
    var sortStr2 = str2.split('').sort().join('');
    // console.log('sortStr2: ', sortStr2);

    return (sortStr1 === sortStr2); //they are permutations 
}
console.log(isPermutation("dog", "god"))

// Time Complexity: O(N log N)
console.time('isPermutation()')
isPermutation('god', 'dog');
console.timeEnd('isPermutation()')

// Given two strings, write and call a function to determine if one is a permutation of the other. The function should not use built-in methods, and the function
// should run in linear time ( 'O(N)' )


//We use a dictionary to compare these two strings. 
function isPermutation2(str1, str2) {
    if (str1.length !== str2.length) { //first check if the strings are different lengths and return false if they are
        return false;
    }

    //create a character count for the string
    var str1Count = {}; //create an dictionary 
    Array.prototype.forEach.call(str1, function(ch) { 
        // Array -> A variable (constant) constructor
        // prototype -> Adding a method
        // forEach -> Performs the method specified in the 'callbackfn' parameter for each element in an array
        // .call -> calls a method for the 'Array' object, substituting another object for the specified object
        str1Count[ch] = str1Count[ch] ? 1 + str1Count[ch] : 1; //here we populate the str1Count dictionary with keys equal to each letter in str1 and values equal to the 
        //number of letters of that type
        console.log('str1Count: ', str1Count);
        //{ d: 1, o: 1, g: 1 }
    });

    // compare the character count with the second string 
    var str2len = str2.length;
    for (var i = 0; i < str2len; i++ ) {
        if(!str1Count[str2[i]]) { //if the letter isn't in the str1Count dictionary, or the value at that letter is 0, returns false
            console.log('str2[i] at false:', str2[i])
            // str2[i] at false: b
            console.log('str1Count at false: ', str1Count) 
            // { f: 1, o: 2 }
            return false; 

        } else { //If the letter at str2[i] is in the str1Count dictionary AND it isn't 0, we decrement that value by 1.
            console.log('str1Count at for loop: ', str1Count)
            str1Count[str2[i]] -=1; 
        }
    }
    return true;
}
console.log('isPermutation2: ', isPermutation2('dog', 'god'));
console.log('isPErmutation2: ', isPermutation2('foo', 'bar'));
console.time('isPermutation2()')
isPermutation('dog', 'god');
console.timeEnd('isPermutation2()')
// Create a function that:
// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Trim whitespace prior to comparison.

function isAnagram(strOne,strTwo){
    const newOne = strOne.replace(/\s+/g,'').toLowerCase().split('');
    let newTwo = strTwo.replace(/\s+/g,'').toLowerCase().split('');

    if (newOne.length === newTwo.length){
        for (i = 0; i < newOne.length; i++){
            const index = newTwo.indexOf(newOne[i]);
            if (index !== -1) {
                newTwo.splice(index, 1);
            }
            else {
                return false;
            }
        };
        return true;
    } else {
        return false;
    };
};


isAnagram('Astronomer','Moon starer');
isAnagram('School master', 'The classroom');
isAnagram('The Morse Code','Here come dots');

isAnagram('as','amn ');
isAnagram('astronomet','moon starer');
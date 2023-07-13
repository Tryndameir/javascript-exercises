const reverseString = function(words) {
    let newString = [];
    let n = words.length;
    let i = 0;
    for (i = 0; i < n; i++)
    {
        newString[n - (i + 1)] = words[i];
    }
    newString = newString.toString();
    return newString;
    
};

reverseString("go");

// Do not edit below this line
module.exports = reverseString;

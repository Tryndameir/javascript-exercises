function repeatString(word, amount) {
    let i = 0;
    let newWord = "";

    if (amount >= 0)
    {
        for (i = 0; i < amount; i++)
        {
            newWord = newWord + word;
        }
    return newWord;
    }
    else return "ERROR";
    
}
repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;

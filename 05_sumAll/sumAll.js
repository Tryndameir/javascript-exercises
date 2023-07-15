const sumAll = function(num1, num2) { //1 + 2 + 3 + 4 = 10;
    let x = num1;
    let y = num2;
    if (isNaN(x, y))
    {
        return 'ERROR';
    }
    let a = 0;
    let b = 0;
    if (x > y) 
    {
        a = y;
        b = x;
    }
    else 
    {
        a = x;
        b = y;
    }

    let n = b - a;
    let i = 0;
    let sum = 0;
    for (i; i < n + 1; i++)
    {
        sum = a + sum;
        a++;
    }

    return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;

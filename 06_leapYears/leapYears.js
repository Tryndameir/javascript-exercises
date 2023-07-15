const leapYears = function(year) {
    if (typeof(year) != 'number') //test if year is a number
    {
        return "ERROR";
    }

    if (year < 0) //test if year is a positive number
    {
        return "ERROR";
    }

    if (year % 4 != 0)
    {
        return false;
    }

    if (year % 4 == 0 && year % 100 != 0) //if year is divisible by 4 return and NOT divisible by 100
    {
        return true;
    }

    if (year % 100 == 0) //if year is divisible by 100 then further divide by 400. if true year is leap year
    {
        if (year % 400 == 0)
        {
            return true;
        }

        else // if year is not divisible by 400 then i snot leap year
        {
            return false;
        }
    }

};

leapYears(1900);

// Do not edit below this line
module.exports = leapYears;

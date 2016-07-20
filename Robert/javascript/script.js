function arrayCities(char)
{
    var cities = ["Londra","Paris","Oslo","Roma","Madrid","Larnaca","Atena","Viena","Berlin","Dublin"];
    var text   = "<h3>Lista capitale:</h3>" + cities + "<h4>Capitale care incep cu aceeasi litera: </h4>";
    var i;

    for(i =0; i < cities.length; i++)
    {
        var firstChar = cities[i].charAt(0);

        if (firstChar == char)
        {
            text += cities[i] + "; ";
        }
    }

    document.getElementById('cities').innerHTML = text;
}

arrayCities('L');

function arrayNumbers()
{
    var numbers = [1,3,6,2,10,9,7];
    var i;
    var j;

    for (i=0; i < numbers.length-1; i++)
    {
        for (j = 0; j < numbers.length-1; j++ )
        {
            if (numbers[j] > numbers[j+1])
            {
                var temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }

    }
    console.log(numbers);
}
arrayNumbers();





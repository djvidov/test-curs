function area(numberOfSides, lengthOfSide)
{
    var result;
  if (numberOfSides == 3)
  {
      result = lengthOfSide * lengthOfSide * Math.sqrt(3)/4;
      return document.getElementById("rezultat").innerHTML = result;
  }
  else if (numberOfSides == 4)
  {
      result = lengthOfSide * lengthOfSide;
      return document.getElementById("rezultat").innerHTML = result;
  }
  else if (numberOfSides == 5 || numberOfSides == 6)
  {
      result =  numberOfSides * lengthOfSide * lengthOfSide *1/Math.tan(3.14/numberOfSides)
      return document.getElementById("rezultat").innerHTML = result;
  }
    else
  {
      result = "Forma geometrica invalida";
      return document.getElementById("rezultat").innerHTML = result;
  }
}

function calculus(n1, n2, op)
{
    if (op == 1) {
        document.getElementById("rezultat2").innerHTML =  Number(n1) + Number(n2);
    }
    else if(op == 2)
    {
        document.getElementById("rezultat2").innerHTML =  Number(n1) - Number(n2);
    }
    else if(op == 3)
    {
        document.getElementById("rezultat2").innerHTML =  Number(n1) * Number(n2);
    }
    else if(op == 4)
    {
        document.getElementById("rezultat2").innerHTML =  Number(n1) / Number(n2);
    }
    else
    {
        document.getElementById("rezultat2").innerHTML =  "Operatie matematica necunoscuta";
    }
}

function showArray(n1, n2, n3)
{
    var arrayAsc = [n1, n2, n3];
    var result = arrayAsc.sort();
    document.getElementById("rezultat3").innerHTML = result;
}

// functiile imi returneaza rezultatul intr-un html
// acesta poate fi afisat si in consola?
var area1 = area(3, 5);
var area2 = area(6, 7);

var calculus1 = calculus(3,2,1);
var calculus1 = calculus(5,4,3);

var showArray1 = showArray(4,8,5);
var showArray2 = showArray(10,11,6);



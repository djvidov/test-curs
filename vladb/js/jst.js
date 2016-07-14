//////////////////////////TEMA 2
function perimetru(elementId1, elementId2) {
    if (elementId1 == undefined) {
        var lat = 33;
        var forma = 6;
    }
    else {
        var lat = parseInt(document.getElementById(elementId1).value);
        var forma = parseInt(document.getElementById(elementId2).value);
    }
    var perim;
    switch (forma) {
    case 3:
        perim = forma * lat;
        break;
    case 4:
        perim = forma * lat;
        break;
    case 5:
        perim = forma * lat;
        break;
    case 6:
        perim = forma * lat;
        break;
    }
    if (elementId1 !== undefined) {
        alert(perim);
    }
    return perim;
}
var func1 = perimetru();

function calcule(elementId1, elementId2, elementId3) {
    if (elementId1 == undefined) {
        var x = 44;
        var y = 66;
        var calc = "3";
    }
    else {
        var calc = document.getElementById(elementId1).value;
        var x = parseInt(document.getElementById(elementId2).value);
        var y = parseInt(document.getElementById(elementId3).value);
    }
    var mate;
    switch (calc) {
    case "1":
        mate = x + y;
        break;
    case "2":
        mate = x - y;
        break;
    case "3":
        mate = x * y;
        break;
    case "4":
        mate = x / y;
        break;
    }
    if (elementId1 !== undefined) {
        alert('rezultatul este : ' + mate);
    }
    return mate;
}

function cresc(elementId1, elementId2, elementId3) {
    if (elementId1 == undefined) {
        var a = 55;
        var b = 244;
        var c = 2;
    }
    else {
        var a = parseInt(document.getElementById(elementId1).value);
        var b = parseInt(document.getElementById(elementId2).value);
        var c = parseInt(document.getElementById(elementId3).value);
    }
    var s;
    if (a > b) {
        s = a;
        a = b;
        b = s;
    }
    if (a > c) {
        s = c;
        c = a;
        a = s;
    }
    if (b > c) {
        s = b;
        b = c;
        c = s;
    }
    var crescator = [a, b, c];
    if (elementId1 !== undefined) {
        alert(crescator);
    }
    return crescator;
}
var func3 = cresc();
var func2 = calcule();
var func1 = perimetru();
////////////////////////////////////////////tema 3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function afisCap(elementId) {
    var cap = ["Bucuresti", "Londra", "Perlin", "Paris", "Mbabane", "Atena", "Roma", "Madrid", "Berna", "Brussels"];
    var text = "";
    var i;
    var litera = document.getElementById(elementId).value;
    litera = litera.toUpperCase();
    for (i = 0; i < cap.length; i++) {
        if (cap[i].toUpperCase().indexOf(litera) == 0) {
            text += cap[i] + "<br/>";
        }
    }
    document.getElementById("capList").innerHTML = text;
}
var array = [];

function disarrayAray(elementId1) {
    var listsorted = document.getElementById("arrayList").innerHTML;
    var maybe = document.querySelector('input[name="function"]:checked'); ///pune in array sau sort
    var i; /// pt for
    var j; ///pt for
    var s; ////pentru schimbarea locurilor
    var text1 = ""; ///pentru ordonat
    var text2 = ""; ///pentru neordonat
    if (document.getElementById('add').checked) {
        var imput = parseInt(document.getElementById(elementId1).value);
        array.push(imput);
        for (i = 0; i < array.length; i++) {
            text2 += " " + array[i];
        }
        document.getElementById("arrayList").innerHTML = text2;
    }
    else {
        for (i = 0; i <= array.length - 2; i++) {
            for (j = i + 1; j <= array.length - 1; j++) {
                if (array[i] > array[j]) {
                    s = array[i];
                    array[i] = array[j];
                    array[j] = s;
                }
            }
        }
        text1 = "";
        for (i = 0; i < array.length; i++) {
            text1 += array[i] + " ";
        }
        document.getElementById("arraysort").innerHTML = text1;
    }
}

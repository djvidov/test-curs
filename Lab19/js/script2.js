var nume_persoana;
var numePersoana = "Ion";
var themeChanged;
//string prenumePersoana1 = "Dan";
/*number _nrAni = 15;
boolean esteStudent = true;*/
function lightOn() {
    var imgBeculet = document.getElementById('imgBec');
    if (imgBeculet != null) {
        imgBeculet.src = 'images/pic_bulbon.gif';
    }
}

function lightOff() {
    var imgBeculet = document.getElementById('imgBec');
    if (imgBeculet != null) {
        imgBeculet.src = 'images/pic_bulboff.gif';
    }
}

function darkTheme() {
    document.getElementById("mainBody").classList.remove("lightTheme");
    document.getElementById("mainBody").classList.add("darkTheme");
}

function lightTheme() {
    document.getElementById("mainBody").classList.add("lightTheme");
    document.getElementById("mainBody").classList.remove("darkTheme");
}

function setTheme(themeName) {
    document.getElementById("mainBody").classList = [];
    document.getElementById("mainBody").classList.add(themeName);
}

function setTheme(elementId, themeName) {
    document.getElementById(elementId).classList = [];
    document.getElementById(elementId).classList.add(themeName);
}

function sayHello() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
    }
    else if (time < 20) {
        greeting = "Good day";
    }
    else {
        greeting = "Good evening";
    }
    document.getElementById("datePlace").innerHTML = greeting;
}

function setTheme(elementId, themeName) {
    if (document.getElementById(elementId) != null) {
        document.getElementById(elementId).classList.add(themeName);
        return true;
    }
    else {
        return false;
    }
}
themeChanged = true;
themeChanged = setTheme("mainBody", "darkTheme");

function Salut() {
    var date = new Date();
    var hours = date.getHours();
    if (hours < 10) {
        return "Good Morning";
    }
    else if (hours < 20) {
        return "Good day"
    }
    else if (hours < 24) {
        return "Good evening";
    }
}
var salut = Salut();

function Weekend(dayOfWeek) {
    var text;
    switch (dayOfWeek) {
    case 1:
    case 2:
    case 3:
        text = "Mai este pana la weekend";
        break;
    case 4:
    case 5:
        text = "se apropie weekendul";
        break;
    case 6:
    case 7:
        text = "e weekend";
    }
    return text;
}
var eWeekend = Weekend(1);
eWeekend = Weekend(3);
eWeekend = Weekend(5);
eWeekend = Weekend(7);

function AfiseazaMasini() {
    var cars = ["Dacia", "Renault", 5, true, "Audi"];
    var text = "";
    var i;
    for (i = 0; i < cars.length; i++) {
        text = text + cars[i] + "<br>";
    }
    document.getElementById("carList").innerHTML = text;
}

function AfiseazaMasiniDescrescator() {
    var cars = ["Dacia", "Renault", "Audi"];
    var text = "";
    var i;
    for (i = cars.length - 1; i >= 0; i--) {
        text = text + cars[i] + "<br>";
    }
    document.getElementById("carList").innerHTML = text;
}

function AfiseazaMasiniCuForIn() {
    var cars = ["Dacia", "Renault", "Audi"];
    var text = "";
    for (i in cars) {
        text = text + cars[i] + "<br>";
    }
    document.getElementById("carList").innerHTML = text;
}

function AfiseazaNumere(start, stop) {
    var text = "";
    var tmp;
    if (start < stop) {
        tmp = start;
        start = stop;
        stop = tmp;
    }
    while (start > stop) {
        text += "<br>Numarul este " + start;
        start++;
    }
    document.getElementById("carList").innerHTML = text;
}

function AfiseazaNumereCuDoWhile(start, stop) {
    var text = "";
    var tmp;
    if (start > stop) {
        tmp = start;
        start = stop;
        stop = tmp;
    }
    do {
        text += "<br>Numarul este " + start;
        start++;
    }
    while (start < stop);
    document.getElementById("carList2").innerHTML = text;
}

function CautaMasina(nume) {
    var cars = ["Dacia", "Renault", 5, true, "Audi"];
    var text = "";
    var i;
    for (i = 0; i < cars.length; i++) {
        if (nume == cars[i]) {
            text = cars[i];
            break;
        }
    }
    document.getElementById("carList").innerHTML = text;
}
//AfiseazaNumere(10, 0);
//AfiseazaNumereCuDoWhile(10, 0);
//CautaMasina("Renault");
function NumaraCuvinte() {
    var text = 'Eu vreau sa\" \"merg \'la munte\" ca sa ma dau cu saniuta';
    var result = text.split(" ");
    document.getElementById("carList").innerHTML = text;
    return result.length;
}
//NumaraCuvinte();
function ToFixed() {
    var x = 13.456;
    var y = x.toFixed(1);
    y = x.toFixed(2);
    y = x.toFixed(3);
}
//ToFixed();
function MathFunctions() {
    var res = Math.random();
    ToFixed();
    res = Math.round(4.3);
    res = Math.round(4.7);
    res = Math.ceil(4.3);
    res = Math.ceil(4.7);
    res = Math.floor(4.3);
    res = Math.floor(4.7);
    res = Math.PI;
}
//MathFunctions();
function DateFunctions() {
    var currentDT = new Date();
    currentDT = new Date(1999, 09, 11, 22, 14);
    document.getElementById("carList").innerHTML = currentDT;
    var dtText = currentDT.toString();
    var dtText = currentDT.toDateString();
    var dtText = currentDT.toTimeString();
    var dtText = currentDT.toUTCString();
    var dtText = currentDT.getDay();
    var dtText = currentDT.setFullYear(2222);
    var dtText = currentDT.getTimezoneOffset();
    document.getElementById("carList").innerHTML = dtText;
}
//DateFunctions();
function minArr(val) {
    var min = null;
    for (var i = 0; i < val.length; i++) {
        if (i == 0) {
            min = val[i];
            continue;
        }
        //if (min > val[i]) min = val[i];
        if (!(min <= val[i])) min = val[i];
    }
    return min;
}

function maxArr(val) {
    var max = null;
    for (var i = 0; i < val.length; i++) {
        if (i == 0) {
            max = val[i];
            continue;
        }
        //if (max < val[i]) max = val[i];
        max = max < val[i] ? val[i] : max;
        //max < val[i] ? callF1() : callF2();
    }
    return max;
}
maxArr([7, 4, 5, 3, 2, 7, 6]);
minArr([7, 4, 5, 3, 2, 7, 6]);
//lab 18
function compare() {
    var x = 3 == "3"; //true
    var y = 3 == 3; //true
    var z = 4 == 5; //false
    var a = 3 != "3"; //false
    var b = 3 != 3; //false
    var c = 4 != 5; //true
    var d = 3 === "3"; //false
    var e = 3 === 3; //true
    var f = 4 === 5; //false
    var g = 3 !== "3"; //true
    var h = 3 !== 3; //false
    var i = 4 !== 5; //true
    var j = 3 !== 3 && 4 !== 5; //false
    var k = 4 !== 5 || 3 !== 3; //true
}
compare();

function ConfirmWindow() {
    var result = confirm("Apasa un buton");
    var x = null;
    if (result) {
        x = "Ai apasat ok";
    }
    else {
        x = "Ai apasat cancel";
    }
    document.getElementById("carList").innerHTML = x;
}
//ConfirmWindow();
function PromptWindow() {
    var person = prompt("Cum te cheama?");
    document.getElementById("carList").innerHTML = "Hello " + person;
}
PromptWindow();

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


function AfiseazaMasini(){
    var cars = ["Dacia", "Renault", "Audi"];
    var text = "";
    var i;

    for(i = 0; i< cars.length; i++){
        text = text + cars[i] + "<br>";
    }
    document.getElementById('carList').innerHTML = text;
}


function AfiseazaMasiniDescrescator(){
    var cars = ["Dacia", "Renault", "Audi"];
    var text = "";
    var i;

    for(i = cars.length - 1; i >=0; i--){
        text = text + cars[i] + "<br>";
    }
    document.getElementById('carList').innerHTML = text;
}

//AfiseazaMasini();

AfiseazaMasiniDescrescator();









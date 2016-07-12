var nume_persoana;
var numePersoana = "Ion";
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

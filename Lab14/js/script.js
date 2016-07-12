function lightOn() {
    document.getElementById('lightImg').src = 'images/pic_bulbon.gif';
}

function lightOff() {
    document.getElementById('lightImg').src = 'images/pic_bulboff.gif';
}

function setLight() {
    document.getElementById("mainBody").classList.remove("darkTheme");
    document.getElementById("mainBody").classList.add("lightTheme");
}

function setDark() {
    document.getElementById("mainBody").classList.add("darkTheme");
    document.getElementById("mainBody").classList.remove("lightTheme");
}

function setTheme(elementId, themeName) {
    if (document.getElementById(elementId).classList != null) {
        document.getElementById(elementId).classList.add(themeName);
        return true;
    }
    else {
        return false;
    }
    //test
}

function lightOffWithValidation() {
    if (document.getElementById('lightImg')) {
        document.getElementById('lightImg').src = 'images/pic_bulboff.gif';
        return true;
    }
    else {
        return false;
    }
}

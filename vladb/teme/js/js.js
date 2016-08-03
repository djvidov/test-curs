/////////////////////lectia 1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function lightOff() {
    var bec = document.getElementById("imgBec");
        if (bec !== null) {
            bec.src = "images/pic_bulboff.gif";
     }
}

function lightOn() {
    var bec = document.getElementById("imgBec");
        if (bec !== null) {
            bec.src = "images/pic_bulbon.gif";
     }
}



function setLight() {
    document.getElementById("mainBody").classList.remove("darkTheme");
    document.getElementById("mainBody").classList.add("lightTheme");
}

function setDark() {
    document.getElementById("mainBody").classList.add("darkTheme");
    document.getElementById("mainBody").classList.remove("lightTheme");
}

/*function setTheme(elementId, themeName) {
    if (document.getElementById(elementId).classList != null) {
        document.getElementById(elementId).classList.add(themeName);
        return true;
    }
    else {
        return false;
    }
 
}
*/

/////////////////////////////////// lectia 2

var themeChanged = setTheme("mainBody", "box") ///sets the style of the div sa fie mereu box

function setTheme(elementId, themeName1, themeName2){
    if(document.getElementById(elementId) !== null){
        document.getElementById(elementId).classList.remove(themeName2);
        document.getElementById(elementId).classList.add(themeName1);
        return true;
            
    }
    else{
        return false;
    }
}



function Salut(){
    var date = new Date();
    var hours = date.getHours();
    if(hours < 10){
        return "good morning";
    }
    else if(hours < 20){
        return "good day";
    }
    else if(hours < 24){
        return "go to sleep";
    }
    
}
var salut = Salut();


function Weekend(dayOfWeek) {
    var text;
    switch(dayOfWeek) {
        case 1:
        case 2:
        case 3:
            text = "Mai este pana la weekend"
            break;
        case 4:
        case 5:
            text = "se aproprie weekendul"
            break;
        case 6:
        case 7:
        text = "e weekend"
        
    }
    var text;
}
var eWeekend = Weekend(1);
eWeekend = Weekend(2);
eWeekend = Weekend(3);
eWeekend = Weekend(4);
eWeekend = Weekend(5);
eWeekend = Weekend(6);
eWeekend = Weekend(7);


//////////////////////////////////////////////////////////////lectia 3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function afisMasini(){
    var cars = ["dacie","renaut",5,true,"Audi"];
    var text ="";
    var i;

    for (i=0; i < cars.length; i++) {
        text += cars[i] + "<br/>";
    }
        
    document.getElementById("carList").innerHTML = text;
    }

    afisMasini();


function afisMasiniDesc(){
    var cars = ["dacie","renaut","Audi"];
    var text ="";
    var i;

    for (i =cars.length -1; i>=0; i--) {
        text += cars[i] + "<br/>";
    }
        
    document.getElementById("carListD").innerHTML = text;
    }
        
    afisMasiniDesc();


        

function afisMasiniForIn(){
    var cars = ["dacie","renaut","Audi"];
    var text ="";


    for (i in cars) {
        text += cars[i] + "<br/>";
    }

    document.getElementById("carListFI").innerHTML = text;
    }

    afisMasiniForIn();




function afisNum(){
    var text = "";
    var start = 15;
    var stop = 20;
    while(start < stop){
        text += "<br/> Numarul este care este" + start;
        start++

    }
    document.getElementById("carListW").innerHTML =text;
}

afisNum();

function afisNumDW(start,stop){
    var text = "";
    var min;
    if(start > stop){
        min = start;
        start = stop;
        stop = min;
    }
   do{
        text += "<br/> Numarul este care este" + start;
        start++
        
    }while(start < stop);
    document.getElementById("carListDW").innerHTML =text;
}

afisNumDW(5,0);


        

    function cautaMasini(nume){
    var cars = ["dacie","renaut","Audi"];
    var text ="";
    var i;

    for (i =0; i<cars.length; i++) {
        if(nume == cars[i]){
            text = cars[i];
            break;
        }


    }
          document.getElementById("cCarList").innerHTML = text;

    }
    cautaMasini("Audi");

/////////////////////////////////////////////////////////////lectia 4\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



function MasiniCuContinue(){
    var cars = ["dacie","renaut",5,true,"Audi"];
    var text ="";
    var i;

    for (i=0; i < cars.length; i++) {
        if(typeof cars[i] != "string"){
            continue;
        }
        text += cars[i] + "<br/>";
    }

    document.getElementById("carListCont").innerHTML = text;
    }

    MasiniCuContinue();


function getPersoana(){
    var persoana = {
        nume: "ion",
        prenume: "vasili",
        datanasterii: "1900.01.01",
        ochi:{
            culoare: "mov cu bulinute",
            culoare_pupila: "gri"
        }
    };
   var el = document.getElementById("persoana");
    el.innerHTML = "  ---" + persoana.nume + ", " + persoana.prenume + " are culoare ochilor " + persoana.ochi.culoare;
}

getPersoana();


function getString(){
    var str = "avion cu motor daca zbor o sa te omor....";
    var pos1 = str.indexOf("cu");
    var pos2 = str.lastIndexOf("sa");
    var pos3 = str.search("te");
    var pos4 = str.slice(7, 13);
    var pos5 = str.substring(7, 12);
    var pos5 = str.substr(7, 12);


    var el = document.getElementById("string");
    el.innerHTML = pos1 + " "+ pos2 + " " + pos3 + " " + pos4 + " " + pos5 + " " + pos5;
}

getString();





































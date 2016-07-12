/////////////////////lectia 1 

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

//////////////////////////TEMA 2


function perimetru (elementId1, elementId2) {
    if (elementId1 == undefined) { 
        var lat = 33;
        var forma = 6;
        
    }
    else{
    var lat = parseInt(document.getElementById(elementId1).value);
    var forma = parseInt(document.getElementById(elementId2).value);
    }
    var perim;
     switch(forma){
        
        case 3:             
            
             perim =forma * lat;
             
            break;
        
         case 4:  
             perim =forma * lat;
             
            break;
        
         case 5: 
             perim =forma * lat;
             
            break;
            
        
         case 6: 
             perim =forma * lat;
             
            break;            
        
    }
    if (elementId1 !== undefined){
        alert(perim);
    }
   return perim;     
}

var func1 = perimetru();

function calcule(elementId1, elementId2, elementId3){
     if (elementId1 == undefined) { 
        var x= 44;
         var y =66;
        var calc ="3";
    }
    else{
    var calc = document.getElementById(elementId1).value;
    var x = parseInt(document.getElementById(elementId2).value);
    var y = parseInt(document.getElementById(elementId3).value);
    }
    var mate;
    
     switch(calc){
        
        case "1":             
            
             mate = x + y;
             
            break;
        
         case "2":  mate = x - y;
             
            break;
        
         case "3": mate = x * y;
             
            break;
            
        
         case "4":  mate = x / y;
             
            break;
                
    }
     if (elementId1 !== undefined) {
    alert('rezultatul este : '+ mate);
     }
   return mate;
}


 function cresc(elementId1, elementId2, elementId3){
     if (elementId1 == undefined){
         var a = 55;
         var b = 244;
         var c = 2;
     }
    else{
    var a = parseInt(document.getElementById(elementId1).value);
    var b = parseInt(document.getElementById(elementId2).value);
    var c = parseInt(document.getElementById(elementId3).value);
    }
    var s;
     if(a>b)
          {
             s = a;
             a = b;
             b = s;
         }
     if (a>c)
      {
          s = c;
          c = a;
          a = s;
          
      }
     if(b>c){
         
             s = b;
             b = c;
             c = s;
        }
     var crescator = [ a, b ,c];
     if(elementId1 !== undefined){
     alert(crescator);
     }
     
     return crescator;
     
 }
var func3 =cresc();
var func2 =calcule();
var func1 = perimetru();
     
     
     
     
    
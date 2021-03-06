function laadoua(nr) {
	document.getElementById('laputere').value = nr * nr;
}

function ariap(latura) {
	document.getElementById('ariap').value = latura * latura;
}

function perimp(lat) {
	document.getElementById('perimp').value = lat * 4;
}

function schimbPoza() {
	var buton = btnStDr.value;
	//alert(clasa);
	if (buton == "   Mută poza >>") {
		document.getElementById("btnStDr").classList = [];
		document.getElementById("btnStDr").classList.add("btnSt");
		document.getElementById("btnStDr").value = "<< Mută poza   ";
		document.getElementById("pozaSt").innerHTML = "";
		document.getElementById("pozaDr").innerHTML = '<img id="pokemon" src="resurse/snorlax.gif">';
	} else {
		document.getElementById("btnStDr").classList = [];
		document.getElementById("btnStDr").classList.add("btnDr");
		document.getElementById("btnStDr").value = "   Mută poza >>";
		document.getElementById("pozaDr").innerHTML = "";
		document.getElementById("pozaSt").innerHTML = '<img id="pokemon" src="resurse/snorlax.gif">';
	}
}

function perimFig(l, n) {
	var pfg = l * n;
	var forma = "";
	switch (n) {
	case "3":
		forma = "triunghiului";
		break;
	case "4":
		forma = "pătratului";
		break;
	case "5":
		forma = "pentagonului";
		break;
	case "6":
		forma = "hexagonului";
	}

	document.getElementById('perimGeo').innerHTML = "Perimetrul " + forma + " este " + pfg;
}

function aritmetic(a, x, b) {
	var op = eval(a + x + b);
	document.getElementById('rezultat').innerHTML = op;
}

function ordonareC(a, b, c) {
	var op = [a, b, c];
	op.sort(function (x, y) {
		return x - y
	});
	document.getElementById('ordC').innerHTML = op;
}

function filtrareC(litera) {
	var capitE = ["Amsterdam",
				"Atena",
				"Berlin",
				"București",
				"Lisabona",
				"Londra",
				"Luxemburg",
				"Madrid",
				"Paris",
				"Roma"];
	var txt = "";
	var x;
	for (x in capitE) {
		if (capitE[x].indexOf(litera.toUpperCase()) !== 0) {
			continue;
		} else {
			txt += capitE[x] + ", ";
		}
	}
	if (txt == "") {
		txt = "Nu există nume de capitale care să înceapă cu litera „" + litera + "”";
	}
	document.getElementById("filtruCE").innerHTML = txt;
}

function generare(arrNr) {
	var arrGen = [];
	for (i = 0; i < arrNr; i++) {
		arrGen[i] = Math.floor(Math.random() * 100);
	}
	document.getElementById("rndArr").innerHTML = arrGen;
}

function sort(arrGen) {
	var ord = arrGen.split(",");
	ord.sort(function (x, y) {
		return x - y
	});
	document.getElementById('arrOrd').innerHTML = ord;
}

function strTaiat(a, x) {
	var strArr = [];
	var y = Math.ceil(a.length / x);
	var txt = "";
	for (i = 0; i < x; i++) {
		strArr[i] = a.substr(i * y, y);
		txt += strArr[i] + "<br>"
	}
	document.getElementById('taieStr').innerHTML = txt;
}

function ordNrCar() {
	var grupaMare = [
		"Ovidiu - prof",
		"Cristi - înțelept",
		"Robert - cool",
		"Ionuț - biker",
		"Dodo - profesionist",
		"Vlad - îndemânatic",
		"Ligia - isteață",
		"Alexandra - delicată",
		"Adriana - simpatică",
		"Oana - descurcăreață"
	];
	var temp;
	var txt = "<ol>";
	grupaMare.push("");
	for (x = 0; x < grupaMare.length - 1; x++) {
		for (i = 0; i < (grupaMare.length - 1); i++) {
			if (grupaMare[i].length > grupaMare[i + 1].length) {
				temp = grupaMare[i];
				grupaMare[i] = grupaMare[i + 1];
				grupaMare[i + 1] = temp;
			}
		}
	}
	grupaMare.splice(0, 1);
	for (a = 0; a < grupaMare.length; a++) {
		txt += "<li>" + grupaMare[a] + "</li>";
	}
	txt += "</ol>";
	document.getElementById('arrNrCar').innerHTML = txt;
}

function genMin() {
	var nrRand = [];
	for (i = 0; i < 5; i++) {
		nrRand[i] = Math.floor(Math.random() * 100);
		if (i > 0) { //verific dacă numărul e unic
			for (a = i - 1; a >= 0; a--) {
				if (nrRand[i] === nrRand[a]) {
					nrRand[i] = Math.floor(Math.random() * 100);
				}
			}
		}
	}
	document.getElementById('rndNr').innerHTML = nrRand;
	var txt;
	txt = "Numărul cel mai mic este:<br>" + Math.min(...nrRand);
	document.getElementById('rndMin').innerHTML = txt;
	txt = "Numărul cel mai mare este:<br>" + Math.max(...nrRand);
	document.getElementById('rndMax').innerHTML = txt;
}

function nrRotund(nr001, nr002) {
	var num = parseFloat(nr001);
	var zec = parseInt(nr002);
	var n = num.toFixed(zec);
	document.getElementById('nrRot').innerHTML = "Numărul rotunjit este: " + n;
	document.getElementById('nrSus').innerHTML = "Numărul rotunjit prin adăugare este: " + Math.ceil(n);
	document.getElementById('nrJos').innerHTML = "Numărul rotunjit prin scădere este:  " + Math.floor(n);
}

function divCuText() {
	var divNou = document.createElement("DIV");
	var text = document.createTextNode("Acesta e un div nou");
	divNou.appendChild(text);
	document.getElementById('probe1').appendChild(divNou);
}

function remLi() {
	var lista = document.getElementById("oLista");

	if (lista.hasChildNodes()) {
		lista.removeChild(lista.childNodes[1]); //Primul child este indentarea, deci primul articol are index[1]
	}
}

function repLi() {
	var p = document.getElementById("ptReplace");
	var articolText = document.createTextNode("Textul a fost înlocuit.");
	p.replaceChild(articolText, p.childNodes[0]);
}

function daAtribut() {
	var p = document.getElementById("ptReplace");
	var att = document.createAttribute("class");
	att.value = "btnDr";
	p.setAttributeNode(att);
}

function cautClass() {
	var x = document.getElementsByClassName("btnDr");
	for (i = 0; i < x.length; i++) {
		if (x[i].tagName = "P") {
			x[i].innerHTML = "Iar am schimbat textul.";
			x[i].classList.add("btnSt");
		}
	}
}

function cautNume() {
	var x = document.getElementsByName("btnNume");
	x[0].classList.add("btnDr");
}

function cautTagName() {
	var x = document.getElementsByTagName("DIV");
	document.getElementById("ptDivuri").innerHTML = "În acest document sunt " + x.length + " div-uri.";
}

function numLink() {
	var x = document.links.length;
	document.getElementById("ptLink").innerHTML = "În acest document sunt " + x + " link-uri.";
}

function nuClick() {
	document.getElementById("btnClick").click();
	var txt = "Dimensiunile acestui buton sunt: " + btnClick.clientWidth + " x " + btnClick.clientHeight + " pixeli.";
	document.getElementById("ptDimensiuni").innerHTML = txt;
}

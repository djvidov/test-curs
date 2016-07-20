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

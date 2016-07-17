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
	//var clasa = document.getElementsByClassName("btnDr");
	//alert(clasa);
	//if (clasa == "btnDr") {
	document.getElementById("btnStDr").classList = [];
	document.getElementById("btnStDr").classList.add("btnSt");
	document.getElementById("btnStDr").value = "<< Mută poza   ";
	document.getElementById("pozaSt").innerHTML = "";
	document.getElementById("pozaDr").innerHTML = '<img id="pokemon" src="resurse/snorlax.gif">';
	//} else {
	//document.getElementById("btnStDr").classList = [];
	//document.getElementById("btnStDr").classList.add("btnDr");
	//document.getElementById("btnStDr").value = "   Mută poza >>";
	//document.getElementById("pozaDr").innerHTML = "";
	//document.getElementById("pozaSt").innerHTML = '<img id="pokemon" src="resurse/snorlax.gif">';
	//}
}

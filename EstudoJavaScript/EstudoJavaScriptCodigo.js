/**
 * 
 */

function myFunction() {
	document.getElementById("subTitulo").innerHTML = "Mudei o subtitulo com script externo";
}

function dadosComInnerHTML() {
	document.getElementById("fraseQualquer").innerHTML = 
		"Inserção de dados, com .innerHTML, mudei uma frase qualquer";
}

function declaracoesEmJavaScript(){
	var x, y, z;
	x = 5;
	y = 5;
	z = x + y;
	
	var frase = "Teste de declaração de variáveis. 5 + 5 = ";
	
	window.alert(frase + z);

}
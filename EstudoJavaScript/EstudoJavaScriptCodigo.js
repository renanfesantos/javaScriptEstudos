/**
 * 
 */

function myFunction() {
	document.getElementById("subTitulo").innerHTML = "Mudei o subtitulo com script externo";
}

function dadosComInnerHTML() {
	document.getElementById("fraseQualquer").innerHTML = "Inserção de dados, com .innerHTML, mudei uma frase qualquer";
}

function declaracoesEmJavaScript() {
	var x, y, z;
	x = 5;
	y = 5;
	z = x + y;

	var frase = "Teste de declara\ç\ão de vari\áveis. 5 + 5 = ";

	window.alert(frase + z);
}

function funcaoComParametroERetorno(num1, num2) {
	return num1 * num2;
}

function testeForArray() {
	var i, texto, arrayPessoas;
	arrayPessoas = [ "Andr/é", "Marlon", "Jailson", "Daniel" ];
	texto = "<ul>";
	for (i = 0; i < (arrayPessoas.length); i++) {
		texto = texto + "<li>" + arrayPessoas[i] + "</li>";
	}
	texto += "</ul>";
	
	return texto;
}

function testeForEachArray(){
	var arrayPessoas, texto;
	
	arrayPessoas = [ "Andr/é FE", "Marlon FE", "Jailson FE", "Daniel FE" ];
	
	texto = "<ul>";
	//adiciona novo elemento
	arrayPessoas.push("ElementoNovo");
	//também adiciona novo elemento
	arrayPessoas[arrayPessoas.length] = "NovoElemento";
	//ordena elementos no array
	arrayPessoas.sort();
	
	arrayPessoas.forEach(montaTexto);
	
	function montaTexto(valor){
		texto += "<li>"+valor+"</li>";
	}
	texto += "</ul>";
	return texto;
}

function declaraObjetos() {
	// declaração de objetos
	var pessoa = {
		nome : "Jo\ão",
		idade : 25,
		Sexo : "M"
	}

	// declaração de array
	var carros = [ "Gol", "P\álio", "Corsa" ];

}

function condicionais() {
	var endereco = {
		rua : "S\ão Paulo",
		numero : 25,
		cep : 89025000,
		cidade : "Blumenau",
		estado : "Santa Catarina",
		pais : "Brasil",
		enderecoCompleto : function() {
			return this.pais + ", " + this.estado + ", " + this.cidade
					+ ", rua " + this.rua + ", n\úmero " + this.numero
		}
	}
	// testes condicionais
	if (endereco.rua == "S\ão Paulo") {
		window.alert(" estamos na rua " + endereco.rua);
	}

	if (endereco.numero != 35) {
		window.alert("N\úmero n\ão \é 35 e sim " + endereco.numero);

	}

	window.alert("Endere\ço completo: " + endereco.enderecoCompleto());

}
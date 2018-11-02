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

function funcaoComParametroERetorno(num1, num2){
	return num1 * num2;
}

function declaraObjetos() {
	// declaração de objetos
	var pessoa = {
			nome: "João",
			idade: 25,
			Sexo: "M"
	}
	
	// declaração de array
	var carros = ["Gol", "Pálio", "Corsa"];
	
}

function condicionais(){
	var endereco = {
			rua: "São Paulo",
			numero: 25,
			cep: 89025000
	}
	// testes condicionais
	if (endereco.rua == "São Paulo"){
		window.alert(" estamos na rua "+endereco.rua);
	}
	
	if (endereco.numero != 35){
		window.alert("Numero não é 35 e sim "+endereco.numero);
		
	}
}
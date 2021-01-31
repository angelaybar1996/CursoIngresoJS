/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

 


function sumar()
{	var num1= parseInt(document.getElementById("txtIdNumeroUno").value,10);
    var num2 = parseInt(document.getElementById("txtIdNumeroDos").value,10);
	var resultado= num1 + num2;
	alert("La suma es "+resultado);	
	
}

function restar()
{
	var num1= parseInt(document.getElementById("txtIdNumeroUno").value,10);
    var num2 = parseInt(document.getElementById("txtIdNumeroDos").value,10);
	var resultado= num1 - num2;
	alert("La resta es "+resultado);	
	
}

function multiplicar()
{ 
	var num1= parseInt(document.getElementById("txtIdNumeroUno").value,10);
    var num2 = parseInt(document.getElementById("txtIdNumeroDos").value,10);
	var resultado= num1 * num2;
	alert("La multiplicación es "+resultado);
}

function dividir()
{
	var num1= parseInt(document.getElementById("txtIdNumeroUno").value,10);
    var num2 = parseInt(document.getElementById("txtIdNumeroDos").value,10);
	var resultado= num1 / num2;
	alert("El cociente es "+resultado);
}


/*
Angel Aybar Div A
Ejercicio 03 switch
al seleccionar un mes  informar.
si es Febrero: " Este mes no tiene m&aacute;s de 29 dias."
si NO es Febrero: "Este mes tiene 30 o m&aacute;s dias"*/

function mostrar()
{
	let mes;
	let mensaje;

	mes=document.getElementById("txtIdMes").value;

	switch (mes) 
	{
		case "Febrero":
		mensaje="Este mes no tiene más de 29 días";
		break;
		default:
		mensaje="Este mes tiene 30 o más días";
		break;
	}
	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN
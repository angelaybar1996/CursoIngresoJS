/*
Angel Aybar
Ejercicio 4 switch
al seleccionar un mes  informar.
si tiene 28 dias.
si tiene 30 dias.
si tiene 31 dias. */
function mostrar()
{
	let mes;
	let mensaje;

	mes= document.getElementById("txtIdMes").value;

	switch (mes) 
	{
		case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		mensaje="Este mes tiene 31 dias";
		break;
		case "Febrero":
		mensaje="Este mes tiene 28 dias";
		break;
		default:
		mensaje="Este mes tiene 30 días";
		break;
	}
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN
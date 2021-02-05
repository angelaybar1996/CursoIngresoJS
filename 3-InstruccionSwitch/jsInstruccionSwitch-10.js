function mostrar()
{
	let destino;
	let estacion;

	destino=document.getElementById("txtIdDestino").value;
	estacion=document.getElementById("txtIdEstacion").value;

	if (estacion=="Invierno") {
		switch (destino) {
			case "Bariloche":
				alert("Se viaja");
				break;
			default:
				alert("No se viaja");
				break;
		}	
	} else if (estacion=="Verano"){
		switch (destino) {
			case "Mar del plata":
			case "Cataratas":
				alert("Se viaja");
				break;
			default:
				alert("No se viaja");
				break;
		}
	} else if(estacion=="Primavera"){
		switch (destino) {
			case "Bariloche":
				alert("No se viaja");
				break;
			default:
				alert("Se viaja");
				break;
		}
	}else if (estacion=="Otoño"){
		switch (destino) {
			case "Bariloche":
			case "Cataratas":
			case "Cordoba":
			case "Mar del plata":
				alert("Se viaja");
				break;
		}
	}
	
}//FIN DE LA FUNCIÓN
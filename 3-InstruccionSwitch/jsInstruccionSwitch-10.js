function mostrar()
{
	let destino;
	let estacion;
	let mensaje;

	destino=document.getElementById("txtIdDestino").value;
	estacion=document.getElementById("txtIdEstacion").value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje="Se viaja";
				break;

				default:
					mensaje="No se viaja";
				break;
			}
		break;

		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje="Se viaja";
				break;

				default:
					mensaje="No se viaja";
				break;	
			}
		break;

		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensaje="No se viaja";
				break;

				default:
					mensaje="Se viaja";
				break;
			}
        break;
		
		case "Otoño":
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					mensaje="Se viaja";
				break;
			}
		break;
	}
	alert(mensaje);	
	
}//FIN DE LA FUNCIÓN


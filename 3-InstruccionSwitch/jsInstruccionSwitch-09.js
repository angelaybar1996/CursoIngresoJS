function mostrar()
{
	let estadia;
	let estacion;
	let destino;
	let porcentaje;
	let precioFinal;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;
	estadia=15000;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje=estadia*20/100;
				    precioFinal=estadia + porcentaje;
				break;

				case "Cataratas":
				case "Cordoba":
					porcentaje=estadia*10/100;
					precioFinal=estadia-porcentaje;
				break;
				
				case "Mar del Plata":
					porcentaje=estadia*20/100;
					precioFinal=estadia - porcentaje;
				break;	
			}
		break;

		case "Verano":
			switch (destino)
			{
				case "Bariloche":
					porcentaje=estadia*20/100;
					precioFinal=estadia-porcentaje;
				break;

			    case "Cataratas":
			    case "Cordoba":
				    porcentaje=estadia*10/100;
				    precioFinal=estadia + porcentaje; 
				break;

			    case "Mar del plata":
				    porcentaje=estadia*20/100;
				    precioFinal=estadia+porcentaje;
				break;
			}
		break;

		case "Otoño":
		case "Primavera":
			switch (destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje=estadia*10/100;
					precioFinal=estadia+porcentaje;
				break;

				case "Cordoba":
					precioFinal=estadia;
				break;
			}
		break;
	}
	alert("La tarifa es de $"+precioFinal);

	

}//FIN DE LA FUNCIÓN


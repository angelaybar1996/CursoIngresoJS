function mostrar()
{
	let estadia;
	let estacion;
	let destino;
	let descuento;
	let aumento;
	let precioFinal;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;
	estadia=15000;

	if (estacion=="Invierno") {
		switch (destino) {
			case "Bariloche":
				aumento=estadia*20/100;
				precioFinal=estadia + aumento;
				alert("La tarifa es de $"+precioFinal);
				break;
			case "Cataratas":
			case "Cordoba":
				descuento=estadia*10/100;
				precioFinal=estadia-descuento;
				alert("La tarifa es de $"+precioFinal);
				break;
			case "Mar del plata":
				descuento=estadia*20/100;
				precioFinal=estadia - descuento;
				alert("La tarifa es de $"+precioFinal);
		        break;	
		}
		
	} else if (estacion=="Verano") {
         switch (destino) {
			 case "Bariloche":
				 descuento=estadia*20/100;
				 precioFinal=estadia-descuento;
				 alert("La tarifa es de $"+precioFinal);
				 break;
			case "Cataratas":
			case "Cordoba":
				aumento=estadia*10/100;
				precioFinal=estadia + aumento;
				alert("La tarifa es de $"+precioFinal);
				break;
			case "Mar del plata":
				aumento=estadia*20/100;
				precioFinal=estadia+aumento;
				alert("La tarifa es de $"+precioFinal);
				break;	
		 }
	
	} else if(estacion =="Otoño" || estacion=="Primavera"){
        switch (destino) {
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
				aumento=estadia*10/100;
				precioFinal=estadia+aumento;
				alert("La tarifa es de $"+precioFinal);
				break;
			case "Cordoba":
				precioFinal=estadia;
				alert("La tarifa es de $"+precioFinal);
				break;
		}
	}

}//FIN DE LA FUNCIÓN
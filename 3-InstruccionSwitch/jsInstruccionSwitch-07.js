function mostrar()
{
	let destino;

	destino=document.getElementById("txtIdDestino").value;

	switch (destino) {
        case "Bariloche":
			alert("Oeste y Sur");
			break;
        case "Cataratas":
			alert("Norte y Este");
			break;
        case "Mar del plata":
			alert("Este");
			break;
        case "Ushuaia":
			alert("Sur");	
			break;
	}

}//FIN DE LA FUNCIÓN
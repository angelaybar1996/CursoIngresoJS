/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	let mensaje;
	
	do
	{
		clave=prompt("Ingrese la clave:");

		if(clave=="utn750")
		{
			mensaje="La clave es correcta, Bienvenido";
		}
		else
		{
			mensaje="La clave es incorrecta";
		}

		alert(mensaje);
	}while(clave!="utn750");
	
}//FIN DE LA FUNCIÓN

/*
 let clave;
  
 clave =prompt ("Ingrese clave:");

 while(clave!="utn750")
 {
	clave= prompt ("Ingrese clave:");
 }

 alert("La clave es correcta");
 */

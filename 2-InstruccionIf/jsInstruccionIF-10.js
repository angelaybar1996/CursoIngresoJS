function mostrar()
{
	let nota;
	let notaRandom;
	let maximo;
	let minimo;
	let mensaje;

	maximo=10;
	minimo=1;
	nota=Math.random()*(maximo-minimo)+minimo;
	notaRandom=Math.round(nota);

	if (notaRandom>8)
	{

		mensaje="EXCELENTE te sacaste un "+notaRandom;
		
	} 
	else 
	{
		if(notaRandom>3) 
		{

			mensaje="APROBÓ te sacaste un "+notaRandom;
			
		}
		else
		{
	
			mensaje="Vamos,la proxima se puede";
		}
	}

	alert(mensaje);
	

}//FIN DE LA FUNCIÓN
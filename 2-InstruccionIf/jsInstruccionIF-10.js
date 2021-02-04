function mostrar()
{
	let nota;
	let notaRandom;
	let maximo;
	let minimo;

	maximo=10;
	minimo=1;
	nota=Math.random()*(maximo-minimo)+minimo;
	notaRandom=Math.round(nota);

	if (notaRandom==9 ||notaRandom==10) {

		alert("EXCELENTE");
		
	} else if(notaRandom>=4) {

		alert("APROBÓ");
		
	}else{

		alert("Vamos,la proxima se puede");
	}

}//FIN DE LA FUNCIÓN
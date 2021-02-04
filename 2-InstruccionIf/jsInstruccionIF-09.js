function mostrar()
{
	let numero;
	let numeroRandom;
	let maximo;
	let minimo;

	maximo=10;
	minimo=1;
	numero=Math.random()*(maximo-minimo)+minimo;
	numeroRandom=Math.round(numero);

	alert(numeroRandom);

}//FIN DE LA FUNCIÓN
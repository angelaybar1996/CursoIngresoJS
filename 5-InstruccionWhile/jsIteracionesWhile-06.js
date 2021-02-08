function mostrar()
{
	let i;
	let numero;
	let acumulador;
	let suma;
	let promedio;

	i=0;
	acumulador=0;

	while (i<5) {

		numero=prompt("Ingrese un numero","");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		i++
		
	}
	suma=acumulador;
	promedio=suma/5;

	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;
	

}//FIN DE LA FUNCIÓN
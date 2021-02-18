function mostrar()
{
	let numero;
	let acumulador;
	let promedio;
	let i;

	i=0;
	acumulador=0;
	while (i<5)
	{

		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		i++;	
	}
	promedio=acumulador/5;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;
	

}//FIN DE LA FUNCIÓN
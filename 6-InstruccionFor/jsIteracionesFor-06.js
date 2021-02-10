function mostrar()
{
	let numero;
	let i;
	let cantidadPares;

	cantidadPares=0;

	numero=prompt("Ingrese un número:");
	numero=parseInt(numero);

	for (i = 1; i <= numero; i++) {

		if (i%2==0){// si el resto de i dividido 2 es cero entonces es par y se ejecuta el codigo

			document.write(i+" es par </br>");
			cantidadPares=cantidadPares+1;
		}			
			
		
		
	}

	document.write("En total son "+cantidadPares+" numeros pares </br>");



}//FIN DE LA FUNCIÓN
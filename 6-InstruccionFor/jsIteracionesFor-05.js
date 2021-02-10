function mostrar()
{

	let numero;
	

	for (; ;) {//declaro el for como bucle infinito, esto pasa cuando nose cuantas veces debo repetir
		
		numero=prompt("Ingrese un numero: ");
		numero=parseInt(numero);

		if (numero==9) {

			alert("Usted ingreso el número "+numero);
			break;
			
		}
		
	}



}//FIN DE LA FUNCIÓN
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	let i;

    i=0;
	
//uso while porque nose la cantidad de veces que el usuario va a intentarlo,por lo tanto en condición pongo true
	while (true) {

		clave=prompt("Ingrese la clave: ","");

		if(clave=="utn750"){
			alert("La clave es correcta, Bienvenido");
			break;//una vez que se cumpla, break va a romper el ciclo indefinido

		}else{
			alert("La clave es incorrecta");
		}
		i++;
	}
	

	
}//FIN DE LA FUNCIÓN

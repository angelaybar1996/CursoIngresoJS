/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let acumulador;
	let salir;
	let sumaPositivos;
	let productoNegativos;

	acumulador=0;
	productoNegativos=1;

	while (true) {

		numero=prompt("ingrese un numero:","");
		numero=parseInt(numero);

		if(numero>0){

			acumulador=acumulador+numero;

		}else{

            productoNegativos=productoNegativos*numero;
		}

		salir=prompt("Si desea terminar ingrese cero, sino presione cualquier numero:","");
		salir=parseInt(salir);

		if (salir==0) {
			
			break;
		}

	}

	sumaPositivos=acumulador;

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=productoNegativos;

}//FIN DE LA FUNCIÓN
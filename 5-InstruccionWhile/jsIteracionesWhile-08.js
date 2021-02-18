/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let acumulador;
	let salir;
	let productoNegativos;

	acumulador=0;
	productoNegativos=1;

	do
	{
		numero=prompt("ingrese un numero:");
		numero=parseInt(numero);

		if(numero>0)
		{
			acumulador=acumulador+numero;
		}
		else
		{
            productoNegativos=productoNegativos*numero;
		}
		salir=prompt("Desea terminar:");
	}while(salir!="si");

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdProducto").value=productoNegativos;

}//FIN DE LA FUNCIÓN

function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;

	let cantidadBarbijo;
	let cantidadJabon;
	let cantidadAlcohol;

	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;

	let promedio;
	let i;
	
	cantidadBarbijo=0;
	cantidadJabon=0;
	cantidadAlcohol=0;

	acumuladorBarbijo=0;
	acumuladorJabon=0;
	acumuladorAlcohol=0;

    i=0;
	for(i;i<4;i++)
	{
		tipo=prompt("Ingrese el produto:");
		precio=prompt("Ingrese precio:");
		precio=parseFloat(precio);
		cantidad=prompt("Ingrese la cantidad:");
		cantidad=parseInt(cantidad);

		if (cantidad>0 && cantidad<1001)
		{
		    if(precio>99 && precio<301)
		    {
				switch(tipo)
				{
					case "barbijo":
					marca="Johnson";
					fabricante="Unilever";
					cantidadBarbijo=cantidadBarbijo+cantidad;
					acumuladorBarbijo=acumuladorBarbijo+precio;
					break;
					case "jabon":
					marca="Johnson";
					fabricante="Unilever";
					cantidadJabon=cantidadJabon+cantidad;
					acumuladorJabon=acumuladorJabon+precio;
					break;
					case "alcohol":
						if(precio<150)
						{
						marca="Johnson";
						fabricante="Unilever";
						cantidadAlcohol=cantidadAlcohol+cantidad;
						acumuladorAlcohol=acumuladorAlcohol+precio;
						}
						else
						{
							if(precio>250)
							{
							marca="Bialcohol";
						    fabricante="PyG";
						    cantidadAlcohol=cantidadAlcohol+cantidad;
						    acumuladorAlcohol=acumuladorAlcohol+precio;
							}
							else
							{
							marca="Espadol";
							fabricante="jsyjs";
							cantidadAlcohol=cantidadAlcohol+cantidad;
							acumuladorAlcohol=acumuladorAlcohol+precio;
							}
						}
					
					break;
					default:
					alert("No es valido");
					break;
				}
		    }
		    else
		    {
		    alert("No es valido");
		    }
		}
		else
		{
		alert("No es valido");
		}
	}
	
	alert("La cantidad de alcohol mas barato es de "+cantidadAlcohol+" del fabricante "+fabricante);

	if(cantidadBarbijo>cantidadJabon||cantidadBarbijo>cantidadAlcohol)
	{
	promedio=cantidadBarbijo/acumuladorBarbijo;
	mensaje="El promedio de compra de barbijos es de $"+promedio.toFixed(2)+" c/u";
	}
	else
	{
		if(cantidadJabon>cantidadAlcohol)
		{
		promedio=cantidadJabon/acumuladorJabon;
        mensaje="El promedio de compra de jabones es de $"+promedio.toFixed(2)+" c/u";
		}
		else
		{
		promedio=cantidadAlcohol/acumuladorAlcohol;
        mensaje="El promedio de compra de alcoholes es de $"+promedio.toFixed(2)+ "c/u";	
		}	
	}
	alert(mensaje);
	alert("En total hay "+cantidadJabon+" unidades de jabones");

}

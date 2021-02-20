
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let i;

	let masCaro;
	let contadorUnidades;
	let suFabricante;
	let contadorTipo;
	let acumuladorUnidades;
	let promedio;
	let cantidadBarbijosTotal;

	tipo=[];
	precio=[];
	cantidad=[];
	marca=["espadol","johnsons","nivea","dove","lux"];
	fabricante=["unilever","PyG","palmolive","porta","pharma"];
	i=0;
	while(i<5)
	{
		do
		{
			tipo[i]=prompt("Ingrese el producto:");
			if(tipo[i]!="barbijo"&&tipo[i]!="jabon"&&tipo[i]!="alcohol")
			{
				alert("El producto no es valido");
			}
		}while(tipo[i]!="barbijo"&&tipo[i]!="jabon"&&tipo[i]!="alcohol");
		do
		{
			precio[i]=prompt("Ingrese precio:");
			precio[i]=parseFloat(precio[i]);
			if(precio[i]<100||precio>300)
			{
				alert("El precio no es valido");
			}
		}while(precio[i]<100||precio>300);
		do
		{
			cantidad[i]=prompt("Ingrese la cantidad:");
			cantidad[i]=parseInt(cantidad[i]);
			if(cantidad[i]<1||cantidad[i]>1000)
			{
				alert("La cantidad no es valida");
			}
		}while(cantidad[i]<1||cantidad[i]>1000);
		i++;	
	}
	masCaro=0
	contadorUnidades=0;
	
	for(i=0;i<tipo.length;i++)
	{
		if(tipo[i]=="jabon")
		{
			if(precio[i]>masCaro)
			{
				masCaro=precio[i];
				contadorUnidades=cantidad[i];
				suFabricante=fabricante[i];
			}
		}
	}
	alert("El jabón mas caro tiene "+contadorUnidades+" unidades y su fabricante es "+suFabricante);

	acumuladorUnidades=[0,0,0];
	contadorTipo=[0,0,0];
	for(i=0;i<tipo.length;i++)
	{
		switch(tipo[i])
		{
			case "barbijo":
				acumuladorUnidades[0]=acumuladorUnidades[0]+cantidad[i];
				contadorTipo[0]=contadorTipo[0]+1;
			break;
			case "jabon":
				acumuladorUnidades[1]=acumuladorUnidades[1]+cantidad[i];
				contadorTipo[1]=contadorTipo[1]+1;
			break;
			case "alcohol":
				acumuladorUnidades[2]=acumuladorUnidades[2]+cantidad[i];
				contadorTipo[2]=contadorTipo[2]+1;
			break;		
		}
	}
	masUnidades=0;
	for(i=0;i<acumuladorUnidades.length;i++)
	{
		if(masUnidades<acumuladorUnidades[i])
		{
			masUnidades=acumuladorUnidades[i];
			promedio=masUnidades/contadorTipo[i];
		}
	}
	alert("El promedio por compra es de "+promedio.toFixed(2));

	cantidadBarbijosTotal=0;
	for(i=0;i<tipo.length;i++)
	{
		if(tipo[i]=="barbijo")
		{
			cantidadBarbijosTotal=cantidadBarbijosTotal+cantidad[i];
		}
	}
	alert("En total se compraron "+cantidadBarbijosTotal+" unidades de barbijos");
}//FIN DE LA FUNCIÓN

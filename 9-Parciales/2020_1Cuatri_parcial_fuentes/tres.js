function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estado;
	let temperatura;
	let salir;
	let i;

	let maxima;
	let nombreMaxima;
	let contadorViudos;
	let cantidadHombres;
	let cantidadJubilados;
	let acumuladorEdad;
	let contadorSolteros;

	nombre=[];
	edad=[];
	sexo=[];
	estado=[];
	temperatura=[];
	i=0;

	do
	{
		nombre[i]=prompt("Ingrese nombre:");
		do
		{
			edad[i]=prompt("Ingrese edad:");
		    edad[i]=parseInt(edad[i]);
		    if(edad[i]<1)
		    {
			  alert("La edad no es valida");
		    }
		}while(edad[i]<1);
		do
		{
			sexo[i]=prompt("Ingrese sexo (f o m):");
			if(sexo[i]!="m"&&sexo[i]!="f")
			{
				alert("El sexo no es valido");
			}
		}while(sexo[i]!="m"&&sexo[i]!="f");
		do
		{
			estado[i]=prompt("Ingrese su estado civil:");
			if(estado[i]!="soltero"&&estado[i]!="casado"&&estado[i]!="viudo")
			{
				alert("El estado no es valido");
			}
		}while(estado[i]!="soltero"&&estado[i]!="casado"&&estado[i]!="viudo");
		do
		{
			temperatura[i]=prompt("Ingrese temperatura:");
			temperatura[i]=parseInt(temperatura[i]);
			if(temperatura[i]<33&&temperatura[i]>42)
			{
				alert("La temperatura no es valida");
			}
		}while(temperatura[i]<33&&temperatura[i]>42)
		salir=prompt("Desea terminar?");
		i++;
	}while(salir!="si");

	maxima=0;
	for(i=0;i<temperatura.length;i++)
	{
		if(temperatura[i]>maxima)
		{
			maxima=temperatura[i];
			nombreMaxima=nombre[i];
		}
	}
	alert("La persona con mayor temperatura se llama "+nombreMaxima+" y tiene "+maxima+" grados");

	contadorViudos=0;
	for(i=0;i<edad.length;i++)
	{
		if(edad[i]>17)
		{
			if(estado[i]=="viudo")
			{
				contadorViudos++;
			}
		}
	}
	alert("En total hay "+contadorViudos+" viudos en el avión");

	cantidadHombres=0;
	for(i=0;i<sexo.length;i++)
	{
		if(sexo[i]=="m")
		{
			if(estado[i]=="soltero"||estado[i]=="viudo")
			{
				cantidadHombres++;
			}
		}
	}
	alert("La cantidad de hombres solteros o viudos es de "+cantidadHombres);

	cantidadJubilados=0;
	for(i=0;i<edad.length;i++)
	{
		if(edad[i]>60)
		{
			if(temperatura[i]>38)
			{
				cantidadJubilados++;
			}
		}
	}
	alert("En total hay "+cantidadJubilados+" personas de la tercera edad con temperaturas mayores a 38°");

	acumuladorEdad=0;
	contadorSolteros=0;
	for(i=0;i<estado.length;i++)
	{
		if(estado=="soltero")
		{
			acumuladorEdad=acumuladorEdad+edad[i];
			contadorSolteros++;
		}
	}
	promedio=acumuladorEdad/contadorSolteros;
    alert("La edad promedio de los hombres solteros es "+promedio);

}//FIN DE LA FUNCIÓN


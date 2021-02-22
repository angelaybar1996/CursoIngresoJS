function mostrar()
{
    let nombre;
    let nacionalidad;
	let edad;
    let sexo;
    let estado;
    let temperatura;
	let salir;
	let mayorTemperatura;
	let nacionalidadMayorTemperatura;
	let bandera;
	let contadorSolteros;
	let contadorSolterasViudas;
	let contadorTerceraEdad;
	let acumuladorEdades;
	let contadorMujeresCasadas;
	let promedioEdad;

	bandera=0;
	contadorSolteros=0;
	contadorSolterasViudas=0;
	contadorTerceraEdad=0;
	contadorMujeresCasadas=0;
	acumuladorEdades=0;

    do
	{
		nombre=prompt("Ingrese nombre:");
		nacionalidad=prompt("Ingrese nacionalidad:");
		do
		{
			edad=prompt("Ingrese edad:");
			edad=parseInt(edad);
			if(edad<1||edad>110)
			{
				alert("La edad no es válida");
			}
		}while(edad<1||edad>110);
		do
		{
			sexo=prompt("Ingrese sexo (f o m):");
			if(sexo!="m"&&sexo!="f")
			{
				alert("El sexo no es válido");
			}
		}while(sexo!="m"&&sexo!="f");
		do
		{
			estado=prompt("Ingrese estado civil:");
			if(estado!="soltero"&&estado!="casado"&&estado!="viudo")
			{
				alert("El estado civil no es válido");
			}
		}while(estado!="soltero"&&estado!="casado"&&estado!="viudo");
		do
		{
			temperatura=prompt("Ingrese temperatura");
			temperatura=parseFloat(temperatura);
			if(temperatura<33||temperatura>42)
			{
				alert("La temperatura no es válida");
			}
		}while(temperatura<33||temperatura>42);

		if(bandera==0)
		{
			mayorTemperatura=temperatura;
			nacionalidadMayorTemperatura=nacionalidad;
			bandera++;
		}
		if(temperatura>mayorTemperatura)
		{
			mayorTemperatura=temperatura;
			nacionalidadMayorTemperatura=nacionalidad;
		}
		if(edad>17)
		{
			if(estado=="soltero")
			{
				contadorSolteros++;
			}
		}
		if(sexo=="f")
		{
			if(estado=="soltero"||estado=="viudo")
			{
				contadorSolterasViudas++;
			}
		}
		if(edad>60)
		{
			if(temperatura>38)
			{
				contadorTerceraEdad++;
			}
		}
		if(sexo=="f")
		{
			if(estado=="casado")
			{
				acumuladorEdades=acumuladorEdades+edad;
				contadorMujeresCasadas++;
			}
		}

		salir=prompt("Desea salir?");
	}while(salir!="si");

	alert("La persona con mayor temperatura es de nacionalidad "+nacionalidadMayorTemperatura+" y tiene "+mayorTemperatura+" grados");
	alert("En total hay "+contadorSolteros+" mayores de edad solteros");
	alert("En total hay "+contadorTerceraEdad+" personas de la tercera edad con temperaturas superiores a 38°");
	promedioEdad=acumuladorEdades/contadorMujeresCasadas;
	alert("El promedio de edad de las mujeres casadas es "+promedioEdad+" años");

	
}

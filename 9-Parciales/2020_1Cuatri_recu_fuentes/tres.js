/*En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estado;
	let temperatura;
	let salir;
	let banderaTemperatura;
	let mayorTemperaturaNacion;
	let mayorTemperatura;
	let contadorSolteros;
	let contadorSolterasViudas;
	let contadorTerceraEdad;
	let acumuladorEdad;
	let contadorCasadas;
	let promedioEdadCasadas;

	banderaTemperatura=0;
	contadorSolteros=0;
	contadorSolterasViudas=0;
	contadorTerceraEdad=0;
	acumuladorEdad=0;
	contadorCasadas=0;

	do
	{
		nombre=prompt("Ingrese nombre:");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("Error,ingrese nombre:");
		}

		nacionalidad=prompt("Ingrese nacionalidad:");
		while(isNaN(nacionalidad)==false)
		{
			nacionalidad=prompt("Error,ingrese nacionalidad:");
		}

		
		edad=prompt("Ingrese edad:");
		edad=parseInt(edad);
		while(isNaN(edad)==true||edad<0)
		{
			edad=prompt("Error,ingrese edad:");
		}

		sexo=prompt("Ingrese sexo:");
		while(isNaN(sexo)==false||sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Error,ingrese sexo:");
		}

		estado=prompt("Ingrese estado:");
		while(isNaN(estado)==false||estado!="soltero"&&estado!="casado"&&estado!="viudo")
		{
			estado=prompt("Error,ingrese estado:");
		}

		temperatura=prompt("Ingrese temperatura:");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)==true||temperatura<0)
		{
			temperatura=prompt("Error,ingrese temperatura:");
		}

		if(banderaTemperatura==0)
		{
			mayorTemperatura=temperatura;
			mayorTemperaturaNacion=nacionalidad;
		}
		else
		{
			if(temperatura>mayorTemperatura)
			{
				mayorTemperatura=temperatura;
			    mayorTemperaturaNacion=nacionalidad;
			}
		}

		if(edad>17)
		{
			if(estado=="soltero")
			{
				contadorSolteros++;
			}
		}
		else
		{
			if(edad>60)
			{
				if(temperatura>38)
				{
					contadorTerceraEdad++;
				}
			}
		}

		if(sexo=="f")
		{
			if(estado=="soltero"||estado=="viudo")
			{
				contadorSolterasViudas++;
			}
			else
			{
				acumuladorEdad=acumuladorEdad+edad;
				contadorCasadas++;
			}
		}

		salir=prompt("Desea salir?");
	}while(salir!="si");

	promedioEdadCasadas=acumuladorEdad/contadorCasadas;

	alert("la Nacionalidad de la persona con mas temperatura es "+mayorTemperaturaNacion);
	alert("estan solteros "+contadorSolteros+" mayores de edad");
	alert("estan solteras o viudas "+contadorSolterasViudas+" mujeres");
	alert("En total hay "+contadorTerceraEdad+" de la tercera edad con temperatura superior a 38°");
	alert("El promedio de edad de las mujeres casadas es "+promedioEdadCasadas);
	

}





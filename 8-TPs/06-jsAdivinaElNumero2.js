/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	let minimo;
	let maximo;
	let numero;
	let numeroRandom;
	
	minimo=1;
	maximo=100;
	numero=Math.random()*(maximo-minimo)+minimo;
	numeroRandom=Math.round(numero);

	return numeroRandom;
	

}

function verificar()
{
	let numeroIngresado;
	let numeroFuncion;
	let intentos;
	let mensaje;

	intentos=0;
	numeroFuncion=comenzar();
	
	do
	{
		//¿como hago aca para usar el cuadro de texto y añadir un nuevo valor en el?
		//numeroIngresado=document.getElementById("txtIdNumero").value;
		numeroIngresado=prompt("Ingrese un numero:");
		numeroIngresado=parseInt(numeroIngresado);
		intentos++;
		if (numeroIngresado==numeroFuncion)
		{
			switch (intentos)
			{
				case 1:
				mensaje="usted es un Psíquico";
				break;
				case 2:
				mensaje="Excelente percepción";
				break;
				case 3:
				mensaje="Esto es suerte";
				break;
				case 4:
				mensaje="Excelente técnica";
				break;
				case 5:
				mensaje="Usted esta en la media";
				break;
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				mensaje="Falta tecnica";
				default:
				mensaje="Afortunado en el amor!!";
				break;
			}
		}
		else
		{
			if(intentos>12)
			{
			break;
			}
		}
		
		
	} while (numeroIngresado!=numeroFuncion);//mientras numeroIngresado sea distinto a numeroFuncion el do while se sigue ejecutando

	document.getElementById("txtIdIntentos").value=intentos;
	alert(mensaje);
	

}
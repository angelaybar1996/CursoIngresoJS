/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
function comenzar()
{

  let minimo;
  let maximo;
  let numero;
  let numeroSecreto;

	minimo=1;
  maximo=100;
  
  numero=Math.random()*(maximo-minimo)+minimo;
  numeroSecreto=Math.round(numero);

  verificar();
 
}

function verificar()
{
  let minimo;
  let maximo;
  let numeroIngresado;
  let numero;
  let numeroSecreto; 
  let contadorIntentos;
  let faltan;
  let sePaso;
 
	minimo=1;
  maximo=100;
  contadorIntentos=0;

  
  numero=Math.random()*(maximo-minimo)+minimo;
  

	do 
  {   
    numeroSecreto=Math.round(numero);
    numeroIngresado=document.getElementById("txtIdNumero").value;
    numeroIngresado=parseInt(numeroIngresado);  

    if (numeroIngresado==numeroSecreto) 
    {
    contadorIntentos++;
    alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");
    document.getElementById("txtIdIntentos").value=contadorIntentos;
    } 
    else 
    {
      contadorIntentos++;
      if (numeroIngresado>numeroSecreto)
      {
        sePaso=numeroIngresado-numeroSecreto;
        alert("Se paso "+sePaso+" numeros del número secreto");
      }
      else
      {
        if(numeroIngresado<numeroSecreto)
        {
        faltan=numeroSecreto-numeroIngresado;
        alert("Le faltan "+faltan+" números para llegar al número secreto");
        }
      }
    }
  } while (numeroIngresado!=numeroSecreto);
  	
}


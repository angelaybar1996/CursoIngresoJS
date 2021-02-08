/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
function comenzar(){
  let minimo;
  let maximo;
  let numeroIngresado;
  let numero;
  let numeroSecreto; 
  let contadorIntentos;

	minimo=1;
  maximo=100;
  contadorIntentos=0;
  numeroIngresado=document.getElementById("txtIdNumero").value;
  numeroIngresado=parseInt(numeroIngresado);
  numero=Math.random()*(maximo-minimo)+minimo;
  numeroSecreto=Math.round(numero);

}

function verificar()
{
  

	if (numeroIngresado==numeroSecreto) {

    alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");

  } else {
    
  }
	
}




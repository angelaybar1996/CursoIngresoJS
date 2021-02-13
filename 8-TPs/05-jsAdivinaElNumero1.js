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
  return numeroSecreto;//1ro para pasar valores de una funcion a otra tengo que poner return para devolver valores especificos

 
 
}

function verificar()
{
  
  let numeroIngresado;
  let numeroFuncion;//2do tengo que declarar una variable para los valores de la funcion
  let contadorIntentos;
  let faltan;
  let sePaso;
  let mensaje;
 
  contadorIntentos=0;

  do 
  {
    contadorIntentos++;
    //numeroIngresado=document.getElementById("txtIdNumero").value;
    numeroFuncion=comenzar();//3ro tengo que asignarle los valores de la funcion a la variable
    numeroIngresado=prompt("Ingrese un numero:");
    numeroIngresado=parseInt(numeroIngresado);

    if(numeroIngresado==numeroFuncion)
    {
    mensaje="Usted es un ganador!!! y en solo "+contadorIntentos+" intentos";
    }
    else
    {
      if(contadorIntentos>5)
      {
      break;
      }
      else
      {
        if(numeroIngresado>numeroFuncion)
        {
        sePaso=numeroIngresado-numeroFuncion;
        mensaje="Se paso "+sePaso+" numeros del número secreto";
        }
        else
        {
          if(numeroIngresado<numeroFuncion)
          {
          faltan=numeroFuncion-numeroIngresado;
          mensaje="Le faltan "+faltan+" números para llegar al número secreto";
          }
        }
      }
    }
    alert(mensaje);
  } while (numeroIngresado!=numeroFuncion);

  document.getElementById("txtIdIntentos").value=contadorIntentos; 	
}//FIN DE LA FUNCION
 

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{

  let numero;
  let maximo;
  let minimo;
  let salir;
  let unicaVez;

  unicaVez=0;

  do 
  {

   numero=prompt("Ingrese un número:","");
   numero=parseInt(numero);

   if(unicaVez==0)
   {

      maximo=numero;
      minimo=numero;
      unicaVez++;
   }

   if(numero>maximo)
   {

      maximo=numero;

   }
   else if(numero<minimo)
   {

      minimo=numero;
   }

   salir=prompt("Ingrese si para salir:");
   //cuando la condicion sea verdadera termina el bucle
  } while (salir!="si");

  document.getElementById("txtIdMaximo").value=maximo;
  document.getElementById("txtIdMinimo").value=minimo;


}//FIN DE LA FUNCIÓN
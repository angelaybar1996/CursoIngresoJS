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

  do //hacer esto
  {
       numero=prompt("Ingrese un número:","");
       numero=parseInt(numero);

        if(unicaVez==0)//importante para guardar datos por unica vez
        {
           maximo=numero;
           minimo=numero;
           unicaVez++;
        }

        if(numero>maximo)
        {
           maximo=numero;
        }
       else
        {
           if(numero<minimo)
           {
              minimo=numero;
           }
        }
   salir=prompt("Desea terminar:");
  } while (salir!="si");//mientras salir sea distino de si,si es igual a si entonces sale del bucle

  document.getElementById("txtIdMaximo").value=maximo;
  document.getElementById("txtIdMinimo").value=minimo;


}//FIN DE LA FUNCIÓN
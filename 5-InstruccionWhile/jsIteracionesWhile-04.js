/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	
	do
	{
		numero=prompt("Ingrese un número entre 0 y 9 inclusive:","");
	    numero=parseInt(numero);

       if (numero>-1&&numero<10)
	   {
          document.getElementById("txtIdNumero").value=numero;
		  break;
	   }
	   else
	   {
          alert("El numero no es valido");
	   }	
	}while(numero<0||numero>9);
		
	

	
}//FIN DE LA FUNCIÓN
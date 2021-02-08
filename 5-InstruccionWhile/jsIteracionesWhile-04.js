/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	
	

	while (true) {

		numero=prompt("Ingrese un número entre 0 y 9 inclusive:","");
	    numero=parseInt(numero);

       if (numero<=9) {
		   
          document.getElementById("txtIdNumero").value=numero;
		  break;

	   }else{

          alert("El numero no es valido");

	   }
		
	}

	
}//FIN DE LA FUNCIÓN
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{

   let numeroIngresado;
   let maximo;
   let minimo;
   let ultimoMinimo;
   let i;

   i=0;
   maximo=0;
   minimo=0;

   while (i<4) {

	numeroIngresado=prompt("Ingrese un numero:","");
	numeroIngresado=parseInt(numeroIngresado);

	if(numeroIngresado<ultimoMinimo){

     ultimoMinimo=numeroIngresado;

	}else if(numeroIngresado>maximo){

		maximo=numeroIngresado;

	}else if (){

		minimo=numeroIngresado;
	}
	ultimoMinimo=minimo;

	
	i++;   
}
   alert("El maximo es: "+maximo+" y el minimo es: "+minimo);

}//FIN DE LA FUNCIÓN
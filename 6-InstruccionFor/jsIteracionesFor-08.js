function mostrar(){

let numero;
let i;
let cantidadPrimos;

cantidadPrimos=0;

numero=prompt("Ingrese un número:");
numero=parseInt(numero);

  for (i=1;i<=numero;i++){

	if (numero%i!=0 ) {

		if(numero%2!=0){

			document.write(i+" es primo </br>");
			cantidadPrimos=cantidadPrimos+1;
		}
			
	}  

  }
  document.write("En total hay "+cantidadPrimos+" números primos");


}
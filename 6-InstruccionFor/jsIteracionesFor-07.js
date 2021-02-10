function mostrar()
{

let numero;
let i;
let cantidadDivisores;

cantidadDivisores=0;

numero=prompt("Ingrese un numero:");
numero=parseInt(numero);

for (i = 1; i <= numero; i++) {

	if (numero%i==0) {//si el resto de numero dividido i es igual a cero entoces i es un divisor
		
		document.write(i+" es divisor </br>");
		cantidadDivisores=cantidadDivisores+1;
	}
	
}
document.write("En total hay "+cantiadadDivisores+" números divisores");

}//FIN DE LA FUNCIÓN
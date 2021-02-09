/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
let numero;
let contadorPositivo;
let contadorNegativo;
let sumaPositivo;
let sumaNegativo;
let cantidadCeros;
let cantidadPares;
let promedioPositivos;//fuera del bucle
let promedioNegativos;//fuera del bucle
let diferencia;// fuera del bucle (diferencia = sumaPositivo - sumaNegativo)
let salir;

contadorPositivo=0;
sumaPositivo=0;

contadorNegativo=0;
sumaNegativo=0;

cantidadCeros=0;
cantidadPares=0;


do {
    
	numero=prompt("Ingrese un número:");
	numero=parseInt(numero);

	if(numero % 2==0){// el resto del numero si da cero determina si es par

		cantidadPares++;
	}

	if (numero>0) {
       
		sumaPositivo=sumaPositivo+numero;
		contadorPositivo++;	

	}else if(numero<0){

        sumaNegativo=sumaNegativo+numero;
		contadorNegativo++;

	}else if(numero==0){
      
		cantidadCeros++;

	}

salir=prompt("Ingrese si para terminar:");

} while (salir!="si");

promedioPositivos=promedioPositivos/contadorPositivo;
promedioNegativos=promedioNegativos/contadorNegativo;
diferencia=sumaPositivo - sumaNegativo;

document.write("La suma de los positivos es: "+sumaPositivo+"</br>");
document.write("La suma de los negativos es: "+sumaNegativo+"</br>");
document.write("La cantidad de positivos es: "+contadorPositivo+"</br>");
document.write("La cantidad de negativos es: "+contadorNegativo+"</br>");
document.write("La cantidad de ceros es: "+cantidadCeros+"</br>");
document.write("La cantidad de pares es: "+cantidadPares+"</br>");
document.write("El promedio de los numeros positivos es: "+promedioPositivos+"</br>");
document.write("El promedio de los numeros negativos es: "+promedioNegativos+"</br>");
document.write("La diferencia de los positivos y los negativos es: "+diferencia+"</br>");


}//FIN DE LA FUNCIÓN
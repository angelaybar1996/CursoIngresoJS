/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/
function mostrar()
{

    let letra;
    let numero;
    let salir;
    let contadorPares;
    let contadorImpares;
    let contadorCeros;
    let acumuladorPositivos;
    let contadorPositivos;
    let promedioPositivos;
    let acumuladorNegativos;
    let bandera;

    contadorPares=0;
    contadorImpares=0;
    contadorCeros=0;
    acumuladorPositivos=0;
    contadorPositivos=0;
    acumuladorNegativos=0;
    bandera=0;


    do
    {
        letra=prompt("Ingrese letra:");
        while(isNaN(letra)==false||letra.length>1)
        {
            letra=prompt("Error,ingrese letra:");
        }

        numero=prompt("Ingrese numero:");
        numero=parseInt(numero);
        while(isNaN(numero)==true||numero<-100||numero>100)
        {
            numero=prompt("Error,ingrese nota:");
        }

        if(numero%2==0)
        {
            contadorPares++;
        }
        else
        {
            contadorImpares++;
        }

        if(numero==0)
        {
            contadorCeros++;
        }

        if(numero>0)
        {
            acumuladorPositivos=acumuladorPositivos+numero;
            contadorPositivos++;
        }
        else
        {
            acumuladorNegativos=acumuladorNegativos+numero;
        }

        if(bandera==0)
        {
            maximoNumero=numero;
            maximoLetra=letra;
            minimoNumero=numero;
            minimoLetra=letra;
            bandera++
        }
        else
        {
            if(numero>maximoNumero)
            {
                maximoNumero=numero;
                maximoLetra=letra;
            }
            else
            {
                if(numero<minimoNumero)
                {
                    minimoNumero=numero;
                    minimoLetra=letra;
                }
            }
        }



        salir=prompt("Desea salir?");
    }while(salir!="si");

    promedioPositivos=acumuladorPositivos/contadorPositivos;

    document.write("En total hay "+contadorPares+" numeros pares");
    document.write("En total hay "+contadorImpares+" numeros impares");
    document.write("En total hay "+contadorCeros+" ceros");
    document.write("El promedio de todos los numeros positivos es "+promedioPositivos);
    document.write("La suma de todos los numeros negativos es "+acumuladorNegativos);
    document.write("El número máximo es "+maximoNumero+" su letra es "+maximoLetra+" y el número minimo es "+minimoNumero+" y su letra es "+minimoNumero);
    



}

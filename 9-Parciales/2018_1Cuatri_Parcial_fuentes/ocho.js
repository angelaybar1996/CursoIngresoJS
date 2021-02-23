function mostrar()
{
    let numero;
    let letra;
    let salir;
    let contadorLetras;
    let contadorPares;
    let contadorImpares;
    let contadorCeros;
    let acumuladorPositivos;
    let contadorPositivos;
    let acumuladorNegativos;
    let maximo;
    let minimo;
    let maximoLetra;
    let minimoLetra;
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
        do
        {
            numero=prompt("Ingrese un número:");
            numero=parseInt(numero);
            esNumero=Number.isNaN(numero);//Asi evaluo si es un numero lo ingresado
            if(esNumero==true)
            {
                alert("No es un numero");
            }
            else
            {
                if(numero<-100||numero>100)
                {
                    alert("El número no es válido");
                }
            }  
        }while(esNumero==true||numero<-100||numero>100);
        do
        {
            letra=prompt("ingrese una letra:");
            contadorLetras=letra.length;
            if(contadorLetras>1)
            {
                alert("Error, ingrese solo UNA LETRA");
            }
        }while(contadorLetras>1);

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
            maximo=numero;
            minimo=numero;
            maximoLetra=letra;
            minimoLetra=letra;
            bandera++;
        }
        if(numero>maximo)
        {
            maximo=numero;
            maximoLetra=letra;
        }
        else
        {
            if(numero<minimo)
            {
                minimo=numero;
                minimoLetra=letra;
            }
        }

        salir=prompt("Desea salir?");
    }while(salir!="si");

    promedioPositivos=acumuladorPositivos/contadorPositivos;

    document.write("En total hay "+contadorPares+" números pares</br>");
    document.write("En total hay "+contadorImpares+" números impares</br>");
    document.write("En total hay "+contadorCeros+" números ceros</br>");
    document.write("El promedio de números positivos es "+promedioPositivos+"<br>");
    document.write("La suma de todos los números negativos es "+acumuladorNegativos+"</br>");
    document.write("El número maximo es "+maximo+" y su letra es "+maximoLetra+" y el mínimo es "+minimo+" y su letra es "+minimoLetra+"</br>");



}

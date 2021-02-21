function mostrar()
{
    let numero;
    let letra;
    let i;
    let salir;
    let cantidadLetras;
    let contadorPares;
    let contadorImpares;
    let contadorCeros;
    let acumuladorNumerosPositivos;
    let acumuladorNumerosNegativos;
    let promedio;
    let maximo;
    let minimo;
    let maximoLetra;
    let minimoLetra;
    let bandera;


    numero=[];
    letra=[];
    i=0;
    contadorPares=0;
    contadorImpares=0;
    contadorCeros=0;
    acumuladorNumerosPositivos=0;
    acumuladorNumerosNegativos=0;
    maximoLetra=0;
    minimoLetra=0;
    bandera=0;
    maximo=0;
    minimo=0;

    do
    {
        do
        {
            letra[i]=prompt("Ingrese una letra:");
            cantidadLetras=letra[i].length;//Asi averiguo la cantidad de letras que tiene
            if(cantidadLetras>1)
            {
                alert("Error, tiene que ingresar 1(UNA) LETRA");
            }
        }while(cantidadLetras>1);
        do
        {
            numero[i]=prompt("Ingrese un número");
            numero[i]=parseInt(numero[i]);
            if(numero[i]<-100 ||numero[i]>100)
            {
                alert("Número no valido");
            }
        }while(numero[i]<-100 ||numero[i]>100);

        if(numero[i]>0)
        {
            acumuladorNumerosPositivos=acumuladorNumerosPositivos+numero[i];
        }
        else
        {
            acumuladorNumerosNegativos=acumuladorNumerosNegativos+numero[i];
        }

        salir=prompt("Desea salir?");
        i++;
    }while(salir!="si");

    for(i=0;i<numero.length;i++)
    {
        if(numero[i]==0)
        {
            contadorCeros++;
        }
        else
        {
            if(numero[i]%2==0)
            {
                contadorPares++;
            }
            else
            {
                contadorImpares++;
            }
        } 
    }
    promedio=acumuladorNumerosPositivos/i;

    for(i=0;i<numero.length;i++)
    {
        if(bandera==0)
        {
            maximo=numero[i];
            maximoLetra=letra[i];
            minimo=numero[i];
            minimoLetra=letra[i];
            bandera++;
        }
        if(numero[i]>maximo)
        {
            maximo=numero[i];
            maximoLetra=letra[i];
        }
        else
        {
            if(numero[i]<minimo)
            {
                minimo=numero[i];
                minimoLetra=letra[i];
            }
        }  
    }

    alert("La cantidad de números pares es "+contadorPares);
    alert("La cantidad de números impares es "+contadorImpares);
    alert("La cantidad de ceros es "+contadorCeros);
    alert("El promedio de todos los numeros positivos es "+promedio);
    alert("La suma de todos los numeros negativos es "+acumuladorNumerosNegativos);
    alert("El numero maximo es "+maximo+" de letra "+maximoLetra+" y el numero minimo es "+minimo+" de letra "+minimoLetra);

}//FIN DE LA FUNCIÓN

function mostrar()
{
    let altura;
    let sexo;
    let i;
    let promedioAlturas;
    let acumuladorAlturas;
    let alturaBaja;
    let unicaVez;
    let sexoAltura;
    let contadorMujeres;
    
    altura=[];
    sexo=[];
    i=0;

    while(i<5)
    {
        do
        {
           altura[i]=prompt("Ingrese la altura en centimetros:");
           altura[i]=parseInt(altura[i]);
           if(altura[i]<1||altura[i]>250)
           {
               alert("La altura no es válida");
           }
        }while(altura[i]<1||altura[i]>250);
        do
        {
            sexo[i]=prompt("Ingrese sexo");
            if(sexo[i]!="m"&&sexo[i]!="f")
            {
                alert("El sexo no es valido");
            }
        }while(sexo[i]!="m"&&sexo[i]!="f");
        i++;
    }

    acumuladorAlturas=0;
    for(i=0;i<altura.length;i++)
    {
        acumuladorAlturas=acumuladorAlturas+altura[i];
    }
    promedioAlturas=acumuladorAlturas/5;
    
    alert("El promedio de las alturas totales es "+promedioAlturas);

    alturaBaja=0;
    unicaVez=0;
    for(i=0;i<altura.length;i++)
    {
        if(unicaVez==0)
        {
            alturaBaja=alturaBaja+altura[i];
            unicaVez++;
        }
        if(alturaBaja>=altura[i])
        {
            alturaBaja=altura[i];
            sexoAltura=sexo[i];
        }
    }
    alert("La altura mas baja es "+alturaBaja+" y su sexo es "+sexoAltura);

    contadorMujeres=0;
    for(i=0;i<sexo.length;i++)
    {
        if(sexo[i]=="f")
        {
            if(altura[i]>190)
            {
                contadorMujeres++;
            }
        }
    }
    alert("La cantidad de mujeres con alturas mayores a los 190cm es "+contadorMujeres);


}

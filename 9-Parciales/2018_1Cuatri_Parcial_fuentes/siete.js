function mostrar()
{
    let nota;
    let sexo;
    let i;
    let promedioNotas;
    let acumuladorNotas;
    let menorNota;
    let menorNotaSexo;
    let bandera;
    let contadorVarones;
    i=0;
    acumuladorNotas=0;
    bandera=0;
    contadorVarones=0;

    while(i<5)
    {
        do
        {
            nota=prompt("Ingrese nota:");
            nota=parseInt(nota);
            if(nota<0||nota>11)
            {
                alert("La nota no es válida");
            }
        }while(nota<0||nota>11);
        do
        {
            sexo=prompt("Ingrese sexo:");
            if(sexo!="m"&&sexo!="f")
            {
                alert("El sexo no es válido");
            }
        }while(sexo!="m"&&sexo!="f");
        acumuladorNotas=acumuladorNotas+nota;
        if(bandera==0)
        {
            menorNota=nota;
            menorNotaSexo=sexo;
            bandera++;
        }
        if(nota<menorNota)
        {
            menorNota=nota;
            menorNotaSexo=sexo;
        }
        if(sexo=="m")
        {
            if(nota>5)
            {
                contadorVarones++;
            }
        }
        i++;
    }
    promedioNotas=acumuladorNotas/5;

    alert("El promedio de las notas totales es "+promedioNotas);
    alert("La nota mas baja es "+menorNota+" y el sexo de esa persona es "+menorNotaSexo);
    alert("En total hay "+contadorVarones+" varones con notas mayores o iguales a 6");




}

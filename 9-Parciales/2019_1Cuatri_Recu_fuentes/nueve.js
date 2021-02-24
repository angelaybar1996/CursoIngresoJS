function mostrar()
{
    let nombre;
    let edad;
    let sexo;
    let nota;
    let salir;
    let contadorVarones;
    let acumuladorNotas;
    let contadorMenores;
    let promedioMenores;
    let acumuladorNotasAdolescentes;
    let contadorAdolescentes;
    let promedioAdolescentes;
    let acumuladorMayores;
    let contadorMayores;
    let promedioMayores;
    let acumuladorMasculino;
    let acumuladorFemenino;
    let contadorFemenino;
    let contadorMasculino;
    let promedioMasculino;
    let promedioFemenino;


    contadorVarones=0;
    acumuladorNotas=0;
    contadorMenores=0;
    acumuladorNotasAdolescentes=0;
    contadorAdolescentes=0;
    acumuladorMasculino=0;
    acumuladorFemenino=0;
    contadorFemenino=0;
    contadorMasculino=0;



    do
    {
        nombre=prompt("Ingrese nombre:");
        do
        {
            edad=prompt("Ingrese edad:");
            edad=parseInt(edad);
            if(edad<0||edad>110)
            {
                alert("La edad no es válida");
            }
        }while(edad<0||edad>110);
        do
        {
            sexo=prompt("Ingrese sexo:");
            if(sexo!="f"&&sexo!="m")
            {
                alert("El sexo no es válido");
            }
        }while(sexo!="f"&&sexo!="m");
        do
        {
            nota=prompt("Ingrese nota:");
            if(nota<0||nota>10)
            {
                alert("La nota no es válida");
            }
        }while(nota<0||nota>10);

        if(sexo=="m")
        {
            acumuladorMasculino=acumuladorMasculino+nota;
            contadorMasculino++;
            if(nota>4)
            {
                contadorVarones++;
            }
        }
        else
        {
            if(sexo=="f")
            {
                acumuladorFemenino=acumuladorFemenino+nota;
                contadorFemenino++;
            }
        }

        if(edad<18)
        {
            acumuladorNotas=acumuladorNotas+nota;
            contadorMenores++;
        }
        if(edad>12&&edad<18)
        {
            acumuladorNotasAdolescentes=acumuladorNotasAdolescentes+nota;
            contadorAdolescentes++;
        }
        if(edad>17)
        {
            acumuladorMayores=acumuladorMayores+nota;
            contadorMayores++;
        }

        salir=prompt("Desea salir?");
    }while(salir!="si");
    
    promedioMenores=acumuladorNotas/contadorMenores;
    promedioAdolescentes=acumuladorNotasAdolescentes/contadorAdolescentes;
    promedioMayores=acumuladorMayores/contadorMayores;
    promedioMasculino=acumuladorMasculino/contadorMasculino;
    promedioFemenino=acumuladorFemenino/contadorFemenino;

    document.write("La cantidad de varones aprobados son "+contadorVarones+"</br>");
    document.write("El promedio de nota de los menores de edad es "+promedioMenores+"</br>");
    document.write("El promedio de nota de los adolescentes es "+promedioAdolescentes+"</br>");
    document.write("El promedio de nota de los mayores de edad es "+promedioMayores+"</br>");
    document.write("El promedio de notas masculinas es "+promedioMasculino+" y el promedio de notas femeninas es "+promedioFemenino+"</br>");

    

}

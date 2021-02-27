/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar()
{

    let i;
    let notas;
    let sexo;
    let acumuladorNotas;
    let contadorNotas;
    let promedioNotas;
    let banderaNota;
    let notaMasBaja;
    let sexoPersona;
    let contadorVarones;

    acumuladorNotas=0;
    contadorNotas=0;
    banderaNota=0;
    contadorVarones=0;


    i=0;

    while(i<5)
    {
        notas=prompt("Ingrese nota:");
        notas=parseInt(notas);
        while(isNaN(notas)==true||notas<0||notas>10)
        {
            notas=prompt("Error,ingrese nota:");
        }

        sexo=prompt("Ingrese sexo:");
        while(isNaN(sexo)==false||sexo!="f"&&sexo!="m")
        {
            sexo=prompt("Error,ingrese sexo:");
        }

        acumuladorNotas=acumuladorNotas+notas;
        contadorNotas++;

        if(bandera==0)
        {
            notaMasBaja=notas;
            sexoPersona=sexo;
            banderaNota++;
        }
        else
        {
            if(notas<notaMasBaja)
            {
                notaMasBaja=notas;
                sexoPersona=sexo;
            }
        }

        if(notas>5)
        {
            if(sexo=="m")
            {
                contadorVarones++;
            }
        }

        i++;
    }

    promedioNotas=acumuladorNotas/contadorNotas;

    alert("El promedio de notas totales es "+promedioNotas);
    alert("El sexo de la persona con nota mas baja es "+sexoPersona);
    alert("En total hay "+contadorVarones+" varones con notas mayores a 6");
    

}

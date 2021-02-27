/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{

    let salir;
    let nombre;
    let edad;
    let sexo;
    let estado;
    let temperatura;
    let banderaTemperatura;
    let contadorViudos;
    let contadorSolterosViudos;
    let contadorTerceraEdad;
    let acumuladorEdad;
    let contadorSolteros;
    let promedioEdad;

    banderaTemperatura=0;
    contadorViudos=0;
    contadorSolterosViudos=0;
    contadorTerceraEdad=0;
    acumuladorEdad=0;
    contadorSolteros=0;

    do
    {
        nombre=prompt("Ingrese nombre:");
        while(isNaN(nombre)==false)
        {
            nombre=prompt("Error,ingrese nombre:");
        }

        edad=prompt("Ingrese edad:");
        edad=parseInt(edad);
        while(isNaN(edad)==true||edad<0)
        {
            edad=prompt("Error,ingrese edad:");
        }

        sexo=prompt("Ingrese sexo:");
        while(isNaN(sexo)==false||sexo!="f"&&sexo!="m")
        {
            sexo=prompt("Error,ingrese sexo:");
        }

        estado=prompt("Ingrese estado:");
        while(isNaN(estado)==false||estado!="soltero"&&estado!="casado"&&estado!="viudo")
        {
            estado=prompt("Error,ingrese estado:");
        }

        temperatura=prompt("Ingrese temperatura:");
        temperatura=parseInt(temperatura);
        while(isNaN(temperatura)==true||temperatura<0)
        {
            temperatura=prompt("Error,ingrese temperatura:");
        }

        if(banderaTemperatura==0)
        {
            nombreTemperatura=nombre;
            maximaTemperatura=temperatura;
            banderaTemperatura++;
        }
        else
        {
            if(temperatura>maximaTemperatura)
            {
                nombreTemperatura=nombre;
                maximaTemperatura=temperatura;
            }
        }

        switch(estado)
        {
            case "viudo":
                if(edad>17)
                {
                    contadorViudos++;
                }
            break;
        }

        if(estado=="soltero"||estado=="viudo")
        {
            if(sexo=="m")
            {
                contadorSolterosViudos++;
            }
        }

        if(edad>60)
        {
            if(temperatura>38)
            {
                contadorTerceraEdad++;
            }
        }

        if(sexo=="m")
        {
            if(estado=="soltero")
            {
                acumuladorEdad=acumuladorEdad+edad;
                contadorSolteros++;
            }
        }

        salir=prompt("Desea salir?");
    }while(salir!="si");

    promedioEdad=acumuladorEdad/contadorSolteros;

    alert("El nombre de la persona con mas temperatura es "+nombreTemperatura);
    alert("En total hay "+contadorViudos+" mayores de edad viudos");
    alert("En total hay "+contadorSolterosViudos+" hombres solteros o viudos");
    alert("En total hay "+contadorTerceraEdad+"personas de la tercera edad con temperaturas superiores a 38°");
    alert("El promedio de edad entre hombres solteros es "+promedioEdad+" años");

    
    
    



}//FIN DE LA FUNCIÓN


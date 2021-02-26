/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
    let nombre;
    let edad;
    let sexo; 
    let estado;//("soltero", "casado" o "viudo")
    let temperatura;
    let salir;
    let banderaTemperatura;
    let contadorViudos;
    let contadorSolterosViudos;
    let contadorTerceraEdad;
    let contadorSolteros;
    let acumuladorEdad;
    let promedioEdad;

    banderaTemperatura=0;
    contadorViudos=0;
    contadorSolterosViudos=0;
    contadorTerceraEdad=0;
    contadorSolteros=0;
    acumuladorEdad=0;

    do
    {
        nombre=prompt("Ingrese el nombre :");
        while(isNaN(nombre)==false)
        {
            nombre=prompt("Error,ingrese el nombre :");  
        }

        edad=prompt("Ingrese el edad :");
        edad=parseInt(edad);
        while(isNaN(edad)==true||edad<0)
        {
            edad=prompt("Error,ingrese el edad :");  
        }

        sexo=prompt("Ingrese el sexo :");
        while(isNaN(sexo)==false||sexo!="f"&&sexo!="m")
        {
            sexo=prompt("Error,ingrese el sexo :");  
        }

        estado=prompt("Ingrese el estado :");
        while(isNaN(estado)==false||estado!="soltero"&&estado!="casado"&&estado!="viudo")
        {
            estado=prompt("Error,ingrese el estado :");  
        }

        temperatura=prompt("Ingrese el temperatura :");
        temperatura=parseInt(temperatura);
        while(isNaN(temperatura)==true||temperatura<0)
        {
            temperatura=prompt("Error,ingrese el temperatura :");
        }

        if(banderaTemperatura==0)
        {
            nombreMayorTemperatura=nombre;
            MayorTemperatura=temperatura;
            banderaTemperatura++;
        }
        else
        {
            if(temperatura>MayorTemperatura)
            {
                MayorTemperatura=temperatura;
                nombreMayorTemperatura=nombre;
            }
        }

        if(edad>17)
        {
            if(estado=="viudo")
            {
                contadorViudos++;
            }
        }

        if(sexo=="m")
        {
            if(estado=="soltero"||estado=="viudo")
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

    alert("El nombre de la persona con mayor temperatura es "+nombreMayorTemperatura);
    alert("En total hay "+contadorViudos+" mayores de edad viudos");
    alert("En total hay "+contadorSolterosViudos+" hombres solteros o viudos");
    alert("En total hay "+contadorTerceraEdad+" de la tercera edad con mas de 38 de temperatura");
    alert("El promedio de edad de los hombres solteros es "+promedioEdad);





}//FIN DE LA FUNCIÓN


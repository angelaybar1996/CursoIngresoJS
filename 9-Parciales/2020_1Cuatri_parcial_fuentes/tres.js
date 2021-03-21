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
    let nombreMaximaTemperatura;
    let mayorTemperatura;
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
        nombre=prompt("ingrese nombre:");
        while(isNaN(nombre)==false)
        {
            nombre=prompt("Error,ingrese nombre:");
        }

        edad=prompt("ingrese edad:");
        edad=parseInt(edad);
        while(isNaN(edad)==true||edad<0)
        {
            edad=prompt("Error,ingrese edad:");
        }

        sexo=prompt("ingrese sexo:");
        while(isNaN(sexo)==false||sexo!="f"&&sexo!="m")
        {
            sexo=prompt("Error,ingrese sexo:");
        }

        estado=prompt("ingrese estado:");
        while(isNaN(estado)==false||estado!="soltero"&&estado!="casado"&&estado!="viudo")
        {
            estado=prompt("Error,ingrese estado:");
        }

        temperatura=prompt("ingrese temperatura:");
        temperatura=parseInt(temperatura);
        while(isNaN(temperatura)==true||temperatura<0||temperatura>50)
        {
            temperatura=prompt("Error,ingrese temperatura:");
        }

        if(banderaTemperatura==0)
        {
            nombreMaximaTemperatura=nombre;
            mayorTemperatura=temperatura;
            banderaTemperatura++;
        }
        else
        {
            if(temperatura>mayorTemperatura)
            {
                nombreMaximaTemperatura=nombre;
                mayorTemperatura=temperatura;
            }
        }

        switch(estado)
        {
            case "viudo":
                if(edad>17)
                {
                    contadorViudos++;
                }

                if(sexo=="m")
                {
                    contadorSolterosViudos++;
                }
            break;
            case "soltero":
                if(sexo=="m")
                {
                    contadorSolterosViudos++;
                    acumuladorEdad=acumuladorEdad+edad;
                    contadorSolteros++;
                }
            break;
        }

        if(temperatura>38)
        {
            if(edad>60)
            {
                contadorTerceraEdad++;
            }
        }

        salir=prompt("Desea salir?");
    }while(salir!="si");

    promedioEdad=acumuladorEdad/contadorSolteros;

    alert("El nombre de la persona con mas temperatura es "+nombreMaximaTemperatura);
    alert("En total hay "+contadorViudos+" mayores de edad viudos");
    alert("La cantidad de hombres solteros o viudos es de "+contadorSolterosViudos);
    alert("En total hay "+contadorTerceraEdad+" personas de la tercera edad con temperatura superior a 38°");
    alert("El promedio de edad de los hombres solteros es "+promedioEdad);

   
    
    
    



}//FIN DE LA FUNCIÓN


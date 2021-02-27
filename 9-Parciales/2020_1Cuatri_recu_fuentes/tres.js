/*En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
function mostrar()
{
	
	let nombre;
    let nacionalidad;
    let edad;
    let sexo;
    let estado;
    let temperatura;
    let salir;
    let banderaNacionalidad;
    let contadorSolteros;
    let contadorSolterasViudas;
    let contadorTerceraEdad;
    let acumuladorEdad;
    let contadorCasadas;
    let promedioEdad;

    banderaNacionalidad=0;
    contadorSolteros=0;
    contadorSolterasViudas=0;
    contadorTerceraEdad=0;

    do
    {
        nombre=prompt("Ingrese el nombre:");
        while(isNaN(nombre)==false)
        {
            nombre=prompt("Error,ingrese el nombre:");
        }

        nacionalidad=prompt("Ingrese el nacionalidad:");
        while(isNaN(nacionalidad)==false)
        {
            nacionalidad=prompt("Error,ingrese el nacionalidad:");
        }

        edad=prompt("Ingrese edad:");
        edad=parseInt(edad);
        while(isNaN(edad)==true||edad<0)
        {       
            edad=prompt("Error,ingrese edad:");
        }

        sexo=prompt("Ingrese el sexo:");
        while(isNaN(sexo)==false||sexo!="m"&&sexo!="f")
        {
            sexo=prompt("Error,ingrese el sexo:");
        }

        estado=prompt("Ingrese el estado:");
        while(isNaN(estado)==false||estado!="casado"&&estado!="soltero"&&estado!="viudo")
        {
            estado=prompt("Error,ingrese el estado:");
        }
 
        temperatura=prompt("Ingrese temperatura:");
        temperatura=parseInt(temperatura);
        while(isNaN(temperatura)==true||temperatura<0)
        {
            temperatura=prompt("Error,ingrese temperatura:");
        }

        if(banderaNacionalidad==0)
        {
            mayorTemperatura=temperatura;
            nacionalidadTemperatura=nacionalidad;
            banderaNacionalidad++;
        }
        else
        {
            if(temperatura>mayorTemperatura)
            {
                mayorTemperatura=temperatura;
                nacionalidadTemperatura=nacionalidad;
            }
        }

        if(edad>17)
        {
            if(estado=="soltero")
            {
                contadorSolteros++;
            }
        }
       
        if(edad>60)
        {
            if(temperatura>38)
            {
                contadorTerceraEdad++;
            }
        }
        

        if(sexo=="f")
        {
            if(estado=="soltero"||estado=="viudo")
            {
                contadorSolterasViudas++;
            }
            else
            {
                acumuladorEdad=acumuladorEdad+edad;
                contadorCasadas++;
            }
        }
    
        salir=prompt("Desea salir?");
    }while(salir!="si");

    promedioEdad=acumuladorEdad/contadorCasadas;

    alert("La nacionaldidad de la personsa con mas temrpeatura es "+nacionalidadTemperatura);
    alert("En total hay "+contadorSolteros+" solteros mayores de edad");
    alert("En total hay "+contadorSolterasViudas+" mujeres solteras o viudas");
    alert("En total hay "+contadorTerceraEdad+" personas de la tercera edad con temperaturas superiores a 38°");
    alert("El promedio edad de las mujeres casadas es "+promedioEdad);

}





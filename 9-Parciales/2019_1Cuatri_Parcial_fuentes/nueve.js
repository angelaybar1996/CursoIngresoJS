function mostrar()
{
    let pais;
    let cantidadHabitantes;
    let temperatura;
    let salir;
    let contadorPares;
    let menorCantidadHabitantes;
    let nombrePais;
    let bandera;
    let contadorPaises;
    let acumuladorHabitantes;
    let contador;
    let promedio;
    let menorTemperatura;
    let paisMenorTemperatura;
    let banderaTemperatura;

    contadorPares=0;
    bandera=0;
    contadorPaises=0;
    acumuladorHabitantes=0;
    contador=0;
    banderaTemperatura=0;

    do
    {
        pais=prompt("Ingrese el nombre de un pais:");
        do
        {
            cantidadHabitantes=prompt("Ingrese la cantidad de habitantes en ese pais(en millones)");
            cantidadHabitantes=parseInt(cantidadHabitantes);
            if(cantidadHabitantes<1||cantidadHabitantes>7000)
            {
                alert("Error,la cantidad no es válida");
            }
        }while(cantidadHabitantes<1||cantidadHabitantes>7000);//validación

        if(bandera==0)
        {
            menorCantidadHabitantes=cantidadHabitantes;
            nombrePais=pais;
            bandera++;
        }
        if(cantidadHabitantes<menorCantidadHabitantes)
        {
            menorCantidadHabitantes=cantidadHabitantes;
            nombrePais=pais;
        }
        acumuladorHabitantes=acumuladorHabitantes+cantidadHabitantes;
        contador++;

        do
        {
            temperatura=prompt("Ingrese la temperatura minima del pais");
            temperatura=parseFloat(temperatura);
            if(temperatura<-50||temperatura>50)
            {
                alert("Error, la temperatura no es válida");
            }
        }while(temperatura<-50||temperatura>50);//validación

        if(temperatura%2==0)
        {
            contadorPares++;
        }
        if(temperatura>40)
        {
            contadorPaises++;
        }
        if(banderaTemperatura==0)
        {
            menorTemperatura=temperatura;
            paisMenorTemperatura=pais;
            banderaTemperatura++;
        }
        if(temperatura<menorTemperatura)
        {
            menorTemperatura=temperatura;
            paisMenorTemperatura=pais;
        }

        salir=prompt("Desea salir?");

    }while(salir!="si");

    promedio=acumuladorHabitantes/contador;

    document.write("<br>En total hay "+contadorPares+" temperaturas pares </br>");
    document.write("<br>El pais con menor habitantes es "+nombrePais+" y tiene "+menorCantidadHabitantes+" millones de habitantes</br>");
    document.write("<br>Los paises que superan los 40° en total son "+contadorPaises+" </br>");
    document.write("<br>El promedio de habitantes es "+promedio+" </br>");
    document.write("<br>La temperatura minima ingresada es "+menorTemperatura+" y el país es "+paisMenorTemperatura+ "</br>");
    




    
}

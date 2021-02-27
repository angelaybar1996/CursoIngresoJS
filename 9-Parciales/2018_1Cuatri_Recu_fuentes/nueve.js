/*Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/
function mostrar()
{
    let salir;
    let nombre;
    let peso;
    let temperatura;
    let contadorPares;
    let banderaMasPesado;
    let nombreAnimal;
    let temperaturaAnimal;
    let animalMasPesado;
    let contadorAnimales;
    let acumuladorPeso;
    let contadorPeso;
    let promedioPeso;
    let bandera;

    contadorPares=0;
    banderaMasPesado=0;
    contadorAnimales=0;
    acumuladorPeso=0;
    contadorPeso=0;
    bandera=0;

    do
    {
        nombre=prompt("Ingrese nombre:");
        while(isNaN(nombre)==false)
        {
            nombre=prompt("Error,ingrese nombre:");
        }

        peso=prompt("Ingrese peso:");
        peso=parseInt(peso);
        while(isNaN(peso)==true||peso<1||peso>1000)
        {
            peso=prompt("Error,ingrese peso:");
        }

        temperatura=prompt("Ingrese temperatura:");
        temperatura=parseInt(temperatura);
        while(isNaN(temperatura)==true||temperatura<-30||temperatura>30)
        {
            temperatura=prompt("Error,ingrese temperatura:");
        }

        if(temperatura%2==0)
        {
            contadorPares++;
        }

        if(banderaMasPesado==0)
        {
            nombreAnimal=nombre;
            temperaturaAnimal=temperatura;
            animalMasPesado=peso;
            banderaMasPesado++;
        }
        else
        {
            if(peso>animalMasPesado)
            {
                nombreAnimal=nombre;
                temperaturaAnimal=temperatura;
                animalMasPesado=peso;
            }
        }

        if(temperatura<0)
        {
            contadorAnimales++;

            if(bandera==0)
            {
            maximoPeso=peso;
            minimoPeso=peso;
            }
            else
            {
               if(peso>maximoPeso)
               {
                maximoPeso=peso;
                }
               else
               {
                  if(peso<minimoPeso)
                   { 
                    minimoPeso=peso;
                   }   
               }
            }
        }

        acumuladorPeso=acumuladorPeso+peso;
        contadorPeso++;

        salir=prompt("Desea salir?");
    }while(salir!="si");

    promedioPeso=acumuladorPeso/contadorPeso;

    document.write("La cantidad de temperaturas pares es "+contadorPares);
    document.write("El nombre del animal mas pesado es "+nombreAnimal+" y su temperatura es "+temperaturaAnimal);
    document.write("En total viven "+contadorAnimales+" animales a temperaturas menores a 0°");
    document.write("El promedio de peso de todos los animales es "+promedioPeso);
    document.write("De los animales que viven a temperaturas menores a 0° el peso maximo es "+maximoPeso+" y el minimo es "+minimoPeso);

}

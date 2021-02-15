/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
function comenzar()
{
    let minimo;
    let maximo;
    let numero;
    let numeroRandom;

    minimo=1;
    maximo=3;

    numero=Math.random()*(maximo-minimo)+minimo;
    numeroRandom=Math.round(numero);
    switch (numeroRandom)
    {
        case 1:
        numeroRandom="piedra";
        break;
        case 2:
        numeroRandom="papel";
        break;
        case 3:
        numeroRandom="tijera";
        break;
    }
    return numeroRandom;//1ro pongo return para devolver el valor
}//FIN DE LA FUNCIÓN

function piedra()
{
    let maquina;//declaro una variable para almacenar el valor en otra funcion
    maquina=comenzar();//le asigno el valor de la funcion a la varible

    if(maquina=="piedra")
    {
    alert("Empató");
    }
    else
    {
        if(maquina=="papel")
        {
            alert("Perdio");
        }
        else
        {
            if(maquina=="tijera")
            {
                alert("Ganó");
            }
        }
    }
}//FIN DE LA FUNCIÓN

function papel()
{
    let maquina;//declaro una variable para almacenar el valor en otra funcion
    maquina=comenzar();//le asigno el valor de la funcion a la varible

    if(maquina=="piedra")
    {
    alert("Ganó");
    }
    else
    {
        if(maquina=="papel")
        {
            alert("Empató");
        }
        else
        {
            if(maquina=="tijera")
            {
                alert("Perdió");
            }
        }
    }
}//FIN DE LA FUNCIÓN

function tijera()
{
    let maquina;//declaro una variable para almacenar el valor en otra funcion
    maquina=comenzar();//le asigno el valor de la funcion a la varible

    if(maquina=="piedra")
    {
    alert("Perdió");
    }
    else
    {
        if(maquina=="papel")
        {
            alert("Ganó");
        }
        else
        {
            if(maquina=="tijera")
            {
                alert("Empató");
            }
        }
    }
}//FIN DE LA FUNCIÓN
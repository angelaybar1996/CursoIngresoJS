
function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
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
    let mensaje;
	let maquina;//declaro una variable para almacenar el valor en otra funcion
    maquina=comenzar();//le asigno el valor de la funcion a la varible
    

    if(maquina=="piedra")
    {
    mensaje="Empató";
    }
    else
    {
        if(maquina=="papel")
        {
        mensaje="Perdio";
        }
        else
        {
            if(maquina=="tijera")
            {
            mensaje="Ganó";
            }
        }
    }
    alert(mensaje);
    return mensaje;

}//FIN DE LA FUNCIÓN
function papel()
{
    let mensaje;
	let maquina;//declaro una variable para almacenar el valor en otra funcion
    maquina=comenzar();//le asigno el valor de la funcion a la varible

    if(maquina=="piedra")
    {
    mensaje="Ganó";
    }
    else
    {
        if(maquina=="papel")
        {
        mensaje="Empató";
        }
        else
        {
            if(maquina=="tijera")
            {
            mensaje="Perdió";
            }
        }
    }
    alert(mensaje);
    return mensaje;
}//FIN DE LA FUNCIÓN
function tijera()
{
    let mensaje;
	let maquina;//declaro una variable para almacenar el valor en otra funcion
    maquina=comenzar();//le asigno el valor de la funcion a la varible

    if(maquina=="piedra")
    {
    mensaje="Perdió";
    }
    else
    {
        if(maquina=="papel")
        {
            mensaje="Ganó";
        }
        else
        {
            if(maquina=="tijera")
            {
            mensaje="Empató";
            }
        }
    }
    alert(mensaje);
    return mensaje;
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
    let piedra;
    let papel;
    let tijera;
    let resultado;
    let ganadas;
    let perdidas;
    let empates;

    ganadas=0;
    perdidas=0;
    empates=0;

    piedra=piedra();
    papel=papel();
    tijera=tijera();

   switch (piedra)
   {
    case "Ganó":
    ganadas++;
    break;
    case "Perdió":
    perdidas++;
    break;
    case "Empató":
    empates++;
    break;
   }

   switch (papel)
   {
    case "Ganó":
    ganadas++;
    break;
    case "Perdió":
    perdidas++;
    break;
    case "Empató":
    empates++;
    break;
   }

   switch (tijera)
   {
    case "Ganó":
    ganadas++;
    break;
    case "Perdió":
    perdidas++;
    break;
    case "Empató":
    empates++;
    break;
   }

	

	
}
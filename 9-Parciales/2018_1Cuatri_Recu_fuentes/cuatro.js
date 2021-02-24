function mostrar()
{
    let numeroUno;
    let numeroDos;
    let resultado;
    let division;
    let suma;

    if(numeroUno==numeroDos)
    {
        alert(numeroUno+numeroDos);
    }
    if(numeroUno>numeroDos)
    {
        division=numeroUno/numeroDos;
        alert("La división es "+division);
    }
    else
    {
        suma=numeroUno+numeroDos;
        alert("La suma es "+suma);
        if(suma<50)
        {
            alert("la suma es "+suma+" y es menor a 50");
        }
    }
    
}//FIN DE LA FUNCIÓN

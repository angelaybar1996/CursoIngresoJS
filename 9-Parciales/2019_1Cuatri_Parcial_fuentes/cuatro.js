function mostrar()
{
    let numeroUno;
    let numeroDos;

    numeroUno=prompt("Ingrese numero uno");
    numeroUno=parseInt(numeroUno);
    numeroDos=prompt("Ingrese numero dos");
    numeroDos=parseInt(numeroDos);

    if(numeroUno==numeroDos)
    {
        alert(numeroUno+numeroDos);
    }
    else
    {
        if(numeroUno>numeroDos)
        {
            resutado=numeroUno-numeroDos;
            alert("La resta es "+resutado);
            if(resultado>10)
            {
                alert("La resta es"+resutado+" y superó el 10");
            }
        }
        else
        {
            resultado=numeroUno+numeroDos;
            alert("La suma es "+resutado);
        }
    }
}//FIN DE LA FUNCIÓN

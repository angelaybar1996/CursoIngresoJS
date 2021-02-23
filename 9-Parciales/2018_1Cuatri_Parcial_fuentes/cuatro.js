function mostrar()
{
    let numeroUno;
    let numeroDos;
    let resto;
    let suma;

    numeroUno=prompt("Ingrese el primer número");
    numeroUno=parseInt(numeroUno);
    numeroDos=prompt("Ingrese el segundo número");
    numeroDos=parseInt(numeroDos);

    if(numeroUno==numeroDos)
    {
        alert(numeroUno+numeroDos);
    }
    if(numeroUno>numeroDos)
    {
        resto=numeroUno-numeroDos;
        alert("La resta es "+resto);
    }
    else
    {
        suma=numeroUno+numeroDos;
        alert("La suma es "+suma);
        if(suma>10)
        {
            alert("La suma es "+suma+" y supera el 10");
        }
    }

}

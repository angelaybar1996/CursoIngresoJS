function mostrar()
{
    let numeroUno;
    let numeroDos;
    let numeroEnComun;
    let resultado;
    let resto;

    numeroUno=prompt("Ingrese el primer número:");
    numeroUno=parseInt(numeroUno);
    numeroDos=prompt("Ingrese el segundo número:");
    numeroDos=parseInt(numeroDos);

    if(numeroUno==numeroDos)
    {
        numeroEnComun=numeroUno;
        resultado=Math.pow(numeroEnComun,2);//math.pow() se utiliza para hacer potencias
        //resultado=numeroEnComun*numeroEnComun;
        alert("El numero al cuadrado es "+resultado);

    }
    if(numeroUno%numeroDos==0)
    {
        resultado=numeroUno-numeroDos;
        alert("La resta entre ambos es "+resultado);
    }
    else
    {
        resto=numeroUno%numeroDos;
        alert("El resto es "+resto);
    }

    if(resto>3)
    {
        alert("El resto es mayor a 3");
    }

}//FIN DE LA FUNCIÓN

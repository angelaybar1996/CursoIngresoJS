function mostrar()
{
    let marca;
    let peso;
    let temperatura;
    let esNumero;
    let contadorPares;
    let masPesado;
    let masPesadoMarca;
    let bandera;
    let contadorProductos;
    let acumuladorPeso;
    let contadorPeso;
    let menosPesado;
    let promedio;
    
    contadorPares=0;
    bandera=0;
    contadorProductos=0;
    contadorPeso=0;
    acumuladorPeso=0;
    

    do
    {
        marca=prompt("Ingrese marca:");
        do
        {
            peso=prompt("Ingrese el peso:");
            peso=parseFloat(peso);
            esNumero=Number.isNaN(peso);
            if(esNumero==true||peso<1||peso>100)
            {
                alert("El peso no es válido");
            }
        }while(esNumero==true||peso<1||peso>100);
        do
        {
            temperatura=prompt("Ingrese la temperatura de almacenamiento:");
            temperatura=parseFloat(temperatura);
            if(temperatura<-30||temperatura>30)
            {
                alert("La temperatura no es válida");
            }
        }while(temperatura<-30||temperatura>30)
        if(temperatura%2==0)
        {
            contadorPares++;
        }
        if(bandera==0)
        {
            masPesado=peso;
            menosPesado=peso;
            masPesadoMarca=marca;
            bandera++;
        }
        if(peso>masPesado)
        {
            masPesado=peso;
            masPesadoMarca=marca;
        }
        else
        {
            if(peso<menosPesado)
            {
                menosPesado=peso;
            }
        }
        if(temperatura<0)
        {
            contadorProductos++;
        }
        acumuladorPeso=acumuladorPeso+peso;
        contadorPeso++;

        salir=prompt("Desea salir?");
    }while(salir!="si");

    promedio=acumuladorPeso/contadorPeso;

    document.write("La cantidad de temperaturas pares es "+contadorPares+"</br>");
    document.write("La marca del producto mas pesado es "+masPesadoMarca+" </br>");
    document.write("La cantidad de productos que se conservan a menos de 0° grados es de "+contadorProductos+"</br>");
    document.write("El promedio de peso de todos los productos es "+promedio.toFixed(2)+"</br>");
    document.write("El peso maximo es "+masPesado+" y el peso minimo es "+menosPesado+"</br>");


}//FIN DE LA FUNCIÓN

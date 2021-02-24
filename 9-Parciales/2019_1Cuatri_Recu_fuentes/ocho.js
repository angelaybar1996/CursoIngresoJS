function mostrar()
{
    let color;
    let valor;
    let salir;
    let contadorRojos;
    let otroContadorRojo;
    let contadorVehiculos;
    let acumuladorValor;
    let contadorValor;
    let promedioValor;
    let masCaro;
    let suColor;
    let bandera;

    contadorRojos=0;
    otroContadorRojo=0;
    contadorVehiculos=0;
    acumuladorValor=0;
    contadorValor=0;
    bandera=0;

    do
    {
        do
        {
            color=prompt("Ingrese un color:");
            if(color!="rojo"&&color!="amarillo"&&color!="verde")
            {
                alert("El color no es válido");
            }
        }while(color!="rojo"&&color!="amarillo"&&color!="verde");
        do
        {
            valor=prompt("Ingrese un valor:");
            valor=parseFloat(valor);
            if(valor<0||valor>10000)
            {
                alert("El valor no es válido");
            }
        }while(valor<0||valor>10000);

        if(color=="rojo")
        {
            contadorRojos++;
            if(valor>5000)
            {
                otroContadorRojo++;
            }    
        }
        if(valor<5000)
        {
            contadorVehiculos++;
        }
        if(bandera==0)
        {
            masCaro=valor;
            suColor=color;
            bandera++
        }
        if(valor>masCaro)
        {
            masCaro=valor;
            suColor=color;
        }
        acumuladorValor=acumuladorValor+valor;
        contadorValor++;


        salir=prompt("Desea salir?")
    }while(salir!="si");

    promedioValor=acumuladorValor/contadorValor;

    document.write("La cantidad de color rojo son "+contadorRojos+"</br>");
    document.write("La cantidad de rojos con precio mayores a $5000 son "+otroContadorRojo+"</br>");
    document.write("La cantidad de vehículos con precio menor a $5000 son "+contadorVehiculos+"</br>");
    document.write("El promedio de todos los vehículos ingresados es $"+promedioValor+"</br>");
    document.write("El más caro cuesta $"+masCaro+" y es de color "+suColor+"</br>");


}

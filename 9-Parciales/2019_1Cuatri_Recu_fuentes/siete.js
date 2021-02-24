function mostrar()
{
    
    let kilo;
    let sabor;
    let i;
    let acumuladorKilos;
    let promedioKilos;
    let masLiviano;
    let bandera;
    let masLivianoSabor;
    let contadorCarne;
    let acumuladorKilosCarne;
    let promedioKilosCarne;

    acumuladorKilos=0;
    bandera=0;
    contadorCarne=0;
    acumuladorKilosCarne=0;

    for(i=0;i<10;i++)
    {
        do
        {
            kilo=prompt("Ingrese el kilo:");
            kilo=parseFloat(kilo);
            if(kilo<0||kilo>500)
            {
                alert("Error,el kilo no es valido");
            }
        }while(kilo<0||kilo>500);
        do
        {
            sabor=prompt("Ingrese el sabor de la bolsa:");
            if(sabor!="vegetales"&&sabor!="carne"&&sabor!="pollo")
            {
                alert("Error,El sabor no es válido");
            }
        }while(sabor!="vegetales"&&sabor!="carne"&&sabor!="pollo");

        acumuladorKilos=acumuladorKilos+kilo; 
        if(bandera==0)
        {
            masLiviano=kilo;
            masLivianoSabor=sabor;
            bandera++;
        }
        if(kilo<masLiviano)
        {
            masLiviano=kilo;
            masLivianoSabor=sabor;
        }
        if(sabor=="carne")
        {
            acumuladorKilosCarne=acumuladorKilosCarne+kilo;
            contadorCarne++;

        }
        
    }
    promedioKilos=acumuladorKilos/10;
    promedioKilosCarne=acumuladorKilosCarne/contadorCarne;

    alert("El promedio de los kilos es "+promedioKilos+" kilos");
    alert("El mas liviano es de sabor "+masLivianoSabor+" y pesa "+masLiviano+" kilos");
    alert("La cantidad de bolsas sabor a carne son "+contadorCarne+" y el promedio de kilos de carne es "+promedioKilosCarne+" kilos");

}//FIN DE LA FUNCIÓN

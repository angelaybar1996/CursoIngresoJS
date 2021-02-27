/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
    let salir;
    let tipo;
    let cantidadBolsas;
    let precioBolsa;
    let acumuladorPrecios;
    let acumuladorBolsas;
    let porcentaje;
    let precioDescuento;
    let acumuladorCal;
    let acumuladorCemento;
    let acumuladorArena;
    let tipoMasUnidades;
    let banderaTipo;
    
    acumuladorBolsas=0;
    acumuladorPrecios=0;
    acumuladorArena=0;
    acumuladorCal=0;
    acumuladorCemento=0;
    banderaTipo=0;

    do
    {
        tipo=prompt("Ingrese tipo:");
        while(isNaN(tipo)==false||tipo!="arena"&&tipo!="cal"&&tipo!="cemento")
        {
            tipo=prompt("Error,ingrese tipo:");
        }

        cantidadBolsas=prompt("Ingrese cantidadBolsas:");
        cantidadBolsas=parseInt(cantidadBolsas);
        while(isNaN(cantidadBolsas)==true||cantidadBolsas<0)
        {
            cantidadBolsas=prompt("Error,ingrese cantidadBolsas:");
        }

        precioBolsa=prompt("Ingrese precioBolsa:");
        precioBolsa=parseInt(precioBolsa);
        while(isNaN(precioBolsa)==true||precioBolsa<0)
        {
            precioBolsa=prompt("Error,ingrese precioBolsa:");
        }

        acumuladorBolsas=acumuladorBolsas+cantidadBolsas;
        acumuladorPrecios=acumuladorPrecios+precioBolsa;

        switch(tipo)
        {
            case "arena":
                acumuladorArena=acumuladorArena+cantidadBolsas;
                
            break;
            case "cal":
                acumuladorCal=acumuladorCal+cantidadBolsas;
                
            break;
            case "cemento":
                acumuladorCemento=acumuladorCemento+cantidadBolsas;  
            break;
        }

        if(banderaTipo==0)
        {
            tipoMasCaro=tipo;
            precioTipo=precioBolsa;
            banderaTipo++;
        }
        else
        {
            if(precioBolsa>precioTipo)
            {
                tipoMasCaro=tipo;
                precioTipo=precioBolsa;
            }
        }

        salir=prompt("Desea salir?");
    }while(salir!="si");

    if(acumuladorBolsas>10)
    {
        porcentaje=acumuladorPrecios*15/100;
    }
    else
    {
        if(acumuladorBolsas>30)
        {
            porcentaje=acumuladorPrecios*25/100;
        }
    }

    if(acumuladorArena>acumuladorCemento&&acumuladorArena>acumuladorCal)
    {
        tipoMasUnidades="arena";
    }
    else
    {
        if(acumuladorCemento>acumuladorCal)
        {
            tipoMasUnidades="cemento";
        }
        else
        {
            tipoMasUnidades="cal";
        }
    }


    alert("El importe total a pagar es "+acumuladorPrecios);
    if(acumuladorBolsas>10)
    {
        precioDescuento=acumuladorPrecios-porcentaje;
        alert("El precio con descuento es "+precioDescuento);
    }
    alert("El tipo con  mas unidades es "+tipoMasUnidades);
    alert("El tipo mas caro es "+tipoMasCaro);


 
}//FIN DE LA FUNCIÓN

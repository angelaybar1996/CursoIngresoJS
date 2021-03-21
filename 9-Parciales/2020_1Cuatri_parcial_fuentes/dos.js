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
    let tipoValidad;
    let cantidadBolsas;
    let precioBolsa;
    let acumuladorBolsas;
    let acumuladorPrecio;
    let porcentaje;
    let precioDescuento;
    let acumuladorCemento;
    let acumuladorCal;
    let acumuladorArena;
    let mayorUnidades;
    let banderaMasCaro;
    let precioMasCaro;
    let tipoMasCaro;

    acumuladorBolsas=0;
    acumuladorPrecio=0;
    acumuladorCemento=0;
    acumuladorCal=0;
    acumuladorArena=0;
    banderaMasCaro=0;

    do
    {
        tipoValidad=prompt("ingrese tipoValidad:");
        while(isNaN(tipoValidad)==false||tipoValidad!="arena"&&tipoValidad!="cal"&&tipoValidad!="cemento")
        {
            tipoValidad=prompt("Error,ingrese tipoValidad:");
        }

        cantidadBolsas=prompt("ingrese cantidadBolsas:");
        cantidadBolsas=parseInt(cantidadBolsas);
        while(isNaN(cantidadBolsas)==true||cantidadBolsas<0||cantidadBolsas>1000)
        {
            cantidadBolsas=prompt("Error,ingrese cantidadBolsas:");
        }

        precioBolsa=prompt("ingrese precioBolsa:");
        precioBolsa=parseInt(precioBolsa);
        while(isNaN(precioBolsa)==true||precioBolsa<0)
        {
            precioBolsa=prompt("Error,ingrese precioBolsa:");
        }

        acumuladorBolsas=acumuladorBolsas+cantidadBolsas;
        acumuladorPrecio=acumuladorPrecio+precioBolsa;

        switch(tipoValidad)
        {
            case "cemento":
               
                acumuladorCemento=acumuladorCemento+cantidadBolsas;
                
            break;
            case "cal":
                acumuladorCal=acumuladorCal+cantidadBolsas;
                
            break;
            case "arena":
                acumuladorArena=acumuladorArena+cantidadBolsas;
                
            break;
        }

        if(banderaMasCaro==0)
        {
            precioMasCaro=precioBolsa;
            tipoMasCaro=tipoValidad;
            banderaMasCaro++;
        }
        else
        {
            if(precioBolsa>precioMasCaro)
            {
                precioMasCaro=precioBolsa;
                tipoMasCaro=tipoValidad;
            }
        }


        salir=prompt("Desea salir?");
    }while(salir!="si");

    if(acumuladorBolsas>10)
    {
        porcentaje=acumuladorPrecio*15/100;
    }
    else
    {
        if(acumuladorBolsas>30)
        {
            porcentaje=acumuladorPrecio*25/100;
        }
    }

    if(acumuladorCemento>acumuladorCal&&acumuladorCemento>acumuladorArena)
    {
        mayorUnidades="cemento";
    }
    else
    {
        if(acumuladorCal>acumuladorArena)
        {
            mayorUnidades="cal";
        }
        else
        {
            mayorUnidades="arena";
        }
    }

    if(acumuladorBolsas>10)
    {
        precioDescuento=acumuladorPrecio-porcentaje;
        alert("El precio con descuento es "+precioDescuento);
    }

    alert("El importe total a pagar sin descuento es "+acumuladorPrecio);
    alert("El tipo con mayor cantidad de unidades es "+mayorUnidades);
    alert("El tipo mas caro es "+tipoMasCaro);

}//FIN DE LA FUNCIÓN

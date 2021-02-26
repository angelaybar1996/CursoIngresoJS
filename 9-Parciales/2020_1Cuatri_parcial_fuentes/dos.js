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
    let tipo;
    let cantidadBolsas;
    let precioBolsa;
    let salir;
    let porcentaje;
    let acumuladorPrecio;
    let acumuladorBolsas;
    let precioDescuento;
    let acumuladorCemento;
    let acumuladorArena;
    let acumuladorCal;
    let nombreTipoMayorCantidad;
    let bandera;
   
    

    acumuladorPrecio=0;
    acumuladorBolsas=0;
    acumuladorCemento=0;
    acumuladorArena=0;
    acumuladorCal=0;
    bandera=0;
    


    do
    {
        tipo=prompt("Ingrese el tipo :");
        while(isNaN(tipo)==false||tipo!="arena"&&tipo!="cal"&&tipo!="cemento")
        {
            tipo=prompt("Error,ingrese el tipo :");  
        }

        cantidadBolsas=prompt("Ingrese el cantidadBolsas :");
        cantidadBolsas=parseInt(cantidadBolsas);
        while(isNaN(cantidadBolsas)==true||cantidadBolsas<0)
        {
            cantidadBolsas=prompt("Error,ingrese el cantidadBolsas :");  
        }

        precioBolsa=prompt("Ingrese el precioBolsa :");
        precioBolsa=parseInt(precioBolsa);
        while(isNaN(precioBolsa)==true||precioBolsa<0)
        {
            precioBolsa=prompt("Error,ingrese el precioBolsa :");  
        }

        acumuladorPrecio=acumuladorPrecio+precioBolsa;
        acumuladorBolsas=acumuladorBolsas+cantidadBolsas;

        switch(tipo)
        {
            case "cemento":
                acumuladorCemento=acumuladorCemento+cantidadBolsas;
                
            break; 
            case "arena":
                acumuladorArena=acumuladorArena+cantidadBolsas;
               
            break; 
            case "cal":
                acumuladorCal=acumuladorCal+cantidadBolsas;
            break; 
        }

        if(bandera==0)
        {
            tipoMasCaro=tipo;
            precioMasCaro=precioBolsa;
            bandera++;
        }
        else
        {
            if(precioBolsa>precioMasCaro)
            {
                tipoMasCaro=tipo;
                precioMasCaro=precioBolsa;
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

    if(acumuladorBolsas>10)
    {
        precioDescuento=acumuladorPrecio-porcentaje;
        alert("El importe con descuento es $"+precioDescuento);
    }

    if(acumuladorArena>acumuladorCemento&&acumuladorArena>acumuladorCal)
    {
        nombreTipoMayorCantidad="arena";   
    }
    else
    {
        if(acumuladorCemento>acumuladorCal)
        {
            nombreTipoMayorCantidad="cemento"; 
        }
        else
        {
            nombreTipoMayorCantidad="cal";
        }
    }

    

    alert("El importe bruto es $"+acumuladorPrecio);
    alert("El tipo con mas cantidad de bolsas es "+nombreTipoMayorCantidad);
    alert("El tipo mas caro es "+tipoMasCaro);








 
}//FIN DE LA FUNCIÓN

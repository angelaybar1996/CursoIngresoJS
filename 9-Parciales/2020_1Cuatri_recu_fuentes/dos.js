/*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
 */
function mostrar()
{
   let salir;
   let tipoValidad;
   let cantidadBolsas;
   let precioBolsas;
   let acumuladorBolsas;
   let acumuladorPrecios;
   let porcentaje;
   let precioDescuento;
   let acumuladorCemento;
   let acumuladorCal;
   let acumuladorArena;
   let tipoMayorBolsas;
   let banderaTipo;

   acumuladorBolsas=0;
   acumuladorPrecios=0;
   acumuladorArena=0;
   acumuladorCal=0;
   acumuladorCemento=0;
   banderaTipo=0;



   do
   {
           tipoValidad=prompt("Ingrese el tipo:");
           while(isNaN(tipoValidad)==false||tipoValidad!="arena"&&tipoValidad!="cal"&&tipoValidad!="cemento")
           {
              tipoValidad=prompt("Error,ingrese el tipo:");
           }

           cantidadBolsas=prompt("Ingrese cantidadBolsas:");
           cantidadBolsas=parseInt(cantidadBolsas);
           while(isNaN(cantidadBolsas)==true||cantidadBolsas<0)
           {       
               cantidadBolsas=prompt("Error,ingrese cantidadBolsas:");
           }

           precioBolsas=prompt("Ingrese precioBolsas:");
           precioBolsas=parseInt(precioBolsas);
           while(isNaN(precioBolsas)==true||precioBolsas<0)
           {
              precioBolsas=prompt("Error,ingrese precioBolsas:");
           }

           acumuladorPrecios=acumuladorPrecios+precioBolsas;
           acumuladorBolsas=acumuladorBolsas+cantidadBolsas;

           switch(tipoValidad)
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
               mayorTipo=tipoValidad;
               precioMayorTipo=precioBolsas;
               banderaTipo++;
           }
           else
           {
               if(precioBolsas>precioMayorTipo)
               {
                mayorTipo=tipoValidad;
                precioMayorTipo=precioBolsas;
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

   if(acumuladorBolsas>10)
   {
       precioDescuento=acumuladorPrecios-porcentaje;
       alert("El precio con descuento es "+precioDescuento);
   }

   if(acumuladorCemento>acumuladorArena&&acumuladorCemento>acumuladorCal)
    {
        tipoMayorBolsas="cemento";
    }
    else
    {
        if(acumuladorArena>acumuladorCal)
        {
            tipoMayorBolsas="arena";
        }
        else
        {
            tipoMayorBolsas="cal";
        }
    }

   alert("El importe bruto es "+acumuladorPrecios);
   alert("El tipo con mas unidades es "+tipoMayorBolsas);
   alert("El tipo mas caro es "+mayorTipo);


}//FIN DE LA FUNCIÓN



















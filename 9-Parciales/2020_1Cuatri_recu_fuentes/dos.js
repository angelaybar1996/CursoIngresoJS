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
  let tipo;
  let cantidadBolsas;
  let precioBolsa;
  let salir;
  let acumuladorBolsas;
  let acumuladorPrecios;
  let precioDescuento;
  let porcentaje;
  let acumuladorCal;
  let acumuladorCemento;
  let acumuladorArena;
  let tipoMayorCantidad;
  let banderaTipo;

  acumuladorBolsas=0;
  acumuladorPrecios=0;
  acumuladorCal=0;
  acumuladorCemento=0;
  acumuladorArena=0;
  banderaTipo=0;


  do
  {
    tipo=prompt("Ingrese tipo:");
    while(isNaN(tipo)==false||tipo!="cal"&&tipo!="cemento"&&tipo!="arena")
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
      case "cal":
        acumuladorCal=acumuladorCal+cantidadBolsas;
      break;
      case "cemento":
        acumuladorCemento=acumuladorCemento+cantidadBolsas;
      break;
      case "arena":
        acumuladorArena=acumuladorArena+cantidadBolsas;
      break;
    }

    if(banderaTipo==0)
    {
      tipoMasCaro=tipo;
      precioMasCaro=precioBolsa;
      banderaTipo++;
    }
    else
    {
      if(precioBolsa>precioMasCaro)
      {
        precioMasCaro=precioBolsa;
        tipoMasCaro=tipo;
      }
    }

    salir=prompt("Desea salir:");
  }while(salir=!"si")

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

  if(acumuladorCal>acumuladorCemento&&acumuladorCal>acumuladorArena)
  {
    tipoMayorCantidad="cal";
  }
  else
  {
    if(acumuladorCemento>acumuladorArena)
    {
      tipoMayorCantidad="cemento";
    }
    else
    {
      tipoMayorCantidad="arena";
    }
  }

  alert("El precio bruto es "+acumuladorPrecios);
  alert("El tipo con mayor cantidad de bolsas en total es "+tipoMayorCantidad);
  alert("El tipo mas caro es "+tipoMasCaro);
}//FIN DE LA FUNCIÓN



















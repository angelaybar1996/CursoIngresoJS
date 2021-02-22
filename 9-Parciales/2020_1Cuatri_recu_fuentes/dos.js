function mostrar()
{

  let tipo;
  let cantidad;
  let precio;
  let salir;
  let porcentaje;
  let acumuladorBolsas;
  let acumuladorPrecios;
  let precioFinal;
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  let maximaCantidad;
  let maximoTipo;
  let acumuladorPrecioArena;
  let acumuladorPrecioCemento;
  let acumuladorPrecioCal;
  let maximo;

  acumuladorBolsas=0;
  acumuladorPrecios=0;
  porcentaje=0;
  acumuladorArena=0;
  acumuladorCemento=0;
  acumuladorCal=0;
  acumuladorPrecioArena=0;
  acumuladorPrecioCemento=0;
  acumuladorPrecioCal=0;

  do
  {
    do
    {
      tipo=prompt("Ingrese tipo de producto:");
      if(tipo!="arena"&&tipo!="cemento"&&tipo!="cal")
      {
        alert("Producto no válido");
      }
    }while(tipo!="arena"&&tipo!="cemento"&&tipo!="cal")
    do
    {
      cantidad=prompt("Ingrese cantidad de bolsas");
      cantidad=parseInt(cantidad);
      precio=prompt("Ingrese el precio por bolsa");
      precio=parseFloat(precio);
      if(cantidad<1&&precio<1)
      {
        alert("Error, reingrese los datos");
      }
    }while(cantidad<1&&precio<1);
    
    acumuladorBolsas=acumuladorBolsas+cantidad;
    acumuladorPrecios=acumuladorPrecios+precio;

    if(tipo=="arena")
    {
      acumuladorArena=acumuladorArena+cantidad;
      acumuladorPrecioArena=acumuladorPrecioArena+precio;
    }
    else
    {
      if(tipo=="cemento")
      {
        acumuladorCemento=acumuladorCemento+cantidad;
        acumuladorPrecioCemento=acumuladorPrecioCemento+precio;
      }
      else
      {
        if(tipo=="cal")
        {
          acumuladorCal=acumuladorCal+cantidad;
          acumuladorPrecioCal=acumuladorPrecioCal+precio;
        }
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
  precioFinal=acumuladorPrecios-porcentaje;
  if(porcentaje!=0)
  {
    alert("El importe final con descuento es $"+precioFinal);
  }
  if(acumuladorArena>acumuladorCemento&&acumuladorArena>acumuladorCal)
  {
    maximaCantidad=acumuladorArena;
    maximoTipo="arena";
  }
  else
  {
    if(acumuladorCemento>acumuladorCal)
    {
      maximaCantidad=acumuladorCemento;
      maximoTipo="cemento";
    }
    else
    {
      maximaCantidad=acumuladorCal;
      maximoTipo="Cal";
    }
  }
  if(acumuladorPrecioArena>acumuladorPrecioCemento&&acumuladorPrecioArena>acumuladorCal)
  {
    maximo="arena";
  }
  else
  {
    if(acumuladorPrecioCemento>acumuladorPrecioCal)
    {
      maximo="cemento";
    }
    else
    {
      maximo="cal";
    }
  }


alert("El importe total bruto sin descuento es $"+acumuladorPrecios);
alert("El tipo con mayor cantidad de bolsas es "+maximoTipo+" y tiene "+maximaCantidad+" bolsas");
alert("El tipo de producto mas caro es "+maximo);
}//FIN DE LA FUNCIÓN


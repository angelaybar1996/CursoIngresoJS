function mostrar()
{

  let tipo;
  let cantidad;
  let precio;
  let acumuladorBolsas;
  let acumuladorPrecios;
  let porcentaje;
  let precioDescuento;
  let acumuladorCemento;
  let acumuladorCal;
  let acumuladorArena;
  let mayorTipo;
  let bandera;
  let masCaro;
  let nombreMasCaro;

  acumuladorBolsas=0;
  acumuladorPrecios=0;
  acumuladorCemento=0;
  acumuladorCal=0;
  acumuladorArena=0;
  bandera=0;




  do
  {
	  tipo=prompt("Ingrese tipo:");
	  while(isNaN(tipo)==false||tipo!="cemento"&&tipo!="cal"&&tipo!="arena")
	  {
		  tipo=prompt("Error,ingrese tipo:");
	  }

	  precio=prompt("Ingrese precio:");
	  precio=parseInt(precio);
	  while(isNaN(precio)==true||precio<0)
	  {
		  precio=prompt("Error,ingrese precio:");
	  }
	
	  cantidad=prompt("Ingrese cantidad de unidades:");
	  cantidad=parseInt(cantidad);
	  while(isNaN(cantidad)==true||cantidad<0)
	  {
		  cantidad=prompt("Error,ingrese cantidad de unidades:");
	  }

    acumuladorBolsas=acumuladorBolsas+cantidad;
    acumuladorPrecios=acumuladorPrecios+precio;

    switch(tipo)
    {
      case "arena":
        acumuladorArena=acumuladorArena+cantidad;
      break;
      case "cemento":
        acumuladorCemento=acumuladorCemento+cantidad;
      break;
      case "cal":
        acumuladorCal=acumuladorCal+cantidad;
      break;
    }

    if(bandera==0)
    {
      masCaro=precio;
      nombreMasCaro=tipo;
      bandera++;
    }
    else
    {
      if(precio>masCaro)
      {
        masCaro=precio;
        nombreMasCaro=tipo;
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
      porcentaje=acumuladorBolsas*30/100;
    }
  }
  if(acumuladorBolsas>10)
  {
    precioDescuento=acumuladorPrecios-porcentaje;
    alert("El precio total con descuento es "+precioDescuento);
  }

  if(acumuladorCal>acumuladorCemento&&acumuladorCal>acumuladorArena)
  {
    mayorTipo="Cal";
  }
  else
  {
    if(acumuladorCemento>acumuladorArena)
    {
      mayorTipo="Cemento";
    }
    else
    {
      mayorTipo="Arena";
    }
  }

  alert("El tipo con mas cantidad de bolsas es "+mayorTipo);
  alert("El tipo mas caro es "+nombreMasCaro+" y cuesta $"+masCaro);
  




}//FIN DE LA FUNCIÓN

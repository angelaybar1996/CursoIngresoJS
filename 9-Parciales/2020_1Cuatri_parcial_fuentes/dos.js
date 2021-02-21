function mostrar()
{
  let tipo;
  let cantidad;
  let precio;
  let i;
  
  let descuento;
  let acumuladorCantidad;
  let acumuladorPrecio;
  let precioFinal;
  let maximo;
  let cantidadTotalTipo;
  let nombreTipo;
  let precioTotalTipo;
  let masCaro;

  tipo=[];
  cantidad=[];
  precio=[];
  i=0;
  acumuladorCantidad=0;
  acumuladorPrecio=0;
  cantidadTotalTipo=[0,0,0];
  precioTotalTipo=[0,0,0];

  do
  {
    do
    {
      tipo[i]=prompt("Ingrese producto:");
      switch(tipo[i])
      {
        case "arena":
        case "cemento":
        case "cal":
        break;
        default:
          alert("el producto no es valido");
        break;
      }
    }while(tipo[i]!="arena"&&tipo[i]!="cemento"&&tipo[i]!="cal");//validado el tipo
    do
    {
      cantidad[i]=prompt("ingrese cantidad de bolsas:");
      cantidad[i]=parseInt(cantidad[i]);
      precio[i]=prompt("Ingrese precio:");
      precio[i]=parseFloat(precio[i]);
      
      if(tipo[i]=="arena")
      {
        cantidadTotalTipo[0]=cantidadTotalTipo[0]+cantidad[i];
        precioTotalTipo[0]=precioTotalTipo[0]+precio[i];
      }
      else
      {
        if(tipo[i]=="cemento")
        {
          cantidadTotalTipo[1]=cantidadTotalTipo[1]+cantidad[i];
          precioTotalTipo[1]=precioTotalTipo[1]+precio[i];
        }
        else
        {
          if(tipo[i]=="cal")
          {
            cantidadTotalTipo[2]=cantidadTotalTipo[2]+cantidad[i];
            precioTotalTipo[2]=precioTotalTipo[2]+precio[i];
          }
        }
      }
      if(cantidad[i]<0 && precio[i]<0)
      {
        alert("la cantidad no es valida");
      }
      acumuladorCantidad=acumuladorCantidad+cantidad[i];//con este averiguo la cantidad total
      acumuladorPrecio=acumuladorPrecio+precio[i];//con este averiguo el precio total
    }while(cantidad[i]<0&&precio[i]<0)
    i++
    salir=prompt("Desea salir?");
    
  }while(salir!="si");//validado precio y cantidad

  if(acumuladorCantidad>10)
  {
    descuento=acumuladorPrecio*15/100;
    precioFinal=acumuladorPrecio-descuento;
    alert("El total a pagar es de "+precioFinal);
  } 

  if(acumuladorCantidad>30)
  {
    descuento=acumuladorPrecio*25/100;
    precioFinal=acumuladorPrecio-descuento;
    alert("El total a pagar es de "+precioFinal);
  } 

  alert("El importe total a pagar es "+acumuladorPrecio);//punto A

  maximo=0
  for(i=0;i<cantidadTotalTipo.length;i++)
  {
    if(maximo<cantidadTotalTipo[i])
    {
      maximo=cantidadTotalTipo[i];
      if(cantidadTotalTipo[i]==cantidadTotalTipo[0])
      {
        nombreTipo="arena";
      }
      else
      {
        if(cantidadTotalTipo[i]==cantidadTotalTipo[1])
        {
          nombreTipo="cemento";
        }
        else
        {
          if(cantidadTotalTipo[i]==cantidadTotalTipo[2])
          {
            nombreTipo="cal";
          }
        }
      }
    }
  }
  alert("El producto "+nombreTipo+" tiene mayor cantidad de bolsas, "+maximo+" en total");

  masCaro=0;
  unicaVez=0;
  for(i=0;i<precioTotalTipo.length;i++)
  {
    if(unicaVez==0)
    {
      masCaro=precioTotalTipo[i];
      unicaVez++;
    }

    if(precioTotalTipo[i]>=masCaro)
    {
      masCaro=precioTotalTipo[i];
      if(precioTotalTipo[i]==precioTotalTipo[0])
      {
        nombreTipo="arena";
      }
      else
      {
        if(precioTotalTipo[i]==precioTotalTipo[1])
        {
          nombreTipo="cemento";
        }
        else
        {
          if(precioTotalTipo[i]==precioTotalTipo[2])
          {
            nombreTipo="cal";
          }
        }
      }
    }
  }
  alert("El tipo mas caro es "+nombreTipo);

}//FIN DE LA FUNCIÓN

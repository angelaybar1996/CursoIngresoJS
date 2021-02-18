function mostrar()
{
 let producto;
 let tipo;
 let cantidad;
 let cantidadCemento;
 let cantidadArena;
 let cantidadCal;
 let precioCemento;
 let precioArena;
 let precioCal;
 let totalCemento;
 let totalArena;
 let totalCal;
 let precioTotal;
 let cantidadTotal;
 let ultimoPrecio;
 let mensaje;
 let salir;

 cantidadCemento=0;
 cantidadArena=0;
 cantidadCal=0;

 do 
 {
  producto=prompt("Ingrese producto:");
  cantidad=prompt("Ingrese cantidad:");
  cantidad=parseInt(cantidad);

  switch (producto)
  {
    case "cemento":
    tipo="cemento";
    precioCemento=45;
    cantidadCemento=cantidadCemento+cantidad;
    break;
    case "arena":
    tipo="arena";
    precioArena=68;
    cantidadArena=cantidadArena+cantidad;
    break;
    case "cal":
    tipo="cal";
    precioCal=70;
    cantidadCal=cantidadCal+cantidad;
    break;
    default:
    alert("no es válido");
    break;
  }
  salir=prompt("Desea salir:");

 }while (salir!="si");

 
 totalCemento=precioCemento*cantidadCemento;
 totalArena=precioArena*cantidadArena;
 totalCal=precioCal*cantidadCal;

 precioTotal=totalCemento+totalArena+totalCal;
 cantidadTotal=cantidadCemento+cantidadArena+cantidadCal;

 if(cantidadTotal>10)
 {
  descuento=precioTotal*15/100;
  mensaje="Con descuento, TOTAL $"+ultimoPrecio;
 }
 else
 {
   if(cantidadTotal>25)
   {
    descuento=precioTotal*25/100;
    mensaje="Con descuento, TOTAL $"+ultimoPrecio;
   }
   else
   {
    mensaje="Sin descuento, TOTAL $"+precioTotal;
   }
 }
 ultimoPrecio=precioTotal-descuento;
 alert(mensaje);
 

 if(cantidadCemento>cantidadArena && cantidadCemento>cantidadCal)
 {
  mensaje="El cemento tiene más cantidad de bolsas, "+cantidadCemento+" en total";
 }
 else
 {
   if(cantidadArena>cantidadCal)
   {
    mensaje="La arena tiene más cantidad de bolsas, "+cantidadArena+" en total";
   }
   else
   {
    mensaje="La cal tiene más cantidad de bolsas, "+cantidadCal+" en total";
   }
 }
 alert(mensaje);

 if(totalCemento>totalArena && totalCemento>totalCal)
 {
 mensaje="El cemento es el tipo más caro, $"+totalCemento+" en total";
 }
 else
 {
   if(totalArena>totalCal)
   {
    mensaje="La arena es el tipo más caro, $"+totalArena+" en total";
   }
   else
   {
    mensaje="La cal es el tipo más caro, $"+totalCal+" en total";
   }
 }
 alert(mensaje);

}//FIN DE LA FUNCIÓN

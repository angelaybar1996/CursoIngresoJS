/*
Angel Aybar TP 01- FerreteFacturacion
1.Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;

   precioUno=document.getElementById("txtIdPrecioUno").value;
   precioUno=parseInt(precioUno);
   precioDos=document.getElementById("txtIdPrecioDos").value;
   precioDos=parseInt(precioDos);
   precioTres=document.getElementById("txtIdPrecioTres").value;
   precioTres=parseInt(precioTres);

   suma=precioUno+precioDos+precioTres;

alert("La suma es $"+suma);
}

function Promedio () 
{
    let precioUno; 
    let precioDos;
    let precioTres;
    let suma;
    let promedio;

    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioUno=parseInt(precioUno);
    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioDos=parseInt(precioDos);
    precioTres=document.getElementById("txtIdPrecioTres").value;
    precioTres=parseInt(precioTres);
       
    suma=precioUno+precioDos+precioTres;
    promedio=suma/3;

alert("El promedio es $"+promedio);

}
function PrecioFinal () 
{
   let precioUno;
   let precioDos;
   let precioTres;
   let suma;
   let iva;
   let precioFinal;

   precioUno=document.getElementById("txtIdPrecioUno").value;
   precioUno=parseInt(precioUno);
   precioDos=document.getElementById("txtIdPrecioDos").value;
   precioDos=parseInt(precioDos);
   precioTres=document.getElementById("txtIdPrecioTres").value;
   precioTres=parseInt(precioTres);

   suma=precioUno+precioDos+precioTres;
   iva=suma*21/100;
   precioFinal=suma+iva;

alert("El precio Final es $"+precioFinal);
}
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   
var precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
var precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
var precio3=parseInt(document.getElementById("txtIdPrecioTres").value);
var suma=precio1+precio2+precio3;

alert("La suma es $"+suma);
}

function Promedio () 
{
	var precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    var precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
    var precio3=parseInt(document.getElementById("txtIdPrecioTres").value);
    var suma=precio1+precio2+precio3;
    var promedio=suma/3;

alert("El promedio es $"+promedio);

}
function PrecioFinal () 
{
var precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
var precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
var precio3=parseInt(document.getElementById("txtIdPrecioTres").value);
var suma=precio1+precio2+precio3;
var iva=suma*21/100;
var precioFinal=suma+iva;

alert("El precio Final es $"+precioFinal);
}
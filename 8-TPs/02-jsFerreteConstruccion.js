/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo=document.getElementById("txtIdLargo").value;
    largo=parseInt(largo);
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseInt(ancho);

    perimetro=(largo+ancho)*2;
    alambre=perimetro*3;
    alert("Se debe comprar "+alambre+" metros de alambre");
}
function Circulo () 
{
   let radio; 
   const pi=3.14;
   let perimetro;
   let alambre;

   radio=document.getElementById("txtIdRadio").value;
   radio=parseInt(radio);
   perimetro=2*pi*radio;
   alambre=perimetro*3;

   alert("Se debe comprar "+alambre+" metros de alambre");
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let cemento;
    let cal;

    largo=document.getElementById("txtIdLargo").value;
    largo=parseFloat(largo);
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseFloat(ancho);

    area=largo*ancho;
    cemento=area*2;
    cal=area*3;
 

 alert("Para un contrapiso de "+area+"m2 se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
}
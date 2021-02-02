/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe=parseFloat(document.getElementById("txtIdImporte").value);
	var descuento= importe*25/100;
	var resultado=importe - descuento;
	document.getElementById("txtIdResultado").value=resultado;
}

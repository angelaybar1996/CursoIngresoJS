/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
   var importe= parseFloat(document.getElementById("txtIdSueldo").value);
   var aumento= importe*10/100;
   var resultado=importe+aumento;
   
   document.getElementById("txtIdResultado").value=resultado;
   
  
	
}

/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  let importe;
  let aumento;
  let resultado;

  importe=document.getElementById("txtIdSueldo").value;
  importe=parseInt(importe);
  aumento= importe*10/100;
  resultado=importe+aumento;
  document.getElementById("txtIdResultado").value=resultado;
   
  
	
}

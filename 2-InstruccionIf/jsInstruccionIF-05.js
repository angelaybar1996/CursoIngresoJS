function mostrar()
{
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
//si quiero que se cumpla una condicion u otra puedo utilizar || (ó). (alt + 124 para hacer ||)

	if (edad<13 || edad>17) {
		
		alert("Usted no es un adolescente");

	}
	
}
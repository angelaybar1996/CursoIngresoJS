function mostrar()
{
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if (edad>=18) {

		alert("Es mayor de edad");

	} else if (edad>=13 && edad<=17){
		
		alert("Es un adolescente");

	} else if(edad<13){

		alert("Es un niño");

	}

}//FIN DE LA FUNCIÓN
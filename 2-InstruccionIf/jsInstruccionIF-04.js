function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

// si quiero que dos condiciones sean verdaderas puedo utilizar el operador && (y)

	if (edad>=13 && edad<=17) {

		alert("Usted es un adolescente");
	}

}
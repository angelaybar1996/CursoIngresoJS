/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
// En un ejercicio como este cuando nose cuantas veces se va a repetir combiene usar un while y un if
while (true) {

	sexo=prompt("Ingrese su sexo","");
     
	if(sexo=="m"){

	   document.getElementById("txtIdSexo").value="Masculino";
	   break;

	}else if(sexo=="f"){

       document.getElementById("txtIdSexo").value="Femenino";
	   break;
	}else {

       alert("No es valido");

	}

}

}//FIN DE LA FUNCIÓN
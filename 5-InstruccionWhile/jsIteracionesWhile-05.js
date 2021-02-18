/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

    do
	{
		sexo=prompt("Ingrese su sexo:");
     
		if(sexo=='m')
		{
		   document.getElementById("txtIdSexo").value="Masculino";
		}
		else
		{
			if(sexo=='f')
			{
				document.getElementById("txtIdSexo").value="Femenino";
			}
			else
			{
				alert("No es valido");
			}
		}
		salir=prompt("Desea terminar:");
		
	}while(salir!="si");

}//FIN DE LA FUNCIÓN
/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() 
{
	let edad;
	let sexo;
	let estado;
	let sueldo;
	let legajo;
	let nacionalidad;
	let salir;


    do 
    {    
		edad = prompt("Ingrese edad:");
		edad = parseInt(edad);
		sexo = prompt("Ingrese sexo:");
		estado = prompt("Ingrese estado civil:");
		sueldo = prompt("Ingrese sueldo bruto:");
		sueldo = parseInt(sueldo);
		legajo = prompt("Ingrese legajo:");
		legajo = parseInt(legajo);
		nacionalidad = prompt("Ingrese su nacionalidad:");
	
		if (edad <18 || edad > 90)
		{
		edad= "no es valido";
		}//if edad
	
		if (sexo == "masculino")
		{
		sexo = "M";
		}
		else
		{
			if (sexo == "femenino")
			{
			sexo = "F";
			}
			else 
			{
			sexo= "no es valido";
			}
		}//if sexo
	
		if(estado=="soltero")
		{
		estado=1;
		}
		else
		{
			if(estado=="casado")
			{
			estado=2;
			}
			else
			{
				if(estado=="divorciado")
				{
					estado=3;
				}
				else
				{
					if(estado=="viudo")
					{
						estado=4;
					}
					else
					{
					estado= "no es valido";
					}
				}
			}
		}//if estado
	
		if(sueldo<8000)
		{
		sueldo = "no es valido";
		}//if sueldo
	
		if (legajo<999 || legajo>9999) 
		{
		legajo = "no es valido";
		}//if legajo
	
		if(nacionalidad=="argentino")
		{
		nacionalidad="A";	
		}
		else
		{
			if(nacionalidad=="extranjero")
			{
			nacionalidad="E";
			}
			else
			{
				if(nacionalidad=="nacionalizado")
				{
				nacionalidad="N";
				}
				else
				{
				nacionalidad="no es valido";
				}
			}
		}//if nacionalidad
		document.getElementById("txtIdEdad").value = edad;
		document.getElementById("txtIdSexo").value = sexo;
		document.getElementById("txtIdEstadoCivil").value = estado;
		document.getElementById("txtIdSueldo").value = sueldo;
		document.getElementById("txtIdLegajo").value = legajo;
		document.getElementById("txtIdNacionalidad").value=nacionalidad;

		salir=prompt("desea salir:");
    } while (salir!="si");
	







}

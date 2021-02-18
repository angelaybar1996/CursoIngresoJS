function mostrar()
{
let nombres;
let edades;
let sexo;
let estados;
let temperaturas;
let mensaje;
let i;

let maximo;//variables para el punto a)
let puntoA;

//variables para el punto b)
//let cantidadViudos;

//let cantidadAmbos;//variables para el punto c)

//let cantidadD;//variables para el punto d)

let cantidad;

let salir;

nombres=[];
edades=[];
sexo=[];
estados=[];
temperaturas=[];

maximo=0;

//cantidadViudos=0;

//cantidadAmbos=0;

//cantidadD=0;
cantidad=[];
cantidad[0]=0;
i=0;

  do
  {
   nombres[i]=prompt("Ingrese nombre:");
   edades[i]=prompt("Ingrese edad:");
   edades[i]=parseInt(edades[i]);
   if(edades[i]<1 || edades[i]>105)
   {
	mensaje="La edad no es valida";
   }

   sexo[i]=prompt("Ingrese su sexo:");
   if(sexo[i]=="masculino")
   {
	sexo[i]='m';
   }
   else
   {
	   if(sexo[i]=="femenino")
	   {
		sexo[i]='f'
	   }
	   else
	   {
		mensaje="El sexo no es valido";
	   }
   }

   estados[i]=prompt("Ingrese estado civil:");
   switch(estados[i])
   {
	case "soltero":
	break;
	case "casado":
	break;
	case "viudo":
	break;
	default:
	mensaje="El estado civil no es valido";
	break;
   }

   temperaturas[i]=prompt("Ingrese temperatura corporal:");
   temperaturas[i]=parseInt(temperaturas[i]);
   if(temperaturas[i]<32 || temperaturas[i]>40)
   {
	mensaje="La temperatura no es valida";
   }
   i++;
   alert(mensaje);
   salir=prompt("Desea terminar?:");
  }while (salir!="si");

	for(i=0;i<temperaturas.length;i++)//Averiguar la temperatura mas alta
	{
	  if(maximo<temperaturas[i])
	  {
	  maximo=temperaturas[i];
	  puntoA=nombres[i];//Asi determino el nombre de la persona con la temperatura mas alta
	  }
	}
	alert(puntoA+" tiene la temperatura mas alta y es de "+maximo+" grados"); 

	for(i=0;i<edades.length;i++)//Acá averiguo la cantidad de mayores de edad viudos
	{
		if(edades[i]>17)
		{
			if(estados[i]=="viudo")
			{
				cantidad[0]=cantidad[0]+1;
			//cantidadViudos++;
			//fijarme si puedo haccer una variable cantidad vector para todas
			//las cantidades que tengo que averiguar;
			}
		} 
	}
	alert("En total hay "+cantidad[0]+/*+cantidadViudos+"*/ "viudos mayores de edad");

	/*for(i=0;i<estados.length;i++)
	{
		if(estados[i]=="viudo"||estados[i]=="soltero")
		{
        //cantidadAmbos++;
		}
	}
	alert("En total son "/*+cantidadAmbos+"*/ //solteros o viudos");

    /*edadMayor=0;
	for(i=0;i<edades.length;i++)
	{
		if(edadMayor<edades[i])
		{
			edadMayor=edades[i];
			if(edadMayor>60)
			{
				if(temperaturas[i]>38)
				{
					//cantidadD++;
				}
			}
		}
	}
	alert("En total hay "/*+cantidadD+*//*" personas de la tercera edad con temperaturas superiores a los 38°C");*/
}




  


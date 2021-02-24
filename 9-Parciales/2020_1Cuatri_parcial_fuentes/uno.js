function mostrar()
{
	
let contadorVueltas;
let tipoIngresado;
let precioIngresado;
let cantidadIngresada;
let marcaIngresada;
let fabricante;
let bandera;
let contadorUnidadesAlcohol;
let fabricanteAlcohol;
let masBarato;
let mayorUnidades;
let mayorUnidadesContador;
let acumuladorJabon;
let acumuladorAlcohol;
let acumuladorBarbijo;
let contadorJabon;
let contadorAlcohol;
let contadorBarbijo;
let promedioCompra;

contadorVueltas=0;
bandera=0;
contadorUnidadesAlcohol=0;
acumuladorJabon=0;
acumuladorAlcohol=0;
acumuladorBarbijo=0;
contadorAlcohol=0;
contadorJabon=0;
contadorBarbijo=0;
mayorUnidadesContador=0;

//b) Del tipo con mas unidades, el promedio por compra

  while(contadorVueltas<5)
  {
	tipoIngresado=prompt("Ingrese tipo:");
	while(isNaN(tipoIngresado)==false||tipoIngresado!="barbijo"&&tipoIngresado!="jabon"&&tipoIngresado!="alcohol")
	{
		tipoIngresado=prompt("Error,ingrese tipo:");
	}

	precioIngresado=prompt("Ingrese precio:");
	precioIngresado=parseInt(precioIngresado);
	while(isNaN(precioIngresado)==true||precioIngresado<100||precioIngresado>300)
	{
		precioIngresado=prompt("Error,ingrese precio:");
	}
	
	cantidadIngresada=prompt("Ingrese cantidad de unidades:");
	cantidadIngresada=parseInt(cantidadIngresada);
	while(isNaN(cantidadIngresada)==true||cantidadIngresada<0||cantidadIngresada>1000)
	{
		cantidadIngresada=prompt("Error,ingrese cantidad de unidades:");
	}

	marcaIngresada=prompt("Ingrese marca:");
	while(isNaN(marcaIngresada)==false)
	{
		marcaIngresada=prompt("Error,ingrese marca:");
	}

	fabricante=prompt("Ingrese fabricante:");
	while(isNaN(fabricante)==false)
	{
		fabricante=prompt("Error,ingrese fabricante:");	
	}

	/*if(tipoIngresado=="alcohol")
	{
		if(bandera==0)
		{
			masBarato=precioIngresado;
			contadorUnidadesAlcohol=cantidadIngresada;
			fabricanteAlcohol=fabricante;
			bandera++;
		}
		else
		{
			if(precioIngresado<masBarato)
		    {
			masBarato=precioIngresado;
			contadorUnidadesAlcohol=cantidadIngresada;
			fabricanteAlcohol=fabricante;
		    } 
		}
	}*/
	
	switch(tipoIngresado)
	{
		case "alcohol":
			acumuladorAlcohol=acumuladorAlcohol+cantidadIngresada;
		    contadorAlcohol++;
			if(bandera==0)
		   {
			    masBarato=precioIngresado;
			    contadorUnidadesAlcohol=cantidadIngresada;
			    fabricanteAlcohol=fabricante;
			    bandera++;
		    }
		    else
		    {
			   if(precioIngresado<masBarato)
		       {
			        masBarato=precioIngresado;
			        contadorUnidadesAlcohol=cantidadIngresada;
			        fabricanteAlcohol=fabricante;
		        } 
		    }
		break;
		case "barbijo":
			acumuladorBarbijo=acumuladorBarbijo+cantidadIngresada;
			contadorBarbijo++;
		break;
		case "jabon":
			acumuladorJabon=acumuladorJabon+cantidadIngresada;
			contadorJabon++;
		break;
	}

	contadorVueltas++;
  }

  if(acumuladorJabon>acumuladorBarbijo&&acumuladorJabon>acumuladorAlcohol)
	{
		mayorUnidades=acumuladorJabon;
		mayorUnidadesContador=contadorJabon;
	}
	else
	{
		if(acumuladorBarbijo>acumuladorAlcohol)
		{
			mayorUnidades=acumuladorBarbijo;
			mayorUnidadesContador=contadorBarbijo;
		}
		else
		{
			mayorUnidades=acumuladorAlcohol;
			mayorUnidadesContador=contadorAlcohol;
		}
	}

  promedioCompra=mayorUnidades/mayorUnidadesContador;

  alert("El alcohol mas barato tiene "+contadorUnidadesAlcohol+" unidades y su fabricante es "+fabricanteAlcohol);
  alert("El promedio de compra del producto con mayor unidades es "+promedioCompra);
  alert("En total hay "+acumuladorJabon+" unidades de jabones");









}

/*



	/*let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let i;

	let barato;//punto A
	let unicaVez;//punto A
	let a;// punto A
	let b;// punto A
	let contadorTipo;
	let acumuladorPrecio;
	let acumuladorUnidades;
	let mayorUnidades;//punto B
	let promedio;//punto B
	let nombreTipo;// punto B
	let c;//punto B
	let d;//punto B
	let jabones;//punto C

	tipo=[];
	precio=[];
	cantidad=[];
	marca=["espadol","johnsons","nivea","dove","lux"];
	fabricante=["unilever","PyG","palmolive","porta","pharma"];
	
	contadorTipo=[0,0,0];
	acumuladorPrecio=[0,0,0];
	acumuladorUnidades=[0,0,0];
	i=0;
	while(i<5)
	{
		do
		{
			tipo[i]=prompt("Ingrese un produto de prevencion de contagio:");
			switch(tipo[i])
			{
				case "barbijo":
				   contadorTipo[0]=contadorTipo[0]+1;
				break;
				case "jabon":
					contadorTipo[1]=contadorTipo[1]+1;
				break;
				case "alcohol":
					contadorTipo[2]=contadorTipo[2]+1;
				break;
				default:
					alert("El producto no es valido");
				break; 
			}
		}while(tipo[i]!="barbijo"&&tipo[i]!="jabon"&&tipo[i]!="alcohol");//Validado
		do
		{
			precio[i]=prompt("Ingrese el precio por unidad:");
			precio[i]=parseFloat(precio[i]);
			if(precio[i]>99&&precio[i]<301)
			{
				if(tipo[i]=="barbijo")
				{
					acumuladorPrecio[0]=acumuladorPrecio[0]+precio[i];
				}
				else
				{
					if(tipo[i]=="jabon")
					{
						acumuladorPrecio[1]=acumuladorPrecio[1]+precio[i];
					}
					else
					{
						if(tipo[i]=="alcohol")
						{
							acumuladorPrecio[2]=acumuladorPrecio[2]+precio[i];
						}
					}
				}
			}
			else
			{
				alert("El precio no es valido");
			}
		}while(precio[i]<100 || precio[i]>300);//Validado
		do
		{
			cantidad[i]=prompt("Ingrese la cantidad:");
			cantidad[i]=parseInt(cantidad[i]);
			if(cantidad[i]>0&&cantidad[i]<1001)
			{
				if(tipo[i]=="barbijo")
				{
					acumuladorUnidades[0]=acumuladorUnidades[0]+cantidad[i];
				}
				else
				{
					if(tipo[i]=="jabon")
					{
						acumuladorUnidades[1]=acumuladorUnidades[1]+cantidad[i];
					}
					else
					{
						if(tipo[i]=="alcohol")
						{
							acumuladorUnidades[2]=acumuladorUnidades[2]+cantidad[i];
						}
					}
				}
			}
			else
			{
				alert("La cantidad no es valida");
			}
		}while(cantidad[i]<0||cantidad[i]>1000);//Validado
    	i++;
	}

	barato=0;
	unicaVez=0;
	for(i=0;i<tipo.length;i++)
	{
		if(tipo[i]=="alcohol")
		{
			if(unicaVez==0)
			{
				barato=precio[i];
				unicaVez++;
			} 
            if(barato>=precio[i])
		    {
				barato=precio[i];
				b=fabricante[i];
				a=cantidad[i];
		    }  
		}
	}
	alert("Del alcohol mas barato el fabricante es "+b+" y la cantidad es "+a);

	mayorUnidades=0;
	for(i=0;i<acumuladorUnidades.length;i++)
	{
		if(mayorUnidades<acumuladorUnidades[i])
		{
			mayorUnidades=acumuladorUnidades[i];
			if(acumuladorUnidades[i]==acumuladorUnidades[0])
			{
				nombreTipo="barbijo";
				c=acumuladorPrecio[0];
				d=contadorTipo[0];
			}
			else
			{
				if(acumuladorUnidades[i]==acumuladorUnidades[1])
				{
					nombreTipo="jabon";
					c=acumuladorPrecio[1];
				    d=contadorTipo[1];
				}
				else
				{
					nombreTipo="alcohol";
					c=acumuladorPrecio[2];
				    d=contadorTipo[2];
				}
			}
		}
	}
	promedio=c/d;
	alert("El promedio de compra del "+nombreTipo+" es "+promedio);

	for(i=0;i<tipo.length;i++)
	{
		if(tipo[i]=="jabon")
		{
			jabones=acumuladorUnidades[1];
		}
	}
	alert("En total hay "+jabones+" jabones");*/

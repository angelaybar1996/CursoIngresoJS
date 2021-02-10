function mostrar()
{

  let numero;
  let i;
  let cantidadDivisores;
  let mensaje;

  cantidadDivisores=0;

  numero=prompt("Ingrese un número:");
  numero=parseInt(numero);

  for (i=2;i<numero;i++)
  {

	  if (numero%i==0)//si el resto del numero dividido i es cero entonces no es primo
	  {

    cantidadDivisores=cantidadDivisores+1;

	  }
	
  }

  if (cantidadDivisores!=0 || numero==1)
  {
	  
	  mensaje=numero+" no es primo";
  }
  else
  {
    mensaje=numero+" es primo";

  }

  alert(mensaje);
  


}
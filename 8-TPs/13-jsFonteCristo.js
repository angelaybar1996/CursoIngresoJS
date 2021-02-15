/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	let numeroIngresado;

    numeroIngresado=document.getElementById("txtIdNumero").value;
    numeroIngresado=parseInt(numeroIngresado);
    return numeroIngresado;
}

function NumerosPares()
{
    let numero;
    let cantidadPar;
    let cantidadImpar;
    let i;

    numero=ComenzarIngreso();
    cantidadPar=0;
    cantidadImpar=0;
    i=0;

    for(i;i<numero;i++)
    {
        if(i%2==0)//si el resto de numeroIngresado dividido 2 es 0 entonces es par
        {
        cantidadPar++;
        }
        else//sino es impar
        {
        cantidadImpar++;
        }  
    }
    alert(cantidadPar);
    return cantidadImpar;
}//Fin funcion par


function NumerosImpares()
{
   let Impares;
   Impares=NumerosPares();

   alert(Impares);
   
}//Fin funcion Impar

function NumerosDivisibles()
{
    let i;
    let numero;
    let cantidadDivisibles;

    i=1;
    cantidadDivisibles=0;
    numero=ComenzarIngreso();

    for(i;i<100;i++)
    {
       if(numero%i==0)
       {
       cantidadDivisibles++;
       }
    }
    alert(cantidadDivisibles);
}//Fin funcion CantidadDivisibles

function VerificarPrimo()
{
    let numero;
    let i;
    let cantidadDivisibles;
    let mensaje;

    i=2;
    cantidadDivisibles=0;
    numero=ComenzarIngreso();

    for(i;i<numero;i++)
    {
       if(numero%i==0)
       {
        cantidadDivisibles++;
       }
    }
    
    if(cantidadDivisibles!=0 || numero==1)
    {
     mensaje="No es primo";
    }
    else
    {
     mensaje="Es un numero primo";
    }

    alert(mensaje);
}//Fin funcion Verificar Primo

function NumerosPrimos()
{
    let numero;
    let cantidadPrimos;
    let cantidadDivisibles;
    let i;

    numero=ComenzarIngreso();
    cantidadPrimos=0;
    cantidadDivisibles=0;
    i=0;

    for(i;i<numero;i++)
    {
       
    }
    alert(cantidadPrimos);
}//Fin Funcion Numeros primos



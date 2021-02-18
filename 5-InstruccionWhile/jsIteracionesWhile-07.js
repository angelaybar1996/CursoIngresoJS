/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar(){
    
	let numero;
    let acumulador;
    let contador;
    let promedio;
    let salir;

    acumulador=0;
    contador=0;
    do
    {
        numero=prompt("Ingrese un numero:");
        numero=parseInt(numero);

        acumulador=acumulador+numero;
        contador++;

        salir=prompt("Desea terminar:");
        
    }while(salir!="si");

        
    promedio=acumulador/contador;
    document.getElementById("txtIdSuma").value=acumulador;
    document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN
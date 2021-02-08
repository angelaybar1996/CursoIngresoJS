/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar(){
    
	let numero;
    let salir;
    let acumulador;
    let suma;
    let contador;
    let promedio;

    acumulador=0;
    contador=0;

    while (true) {

        numero=prompt("Ingrese un numero:","");
        numero=parseInt(numero);

        acumulador=acumulador+numero;
        contador++;

        salir=prompt("Si desea terminar ingrese cero, sino ingrese cualquier numero:","");
        salir=parseInt(salir);

        if (salir==0) {

            break; 
        }
 
    }

    suma=acumulador;
    promedio=suma/contador;
    document.getElementById("txtIdSuma").value=suma;
    document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN
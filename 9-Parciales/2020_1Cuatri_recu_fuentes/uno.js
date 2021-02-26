/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/
function mostrar()
{
	let tipo;
    let precio;
    let cantidad;
    let marca;
    let fabricante;
    let i;
    let acumuladorBarbijo;
    let acumuladorJabon;
    let acumuladorAlcohol;
    let contadorBarbijo;
    let contadorJabon;
    let contadorAlcohol;
    let banderaJabon;
    let precioMasCaro;
    let mayorUnidades;
    let fabricanteJabon;
    let promedioCompra;
    

    i=0;
    banderaJabon=0;
    acumuladorBarbijo=0;
    acumuladorJabon=0;
    acumuladorAlcohol=0;
    contadorBarbijo=0;
    contadorJabon=0;
    contadorAlcohol=0;



    while(i<5)
    {
        tipo=prompt("Ingrese tipo:");
        while(isNaN(tipo)==false||tipo!="barbijo"&&tipo!="jabon"&&tipo!="alcohol")
        {
            tipo=prompt("Error,ingrese tipo:");
        }

        precio=prompt("Ingrese precio:");
        precio=parseInt(precio);
        while(isNaN(precio)==true||precio<100||precio>300)
        {
            precio=prompt("Error,ingrese precio:");
        }

        cantidad=prompt("Ingrese cantidad:");
        cantidad=parseInt(cantidad);
        while(isNaN(cantidad)==true||cantidad<0||cantidad>1000)
        {
            cantidad=prompt("Error,ingrese cantidad:");
        }

        marca=prompt("Ingrese marca:");
        while(isNaN(marca)==false)
        {
            marca=prompt("Error,ingrese marca:");
        }

        fabricante=prompt("Ingrese fabricante:");
        while(isNaN(fabricante)==false)
        {
            fabricante=prompt("Error,ingrese fabricante:");
        }

        if(tipo=="jabon")
        {
            if(banderaJabon==0)
            {
                precioMasCaro=precio;
                mayorUnidades=cantidad;
                fabricanteJabon=fabricante;
            }
            else
            {
                if(precio>precioMasCaro)
                {
                    precioMasCaro=precio;
                    mayorUnidades=cantidad;
                    fabricanteJabon=fabricante; 
                }
            }
        }

        switch(tipo)
        {
            case "alcohol":
                acumuladorAlcohol=acumuladorAlcohol+cantidad;
                contadorAlcohol++;
            break;
            case "jabon":
                acumuladorJabon=acumuladorJabon+cantidad;
                contadorJabon++;
            break;
            case "barbijo":
                acumuladorBarbijo=acumuladorBarbijo+cantidad;
                contadorBarbijo++;
            break;
        }

        i++;
    }

    if(acumuladorAlcohol>acumuladorJabon&&acumuladorAlcohol>acumuladorBarbijo)
    {
        promedioCompra=acumuladorAlcohol/contadorAlcohol;
    }
    else
    {
        if(acumuladorJabon>acumuladorBarbijo)
        {
            promedioCompra=acumuladorJabon/contadorJabon;
        }
        else
        {
            promedioCompra=acumuladorBarbijo/contadorBarbijo;
        }
    }

    alert("El jabon mas caro tiene "+mayorUnidades+" unidades y su fabricante es "+fabricanteJabon);
    alert("El promedio de compra es "+promedioCompra.toFixed(2)+" del producto con mas unidades en total");
    alert("En total se compraron "+acumuladorBarbijo+" barbijos ");
	
} //FIN DE LA FUNCIÓN



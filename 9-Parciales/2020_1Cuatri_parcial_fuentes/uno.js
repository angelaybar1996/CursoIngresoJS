/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{

    let i;
    let tipo;
    let precio;
    let cantidad;
    let marca;
    let fabricante;
    let banderaAlcohol;
    let masBaratoAlcohol;
    let fabricanteAlcohol;
    let unidadesAlcohol;
    let acumuladorAlcohol;
    let acumuladorJabon;
    let acumuladorBarbijo;
    let contadorAlcohol;
    let contadorBarbijo;
    let contadorJabon;
    let promedioCompra;

    i=0;
    banderaAlcohol=0;
    acumuladorAlcohol=0;
    acumuladorJabon=0;
    acumuladorBarbijo=0;
    contadorAlcohol=0;
    contadorBarbijo=0;
    contadorJabon=0;

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


        if(tipo=="alcohol")
        {
            if(banderaAlcohol==0)
            {
                masBaratoAlcohol=precio;
                fabricanteAlcohol=fabricante;
                unidadesAlcohol=cantidad;
                banderaAlcohol++;
            }
            else
            {
                if(precio<masBaratoAlcohol)
                {
                    masBaratoAlcohol=precio;
                    fabricanteAlcohol=fabricante;
                    unidadesAlcohol=cantidad;
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

        i++
    }

    if(acumuladorAlcohol>acumuladorBarbijo&&acumuladorAlcohol>acumuladorJabon)
    {
        promedioCompra=acumuladorAlcohol/contadorAlcohol;
    }
    else
    {
        if(acumuladorBarbijo>acumuladorJabon)
        {
            promedioCompra=acumuladorBarbijo/contadorBarbijo;
        }
        else
        {
            promedioCompra=acumuladorJabon/contadorJabon;
        }
    }

    alert("El alcohol mas barato tiene "+unidadesAlcohol+" unidades y su fabricante es "+fabricanteAlcohol);
    alert("El promedio de compra del tipo con mas unidades es "+promedioCompra);
    alert("En total hay "+acumuladorJabon+" unidades de jabon");

   


}


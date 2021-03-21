/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en tota*/ 
function mostrar()
{

    let i;
    let tipo;
    let precio;
    let cantidad;
    let marca;
    let fabricante;
    let banderaAlcohol;
    let unidadesAlcohol;
    let fabricanteAlcohol;
    let precioBajoAlcohol;
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
        tipo=prompt("ingrese tipo:");
        while(isNaN(tipo)==false||tipo!="barbijo"&&tipo!="jabon"&&tipo!="alcohol")
        {
            tipo=prompt("Error,ingrese tipo:");
        }

        precio=prompt("ingrese precio:");
        precio=parseInt(precio);
        while(isNaN(precio)==true||precio<100||precio>300)
        {
            precio=prompt("Error,ingrese precio:");
        }

        cantidad=prompt("ingrese cantidad:");
        cantidad=parseInt(cantidad);
        while(isNaN(cantidad)==true||cantidad<0||cantidad>1000)
        {
            cantidad=prompt("Error,ingrese cantidad:");
        }

        marca=prompt("ingrese marca:");
        while(isNaN(marca)==false)
        {
            marca=prompt("Error,ingrese marca:");
        }

        fabricante=prompt("ingrese fabricante:");
        while(isNaN(fabricante)==false)
        {
            fabricante=prompt("Error,ingrese fabricante:");
        }

        switch(tipo)
        {
            case "alcohol":
                if(banderaAlcohol==0)
                {
                    precioBajoAlcohol=precio;
                    fabricanteAlcohol=fabricante;
                    unidadesAlcohol=cantidad;
                    banderaAlcohol++;
                }
                else
                {
                    if(precio<precioBajoAlcohol)
                    {
                        precioBajoAlcohol=precio;
                        fabricanteAlcohol=fabricante;
                        unidadesAlcohol=cantidad;
                    }
                }
                acumuladorAlcohol=acumuladorAlcohol+cantidad;
                contadorAlcohol++;
            break;
            case "barbijo":
                acumuladorBarbijo=acumuladorBarbijo+cantidad;
                contadorBarbijo++;
            break;
            case "jabon":
                acumuladorJabon=acumuladorJabon+cantidad;
                contadorJabon++;
            break;
        }





        i++;
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
    alert("Del tipo con mas unidades el promedio por compra es de "+promedioCompra.toFixed(2));
    alert("En total hay "+contadorJabon+" unidades de jabon");

    
   


}


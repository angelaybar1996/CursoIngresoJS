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
    let tipo;
    let precio;
    let cantidad;
    let marca;
    let fabricante;
    let i;
    let bandera;
    let contadorUnidades;
    let MasBaratoAlcohol;
    let fabricanteAlcohol;
    let acumuladorBarbijo;
    let acumuladorJabon;
    let acumuladorAlcohol;
    let contadorBarbijo;
    let contadorJabon;
    let contadorAlcohol;
    let promedioCompra;


    i=0;
    bandera=0;
    acumuladorBarbijo=0;
    acumuladorJabon=0;
    acumuladorAlcohol=0;
    contadorBarbijo=0;
    contadorJabon=0;
    contadorAlcohol=0; 

    while(i<5)
    {
        tipo=prompt("Ingrese el tipo :");
        while(isNaN(tipo)==false||tipo!="barbijo"&&tipo!="jabon"&&tipo!="alcohol")
        {
            tipo=prompt("Error,ingrese el tipo :");  
        }

        precio=prompt("Ingrese el precio :");
        precio=parseInt(precio);
        while(isNaN(precio)==true||precio<100||precio>300)
        {
            precio=prompt("Error,ingrese el precio :");  
        }

        cantidad=prompt("Ingrese el cantidad :");
        cantidad=parseInt(cantidad);
        while(isNaN(cantidad)==true||cantidad<0||cantidad>1000)
        {
            cantidad=prompt("Error,ingrese el cantidad :");  
        }

        marca=prompt("Ingrese el marca :");
        while(isNaN(marca)==false)
        {
            marca=prompt("Error,ingrese el marca :");  
        }

        fabricante=prompt("Ingrese el fabricante :");
        while(isNaN(fabricante)==false)
        {
            fabricante=prompt("Error,ingrese el fabricante :");  
        }

        if(tipo=="alcohol")
        {
            if(bandera==0)
            {
                MasBaratoAlcohol=precio;
                contadorUnidades=cantidad;
                fabricanteAlcohol=fabricante;
                bandera++;
            }
            else
            {
                if(precio<MasBaratoAlcohol)
                {
                    MasBaratoAlcohol=precio;
                    contadorUnidades=cantidad;
                    fabricanteAlcohol=fabricante;
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

    alert("El mas barato de los alcohol tiene "+contadorUnidades+" unidades y su fabricante es "+fabricanteAlcohol);
    alert("El promedio de compra del producto con mas unidades es "+promedioCompra);
    alert("En total hay "+acumuladorJabon+" unidades de jabon");



}


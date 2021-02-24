function mostrar()
{

    let precio;
    let porcentaje;
    let descuento;
    let precioFinal;

    precio=prompt("Ingrese el precio:");
    precio=parseInt(precio);

    porcentaje=prompt("Ingrese el porcentaje:");
    porcentaje=parseInt(porcentaje);


    descuento=precio*porcentaje/100;

    precioFinal=precio-descuento;

    document.getElementById("elPrecioFinal").value=precioFinal;

}

function mostrar()
{
    let continente;
    let cantidad;
    let dia;
    let medioDePago;
    let porcentaje;
    let porcentajeMedio;
    let precioTotal;//sin descuento
    let precioFinal;

    dia=100;
    continente=document.getElementById("Marca").value;
    cantidad=prompt("Cuantos dias desea estar?");
    cantidad=parseInt(cantidad);
    medioDePago=prompt("Por cual medio desea pagar?(debito,mercadoPago,efectivo,otros");
    precioTotal=dia*cantidad;

    switch(continente)
    {
        case "América":
            porcentaje=precioTotal*50/100;
            switch(medioDePago)
            {
                case "debito":
                    porcentajeMedio=precioTotal*10/100;
                break;
            }
        break;
        case "África":
            porcentaje=precioTotal*60/100;
            switch(medioDePago)
            {
                case "mercadoPago":
                case "efectivo":
                    porcentajeMedio=precioTotal*15/100;
                break;
            }
        break;
        case "Europa":
            porcentaje=precioTotal*20/100;
            switch(medioDePago)
            {
                case "debito":
                    porcentajeMedio=precioTotal*15/100;
                break;
                case "mercadoPago":
                    porcentajeMedio=precioTotal*10/100;
                break;
                case "otro":
                    porcentajeMedio=precioTotal*5/100;
                break;
            }
        break;
        case "Asia":
        case "Oceania":
            porcentaje=precioTotal*20/100;//recargo
        break;
    }

    switch(continente)
    {
        case "América":
        case "África":
        case "Europa":
            precioFinal=precioTotal-(porcentaje+porcentajeMedio);
        break;
        case "Asia":
        case "Oceania":
            precioFinal=precioTotal+porcentaje;
        break;
    }
    alert("El precio final es de $"+precioFinal);

}

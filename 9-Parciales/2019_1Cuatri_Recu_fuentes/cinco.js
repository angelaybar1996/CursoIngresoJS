function mostrar()
{
    let continente;
    let precio;
    let cantidadDias;
    let pago;
    let porcentaje;
    let porcentajePago;
    let precioFinal;
    let precioBruto;

    precio=100;
    porcentaje=0;
    porcentajePago=0;

    continente=document.getElementById("selecContinente").value;
    pago=document.getElementById("selecPago").value;
    cantidadDias=prompt("Ingrese la cantidad de días que desea estar:");
    cantidadDias=parseInt(cantidadDias);
    
    precioBruto=precio*cantidadDias;

    switch(continente)
    {
        case "America":
            porcentaje=precioBruto*15/100;
            switch(pago)
            {
                case "Débito":
                    porcentajePago=precioBruto*10/100;
                break;
                default:
                    
            }
        break;
        case "África":
        case "Oceania":
            porcentaje=precioBruto*30/100;
            switch(pago)
            {
                case "MercadoPago":
                case "Efectivo":
                    porcentajePago=precioBruto*15/100;
                break;
            }
        break;
        case "Europa":
            porcentaje=precioBruto*20/100;
            switch(pago)
            {
                case "Debito":
                    porcentajePago=precioBruto*15/100;
                break;
                case "MercadoPago":
                    porcentajePago=precioBruto*10/100;
                break;
                default:
                    porcentajePago=precioBruto*5/100;
                break;
            }
        break;
        case "Asia":
            porcentaje=precioBruto*20/100;
        break; 
    }
    switch(continente)
    {
        case "America":
        case "África":
        case "Oceania":
        case "Europa":
        case "Asia":
            switch(pago)
            {
                case "Cheque":
                    porcentajePago=precioBruto*15/100;
                break;
            }
        break;  
    }
    switch(continente)
    {
        case "Asia":
            precioFinal=precioBruto+porcentaje+porcentajePago;
        break;
        default:
           precioFinal=(precioBruto-porcentaje)-porcentajePago;
            switch(pago)
            {
                case "Cheque":
                    precioFinal=(precioBruto-porcentaje)+porcentajePago;
                break;
            }
        break;
    }
    alert("El precio final es "+precioFinal);

}//FIN DE LA FUNCIÓN

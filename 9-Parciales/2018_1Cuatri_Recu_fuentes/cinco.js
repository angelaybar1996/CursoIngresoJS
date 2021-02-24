function mostrar()
{
    let dia;
    let mensaje;

    dia=prompt("Ingrese un dia de la semana:");

    switch(dia)
    {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            mensaje="A trabajar"; 
        break;
        case "sabado":
        case "domingo":
            mensaje="Buen finde";
        break;
        default:
            mensaje="El dia no es válido";
        break;
    }
    alert(mensaje);

}

function mostrar()
{
    let planeta;
    let mensaje;

    planeta=prompt("Ingrese un planeta del sistema solar:");
    switch(planeta)
    {
        case "mercurio":
        case "venus":
            mensaje="Acá hace mas calor";
        break;
        case "tierra":
            mensaje="Acá vivimos";
        break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            mensaje="Acá hace mas frio";
        break;
        default:
            mensaje="No es un planeta válido";
        break;  
    }
    alert(mensaje);

}//FIN DE LA FUNCIÓN

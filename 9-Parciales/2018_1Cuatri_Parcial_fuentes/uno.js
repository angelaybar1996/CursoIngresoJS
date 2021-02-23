
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho=prompt("Ingrese el ancho del rectangulo");
    ancho=parseFloat(ancho);
    largo=prompt("Ingrese el largo del rectángulo");
    largo=parseFloat(largo);

    perimetro=(2*ancho)+(2*largo);
    alert("El perimetro es "+perimetro);


}

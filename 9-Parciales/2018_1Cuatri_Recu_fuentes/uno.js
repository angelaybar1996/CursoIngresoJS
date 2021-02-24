
function mostrar()
{
    let largo;
    let ancho;
    let perimetro;

    largo=prompt("Ingrese largo.");
    largo=parseInt(largo);

    ancho=prompt("Ingrese ancho");
    ancho=parseInt(ancho);

    perimetro=2*(largo + ancho);

    alert("El perimetro de rectangulo es "+perimetro);

}

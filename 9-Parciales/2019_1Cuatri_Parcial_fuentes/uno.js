
function mostrar()
{
    let ladoA;
    let ladoB;
    let ladoC;
    let perimetro;

    do
    {
        ladoA=prompt("ingrese el lado A");
        ladoA=parseFloat(ladoA);
        ladoB=prompt("ingrese el lado B");
        ladoB=parseFloat(ladoB);
        ladoC=prompt("ingrese el lado C");
        ladoC=parseFloat(ladoC);
    }while(ladoA!=ladoB&&ladoB!=ladoC);
   
    perimetro=ladoA+ladoB+ladoC;
    alert("El perimetro del triangulo equilatero es: "+perimetro);
    
}

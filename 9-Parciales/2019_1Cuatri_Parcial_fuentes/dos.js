function mostrar()
{
    let el;
    let ella;
    let pesoEl;
    let pesoElla;
    let acumuladorKg;
    let promedioKg;
   
    el=prompt("Ingrese su nombre:");
    ella=prompt("Ingrese el nombre de su pareja:");
    pesoEl=prompt("Ingrese su peso:");
    pesoEl=parseFloat(pesoEl);
    pesoElla=prompt("Ingrese el peso de su pareja:");
    pesoElla=parseFloat(pesoElla);

    acumuladorKg=pesoElla+pesoEl;
    promedioKg=acumuladorKg/2;

    alert("Ustedes se llaman "+el+" y "+ella+" pesan "+pesoEl+" y "+pesoElla+" kilos, que sumados son "+acumuladorKg+" kilos y el promedio de peso es "+promedioKg);


   
    
  
}

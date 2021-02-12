/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

comenzar();
function comenzar()
{
    let minimo;
    let maximo;
    let numero;
    let numeroRandom;

    minimo=1;
    maximo=3;

    numero=Math.random()*(maximo-minimo)+minimo;
    numeroRandom=Math.round(numero);
	piedra();
    papel();
    tijera();


}//FIN DE LA FUNCIÓN
function piedra()
{
    if(numeroRandom==1)
    {
        alert("Piedra");
    }
	

}//FIN DE LA FUNCIÓN
function papel()
{
    if(numeroRandom==2)
    {
        alert("Papel");
    }


}//FIN DE LA FUNCIÓN
function tijera()
{
    if(numeroRandom==3)
    {
        alert("Tijera");
    }
	

}//FIN DE LA FUNCIÓN
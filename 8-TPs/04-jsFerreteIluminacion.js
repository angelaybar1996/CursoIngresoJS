/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let lampara;
    let cantidad;
    let precio;
    let descuento;
    let precioCantidad;
    let impuesto;
    let precioFinal;

    precio=35;
    cantidad=document.getElementById("txtIdCantidad").value;
    cantidad=parseInt(cantidad);
    lampara=document.getElementById("Marca").value;

    precioCantidad= precio * cantidad;

    if (cantidad>5) 
    {
        descuento=precioCantidad*50/100;
       
        if (precioFinal>119) 
        {
            impuesto=precioFinal*10/100;
            precioFinal=precioFinal+impuesto

            alert("IIBB Usted pago $"+impuesto); 
        }        
    } 
    else
    {
        if (cantidad==5)
        {
            switch (lampara)
            {
                case "ArgentinaLuz":
                    descuento=precioCantidad*40/100;
                   
                    if (precioFinal>119) 
                    {
                        impuesto=precioFinal*10/100;
                        precioFinal=precioFinal+impuesto;
     
                        alert("IIBB Usted pago $"+impuesto);  
                    }   
                break; 
                default:
                    descuento=precioCantidad*30/100;
                   
                    if (precioFinal>119) 
                    {
                        impuesto=precioFinal*10/100;
                        precioFinal=precioFinal+impuesto;
    
                        alert("IIBB Usted pago $"+impuesto);  
                    } 
                break;
            }    
        }
        else
        {
            if (cantidad==4) 
            {
                switch (lampara)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento=precioCantidad*25/100;
                        
                        if (precioFinal>119)
                        {
                            impuesto=precioFinal*10/100;
                            precioFinal=precioFinal+impuesto;
        
                            alert("IIBB Usted pago $"+impuesto);  
                        } 
                    break;
                    default:
                        descuento=precioCantidad*20/100;
                        
                        if (precioFinal>119)
                        {
                            impuesto=precioFinal*10/100;
                            precioFinal=precioFinal+impuesto;
        
                            alert("IIBB Usted pago $"+impuesto);  
                        } 
                    break;
                }
            } 
            else
            {
                if (cantidad==3)
                {
                    switch (lampara)
                    {
                        case "ArgentinaLuz":
                            descuento=precioCantidad*15/100;
                           
                            if (precioFinal>119)
                            {
                                impuesto=precioFinal*10/100;
                                precioFinal=precioFinal+impuesto;
            
                                alert("IIBB Usted pago $"+impuesto);  
                            } 
                        break;
                        case "FelipeLamparas":
                            descuento=precioCantidad*10/100;
                            
                            if (precioFinal>119)
                            {
                                impuesto=precioFinal*10/100;
                                precioFinal=precioFinal+impuesto;
            
                                alert("IIBB Usted pago $"+impuesto);  
                            } 
                        break;
                        default:
                            descuento=precioCantidad*5/100;
                          
                            if (precioFinal>119)
                            {
                                impuesto=precioFinal*10/100;
                                precioFinal=precioFinal+impuesto;
            
                                alert("IIBB Usted pago $"+impuesto);
                            }    
                        break;
                    }
                    
                }// if (cantidad==3)

            } //if (cantidad==4) 
           
        }//if (cantidad==5) 
        
    }//if (cantidad>5)  

    precioFinal=precioCantidad-descuento;

    document.getElementById("txtIdprecioDescuento").value=precioFinal;
   
}//FIN DE LA FUNCIÓN

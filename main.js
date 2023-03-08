 let cliente = prompt("Ingrese el nombre del cliente");
 let dinero = prompt("Ingrese el dinero disponible del cliente");
 let oferta ="";
 let factura ="";
 let vueltos =0;
 let cantOpciones =0;
 let opcionElegida ="";
 let precio =0;

 if (Number(dinero) > 0)
 {
    if (Number(dinero) >= 400) {
        oferta +="1. Bonais $400\r\n"  
        precio =400;
        cantOpciones++;
    }
    if (Number(dinero) >=  1000) {
        oferta +="2. Palito de helado de agua $1000\r\n"   
        precio =1000;
        cantOpciones++;
    }
    if (Number(dinero) >=  2200) {
        oferta +="3. Palito de helado de crema $2200\r\n"  
        precio =2200;
        cantOpciones++;
    }
    if (Number(dinero) >=  1500) {
        oferta +="4. Bombón helado con arequipe $1500\r\n"  
        precio =1500;
        cantOpciones++;
    }
    if (Number(dinero) >=  2500) {
        oferta +="5. Bombón helado con chispas de chocolate $2500\r\n"  
        precio =2500;
        cantOpciones++;
    }
    if ( Number(dinero) >=  2800) {
        oferta +="6. Bombón helado con fresas $2800\r\n"  
        precio =2800;
        cantOpciones++;
    }
    if (Number(dinero) >=  2000){
        oferta +="7. Medio litro de helado $2000\r\n"   
        precio =2000;
        cantOpciones++;
    }
 }

 if (cantOpciones > 1){
 opcionElegida = prompt("Las opciones que tiene para elegir son las siguientes:\r\n"+ oferta + "Ingrese el número del producto que desea adquirir.");
 switch (Number(opcionElegida))
 {
    case 1: 
        vueltos = Number(dinero)-400;
        factura += cliente +" usted realizó la compra del producto:\r\n"
        factura += "1. Bonais por valor de 400\r\n"  
        factura += "Dinero recibido $"+dinero+".\r\n"  
        factura += "Sus vueltos son $"+vueltos+".\r\n"  
        break;
    case 2: 
        vueltos = Number(dinero)-1000;
        factura += cliente +" usted realizó la compra del producto:\r\n"
        factura += "2. Palito de helado de agua por valor de 1000\r\n"  
        factura += "Dinero recibido $"+dinero+".\r\n"  
        factura += "Sus vueltos son $"+vueltos+".\r\n"    
        break;
    case 3: 
        vueltos = Number(dinero)-2200;
        factura += cliente +" usted realizó la compra del producto:\r\n"
        factura += "3. Palito de helado de crema por valor de 2200\r\n"  
        factura += "Dinero recibido $"+dinero+".\r\n"  
        factura += "Sus vueltos son $"+vueltos+".\r\n"  
        break;
    case 4: 
        vueltos = Number(dinero)-1500;
        factura += cliente +" usted realizó la compra del producto:\r\n"
        factura += "4. Bombón helado con arequipe por valor de 1500\r\n"  
        factura += "Dinero recibido $"+dinero+".\r\n"  
        factura += "Sus vueltos son $"+vueltos+".\r\n"  
        break;
    case 5: 
        vueltos = Number(dinero)-2500;
        factura += cliente +" usted realizó la compra del producto:\r\n"
        factura += "5. Bombón helado con chispas de chocolate por valor de 2500\r\n"  
        factura += "Dinero recibido $"+dinero+".\r\n"  
        factura += "Sus vueltos son $"+vueltos+".\r\n"  
        break;
    case 6: 
        vueltos = Number(dinero)-2800;
        factura += cliente +" usted realizó la compra del producto:\r\n"
        factura += "6. Bombón helado con fresas por valor de 2800\r\n"  
        factura += "Dinero recibido $"+dinero+".\r\n"  
        factura += "Sus vueltos son $"+vueltos+".\r\n"  
        break;
    case 7: 
        vueltos = Number(dinero)-2000;
        factura += cliente +" usted realizó la compra del producto:\r\n"
        factura += "7. Medio litro de helado por valor de 2000\r\n"  
        factura += "Dinero recibido $"+dinero+".\r\n"  
        factura += "Sus vueltos son $"+vueltos+".\r\n"  
        break;
 }
}
else if (cantOpciones == 1){
    opcionElegida = confirm("El dinero le alcanza para comprarse el siguiente producto:\r\n"+oferta+"\r\n"+"Presione Aceptar si desea adquirirlo, Cancelar si prefiere no comprar.");
    if (opcionElegida)
    {
        vueltos = Number(dinero)-precio;
        factura += cliente +" usted realizó la compra del producto:\r\n"
        factura += oferta+" por valor de "+precio+"\r\n"  
        factura += "Dinero recibido $"+dinero+".\r\n"  
        factura += "Sus vueltos son $"+vueltos+".\r\n"  
    }
    else{
        factura +="Que vuelva pronto!"
    }
}
else
{
    factura +="No le alcaza el dinero para ningún producto. \r\n Que vuelva pronto!"
}
alert(factura);

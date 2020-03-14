let factura = {
    nombreEmisor:'Juan',
    rfcEmisor:'JUHSGEID72627R8',
    nombreReceptor:'Uriel',
    rfcReceptor:'MOAU9411187R8',
    concepto:[
        {nombre:'Pala', cantidad:'3', costoUnitario:79, sku:'82768734684SD'},
        {nombre:'Metro', cantidad:'2', costoUnitario:90, sku:'2676322yhd'},
        {nombre:'Pico', cantidad:'1', costoUnitario:200, sku:'HJDGHDGEH'},
        {nombre:'Desarmador', cantidad:'1', costoUnitario:40, sku:'UUDHHSKO'}

    ],
    iva:16
};


console.log(factura.nombreEmisor);
let subtotal = 0;
/*
factura.concepto.forEach(element => {
    console.log(element.nombre);  
});
*/
factura.concepto.forEach(element => {
    subtotal +=(element.cantidad*element.costoUnitario)
});

console.log('Subtotal',subtotal);

let total = (subtotal*(factura.iva/100)+subtotal);

console.log('Subtotal:', subtotal);
console.log('Total',total)

//let numeros = [7, 8, 9, 10, 2, 1, 0];
// [0, 1, 2, 3, 7, 8, 9, 10]

//console.log(numeros);
//numeros[0]= 8;

//let numeroUno= numeros[0]; //aqui es 7
//let numeroDos= numeros[1]; //aqui es 8


//se hace la comparación


if(numeroUno > numeroDos){
    console.log('Es mayor número uno')
} else{
    console.log('Es mayor número dos')
}











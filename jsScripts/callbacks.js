//Ejemplo 1
/*
function saludar(){
    alert ('Hola');
}
saludar();
*/


/*Ejemplo 2
function principal(callback){
    console.log('Se ejecuto principal');
}
principal();
*/

/*Ejemplo3

function principal(callbackUno, callbackDos, callbackTres){
    console.log('Se ejecutó principal');
    callbackUno();
    callbackDos();
    callbackTres();
}

principal(
    function(){
        console.log('Callback Uno');    
    },
    function(){
        console.log('Callback Dos');    
    },
    function(){
        console.log('Callback Tres');    
    }
    
);
*/


//    CALCULADORA 

 //1.- Evento en el clic buton
$('#calcular').click(function(){

     //2.- Obtener el valor de inputs #numUno y #numDos
    let numUno = $('#numUno').val();
    let numDos = $('#numDos').val();
    //alert(numUno);
    //alert(numDos);

     //3.- Funcion principal
    function calculadora(sumar, restar, multiplicar, dividir){
        //4.- Pasar los numeros a cada callback(sumar, restar, multiplicar y dividir)
    sumar(numUno, numDos);
    restar(numUno, numDos);
    dividir(numUno, numDos);
    multiplicar(numUno, numDos);
}

//5.- Realizar la operación en cada callback
 calculadora(
     //6.- Mostrar el resultado de cada callback en #result
     function(uno, dos){
         let result = parseInt(uno) + parseInt(dos);
         $('#result').append('<p>La suma es: '+ result);
     },
     function(uno, dos){
        let result = uno - dos;
        $('#result').append('<p>La resta es: '+ result);
    },
    function(uno, dos){
        let result = uno / dos;
        $('#result').append('<p>La divicion es: '+ result);
    },
    function(uno, dos){
        let result = uno * dos;
        $('#result').append('<p>La multiplicación es: '+ result);
    }
    
 );



});



var a = "Exemplo";
var sagas = [];
var newSaga = function(alfa){
 var c = alfa;  
 
 console.log("saia da bolha");
     sagas.push( function(betta){
        var e = betta;
        console.log(a+c+e);
    });
   
    
};

newSaga("Preto");
sagas[0]("Gato");
sagas[0]("Cachorro");
newSaga("Branco");
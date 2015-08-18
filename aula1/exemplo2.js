var a = "Exemplo";

var b = function(alfa){
 var c = alfa;  
    var d = function(betta){
        var e = betta;
        console.log(a+c+e);
    };
    d("Gato");
    d("Cachorro");
    
};

b("Preto");
b("Branco");
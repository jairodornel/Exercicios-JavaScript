function Calcular(){

    var res= document.getElementById('resul');

    var maior= 0 
    var c= 1 

    while( c<=3){

    var n1 = Number(prompt('Digite um  número :'));
    c++

    if(n1>maior){

        maior= n1 
    }

    }


    res.innerHTML="O maior numero é "+ maior 

    


}
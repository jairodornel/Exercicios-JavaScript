function Calcular(){

    var res= document.getElementById('resul');


    var n1= Number(prompt('Digite o primeiro número:'));
    var n2 = Number(prompt('Digite o segundo número'));
    var n3 = Number(prompt('Digite o terceiro número : '))


    if(n1>n2 && n1>n3 && n2>n3){

        var soma = n1+ n2 

        res.innerHTML=`Os maiores número são ${n1} e ${n2} com soma ${soma}`
    } else if( n2>n1 && n2>n3 && n1 > n3) {

        var soma = n2+ n1  
        res.innerHTML=`Os maiores número são ${n2} e ${n1} com soma ${soma}`


    } else if(n3>n1 && n3> n2  && n1> n2){

        var soma = n3+ n1  
        res.innerHTML=`Os maiores número são ${n3} e ${n1} com soma ${soma}`


    } else if(n1>n2 && n1>n3 && n3>n2 ) {

        var soma = n3+ n1  
        res.innerHTML=`Os maiores número são ${n3} e ${n1} com soma ${soma}`


    } else if(n2>n1 && n2>n3 && n3 > n1 ){

        var soma = n2+ n3  
        res.innerHTML=`Os maiores número são ${n2} e ${n3} com soma ${soma}`


    } else if(n3>n1 && n3> n2  && n2> n1 ) {
        var soma = n3+ n2  

        res.innerHTML=`Os maiores número são ${n3} e ${n2} com soma ${soma}`



    }
}
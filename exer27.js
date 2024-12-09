function Calcular(){

    var res= document.getElementById('resul'); 

    var n = Number(prompt('Digite um número :'))

    if(n%1==0 && n%n==0){

        res.innerHTML="É primo"
    } else{

        res.innerHTML="Não é primo"
    }
}
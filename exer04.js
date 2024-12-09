function Calcular(){

    var res= document.getElementById('resul');

    var n = Number(prompt('Digite um número :'));

    var suc= n + 1 

    res.innerHTML= ` O numero digitado foi ${n} e seu sucessor é ${suc}`  
}
function Calcular(){

    var res= document.getElementById('resul');

    var n1= Number(prompt('Digite o primeiro número:'));
    var n2 = Number(prompt('Digite o segundo número : '));


    var quo = n1/n2

    var rest= n1 % n2 

    res.innerHTML= ` O quociente da divisão é ${quo} o resto é ${rest}`
}
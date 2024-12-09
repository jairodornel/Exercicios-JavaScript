function Calcular(){

    var res= document.getElementById('resul');

    var r = Number(prompt("Digite o raio : "));
    var h = Number(prompt('Digite a altura : '));

    var vol= 3.14 *(r * r) * h 


    res.innerHTML= `O volume é ${vol}`


}
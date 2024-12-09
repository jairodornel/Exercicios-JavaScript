function Calcular(){

    var res= document.getElementById('resul');

    var Fara= Number(prompt('Digite a temperatura em Farenaite'));

    var c = (5/9)*(Fara-32);

    res.innerHTML= `A temperatura em Celsius é ${c}` 
}
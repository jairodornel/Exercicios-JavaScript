function Calcular(){

    var res= document.getElementById('resul');

    var L1= Number(prompt('Digite o primeiro lado do triangulo: '));
    var L2= Number(prompt('Digite o segundo lado do triangulo:'));
    var L3= Number(prompt('Digite o terceiro lado do triangulo: '));

    var peri= L1 + L2 + L3 

    res.innerHTML= ` O perimetro do triangulo é ${peri}` 
}
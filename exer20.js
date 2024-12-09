function Calcular(){

    var res= document.getElementById('resul');

    var renda= Number(prompt('Digite sua renda mensal :'));
    var valorEm= Number(prompt('Digite o valor do emprestimo :'));
    var numPres= Number(prompt('Digite o número de prestações :'));


    var calc1= 10 * renda 
    var calc2= (renda *0.3) * numPres 

    if (valorEm <= calc1 && valorEm <= calc2){


        res.innerHTML= "Emprestimo Aprovado"
    }else {

        res.innerHTML= " Emprestimo Reprovado" 
    }
}
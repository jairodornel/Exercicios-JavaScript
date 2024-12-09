function Calcular(){

    var res = document.getElementById('resul');

    var n = Number(prompt('Digite um número :'))

    if(n>0){

        res.innerHTML= "Positivo"
    }else{

        res.innerHTML="Negativo" 
    }
}
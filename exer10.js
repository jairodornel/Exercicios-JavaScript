function Calcular(){

    var res= document.getElementById('resul')

    var velo= Number(prompt('Digite a velocidade em m/s :'));

    var km = velo * 3.6 

    res.innerHTML= `A velocidade em km/h é ${km}` 
}
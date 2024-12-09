function Calcular(){

    var res= document.getElementById('resul');

    var ida= Number(prompt('Digite a idade em dias :'));

    var ano = ida / 365 

    var meses= ida/30 

    res.innerHTML= `A idade em dias é ${ida} , em meses é ${meses} , e em anos ${ano}` 
}
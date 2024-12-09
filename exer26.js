function Calcular(){

    var res=document.getElementById('resul');

    var c=1
    var soma=0

    while(c<=5){

        var n = Number(prompt('Digite um número:'));
        soma=soma+n 
        c++  
    }

    var med= soma/5

    res.innerHTML=`A media entre os número é ${med}`
}
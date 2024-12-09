function Calcular(){

    var res= document.getElementById('resul');

    var n1 = Number(prompt('Digite a nota  1:'))
    var n2 = Number(prompt('Digite a nota  2:'))
    var n3 = Number(prompt('Digite a nota  3:'))
    var n4 = Number(prompt('Digite a nota  4:'))
    var n5 = Number(prompt('Digite a nota  5:'))




    if(n1>=70 && n2>=70 && n3>=70 && n4>=70 && n5>=70){

        res.innerHTML= `A – passou em todos os exames;` 
    } else if((n1>=70 && n2>=70 && n4>=70) && ( n3<70 || n5<70)){

        res.innerHTML= `B – passou em I nota ${n1}, II nota ${n2} e IV nota ${n4}, mas não em III nota ${n3} ou V nota ${n5};`
    } else if( n1>=70 && n2>=70 && (n3>=70 || n4>=70) && n5<70){

        res.innerHTML= `C – passou em I nota ${n1} e II nota ${n2}, III nota ${n3} ou IV nota ${n4}, mas não em V nota ${n5}.`
    } else {

        res.innerHTML= "Reprovado – outras situações."
    }




}
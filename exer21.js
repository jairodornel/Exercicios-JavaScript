function Calcular(){

    var res= document.getElementById('resul');

    var n= Number(prompt('Digite um número de 1 a 7 :'));


    switch (n) {

        case 1 :
            res.innerHTML= "Hoje é Domingo"
            break;
        case 2 :
            res.innerHTML= "Hoje é Segunda"
            break;
        case 3:
            res.innerHTML= "Hoje é Terça"
            break;
        case 4:
            res.innerHTML= "Hoje é Quarta"
            break;
        case 5:
            res.innerHTML= "Hoje é Quinta"
            break;
        case 6:
            res.innerHTML= "Hoje é Sexta"
            break;
        case 7:
            res.innerHTML= "Hoje é Sabado"
            break;
        default :
            res.innerHTML= "Digite o numero correto" 
        
    }
}
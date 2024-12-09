function Calcular(){

    var res= document.getElementById('resul');

    var litro = Number(prompt('Digite a quantidade de litros de combustivel :'))
    var tipo = prompt('Digite o tipo A-alcool ou G-gasolina :');

    var presG= litro * 2.70
    var presA= litro * 1.90 


    if( litro<= 25 && tipo == 'A'){

        var des1= presA- (presG * 0.02) 
        res.innerHTML=`O preço do combustivel é ${des1}` 
    }

    if( litro> 25 && tipo == 'A'){

        var des2= presA- (presG * 0.04) 
        res.innerHTML=`O preço do combustivel é ${des2}` 
    }
    if( litro<= 25 && tipo == 'G'){

        var des3= presG- (presG * 0.03) 
        res.innerHTML=`O preço do combustivel é ${des3}` 
    }

    if( litro> 25 && tipo == 'G'){

        var des4= presG- (presG * 0.05) 
        res.innerHTML=`O preço do combustivel é ${des4}` 
    }
}
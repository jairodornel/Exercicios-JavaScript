function Calcular(){

    var res = document.getElementById('resul');

     

    var n1= Number(prompt('Digite um númenro: '));
    var n2= Number(prompt('Digite um númenro: '));
    var n3= Number(prompt('Digite um númenro: '));


    if(n1>n2 && n1>n3){

        var media = ((n1*5)+ (n2* 2.5)+ (n3*2.5)) / (5+ 2.5 + 2.5 ) 
        res.innerHTML= " A media é "+ media 
    } else if(n2>n1 && n2>n3){

        var media = ((n1*2.5)+ (n2* 5)+ (n3*2.5)) / (5+ 2.5 + 2.5 ) 
        res.innerHTML= " A media é "+ media 


    }else if(n3>n1 && n3>n2){

        var media = ((n1*2.5)+ (n2* 2.5)+ (n3*5)) / (5+ 2.5 + 2.5 ) 
        res.innerHTML= " A media é "+ media 


    }




    
    

    


    




}
function Calcular(){

    var res= document.getElementById('resul');
    var res1= document.getElementById('resul1');
    var res2= document.getElementById('resul2');
    var res3= document.getElementById('resul3');




    var carac =(prompt('Digite algo:')) 

    if(carac=='A'|| carac=='E' || carac =='I' || carac == 'O'|| carac == 'U'){

        res.innerHTML= "Vogal"
    } 
    
    if ( carac =='number'){

        res1.innerHTML= "Numero"
    }
    
    if( carac=='B'|| carac=='C' || carac =='D' || carac == 'F'|| carac == 'G'|| carac=='H'|| carac=='J' || carac =='K' || carac == 'L'|| carac == 'M' ||carac=='N'|| carac=='P' || carac =='Q' || carac == 'R'|| carac == 'S' ||carac=='T'|| carac=='V' || carac =='X' || carac == 'W'|| carac == 'Y' || carac=='Z'){

        res2.innerHTML= "É Consoante"
    } //else {

       // res3.innerHTML="É caractere especial"
    //}
} 
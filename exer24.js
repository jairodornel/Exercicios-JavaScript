function Calcular(){

    var res= document.getElementById('resul');

    var c=1 

    while(c<=100){

        if(c%2==0){

            res.innerHTML+=`${c} <br>`
        }
        c++ 
    }
}
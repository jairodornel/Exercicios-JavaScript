function Calcular(){

    var res= document.getElementById('resul');
    var res1= document.getElementById('resul1'); 

    var c=1 
    var soma=0 

    while(c<=100){

        soma= soma+ c 
        

        res.innerHTML+=`${c}`
        c++
    }

    res1.innerHTML= ` A soma total é ${soma}`
}
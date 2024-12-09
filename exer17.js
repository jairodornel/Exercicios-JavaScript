function Calcular(){

    var res=document.getElementById('resul');
    var res1= document.getElementById('resul1');

    var salario= Number(prompt('Digite o salario:'));

    var desconto = salario - (salario*0.11)
    var desc1= salario * 0.11 


    if(desc1>334.29){ 

        res1.innerHTML= ` Desconto não permitido de ${desc1}`
    } else{

        res.innerHTML=`O novo salario é de ${desconto} com desconto de ${desc1}`

    }
}
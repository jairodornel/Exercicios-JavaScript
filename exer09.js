function Calcular(){

    var res= document.getElementById('resul');

    var n1 = Number(prompt('Digite a nota 1 ')); 
    var n2 = Number(prompt('Digite a nota 2 ')); 
    var n3 = Number(prompt('Digite a nota 3 ')); 
    var n4 = Number(prompt('Digite a nota 4 ')); 

    var priBi= n1 + n2 

    var segBi= n3 + n4 

    var semestre= (priBi + segBi) / 2 

    res.innerHTML=`A nota semestral é ${semestre}` 



}
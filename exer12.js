function Calcular(){

    var res= document.getElementById('resul');
    var res1 = document.getElementById('resul1');

    var preco = Number(prompt('Digite o preço da mercadoria: '));

    var p1 = preco/3 

    var p2 = preco/2

    var pres= p2/2 

    res.innerHTML= `Opção 1 : Valor entrada ${p1}, Valor prestações ${p1}`

    res1.innerHTML= `Opção 2 : Valor entrada ${p2} , Valor prestações ${pres}`
}
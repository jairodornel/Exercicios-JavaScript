function Calcular(){

    var res= document.getElementById('resul');

    var b = Number(prompt('Digite a base do retângulo: '));

    var h = Number(prompt('Digite a altura do retangulo: ')); 

    var area= b * h 

    var peri= 2* ( h+b)

    res.innerHTML= ` A area é ${area} e o perimetro do retangulo é ${peri}`


}
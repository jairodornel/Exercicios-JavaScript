function Calcular(){

    var res= document.getElementById('resul');

    var raio= Number(prompt('Digite o raio :'));

    var area= 3.14* (raio * raio )

    var peri = 2 * 3.14 * raio 

    res.innerHTML= ` O valor da area da circunferencia é ${area} e seu perimetro é ${peri}` 
}
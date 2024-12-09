function Calcular(){

    var res= document.getElementById('resul');

    var letra = prompt('Digite uma letra em Maiusculo : ');

    if(letra=='A' || letra== 'E' || letra == 'I' || letra == 'O' || letra== 'U' ){

        res.innerHTML=`A letra digitada foi ${letra} é vogal`
    } else{

        res.innerHTML=`A letra digitada foi ${letra} é consoante` 

    }
}
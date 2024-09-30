function calcular(){
    var mont = Number(document.getElementById('mont').value)
    var taxa = Number(document.getElementById('taxa').value)
    var anos = Number(document.getElementById('anos').value)
    var x = 0;

    while(anos > 0){
        anos -= 1
        regra_de_3 = (mont * taxa) / 100
        mont = regra_de_3 + mont
        x = mont + x
    }
    x = x.toFixed(2);
    document.getElementById('p1').textContent = x
}
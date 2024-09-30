function calcular(){
    var emprestimo = Number(document.getElementById('emprestimo').value)
    var juro = Number(document.getElementById('juro').value)
    var duracao = Number(document.getElementById('duracao').value)
    
    var regra_de_3 = (emprestimo * juro) / 100
    var valor_com_juros = regra_de_3 + emprestimo
    document.getElementById('anual').textContent = `Valor Anual: R$${valor_com_juros}`
    
    var totalidade = valor_com_juros * duracao
    document.getElementById('total').textContent = `Valor Total: R$${totalidade}`
    
    var mensal = valor_com_juros / 12
    document.getElementById('mensal').textContent = `Valor Mensal: R$${mensal}`

}
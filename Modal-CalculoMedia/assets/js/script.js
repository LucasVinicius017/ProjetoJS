// Função para calcular a média e status
function calculandoMedia(notas)
{
    // Comando para obter a soma das notas de forma avançada
    // a partir do vetor notas [nota, nota, nota, nota]
    const soma = notas.reduce((total, nota) => total + nota, 0);
    //
    const media = soma / notas.length;
    const status = media >= 7 ? 'Aprovado' : 'Reprovados';
    return { media: media.toFixed(2), status };
}

// Função para salvar no localStorage
function salvarResultado(resultado)
{
    const historico = JSON.parse(localStorage.getItem('historico')) || [];
    historico.push(resultado);
    localStorage.setItem('historico', JSON.stringify(historico));
}
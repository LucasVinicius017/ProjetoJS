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

function exibirModal(resultado)
{
    const modal = document.getElementById('modal');
    const conteudo = document.getElementById('resultado');
    conteudo.innerHTML = `
    <h2>Resultado<h2/>
    <p><strong>Aluno:</strong> ${resultado.nome}</p>
    <p><strong>Disciplina:</strong> ${resultado.disciplina}</p>
    <p><strong>Notas:</strong> ${resultado.notas.join(',')}</p>
    <p><strong>Média:</strong> ${resultado.media}</p>
    <p id="resultadoM" > <strong>Status:</strong> ${resultado.status}</p>
    `;
    modal.style.display = "block";
    const resultadoM = document.getElementById('resultadoM');
    resultadoM.classList.remove('aprovado');
    resultadoM.classList.remove('reprovado');
    if (resultado.status == 'Aprovado')
    {
        resultadoM.classList.add('aprovado')
    }
    else
    {
        resultado.classList.add('reprovado')
    }
}
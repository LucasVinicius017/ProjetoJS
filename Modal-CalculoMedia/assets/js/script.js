// Função para calcular a média e status
function calcularMedia(notas)
{
    // Comando para obter a soma das notas de forma avançada
    // a partir do vetor notas[nota, nota, nota, nota]
    const soma1 = notas.reduce((total, nota) => total + nota, 0);

    // Comando mais simples para efetuar a soma das notas
    // a partir do vetor notas[nota, nota, nota, nota]
    let soma = 0;
    notas.forEach(nota => {soma += nota;});

    // Comando para obter a média das notas de forma avançada
    const media1 = soma / notas.length;

    // Comando para obter a média das notas de forma mais simples
    const qtdeNotas = notas.length;
    const media = soma / qtdeNotas;

    const status = media >= 7 ? 'Aprovado' : 'Reprovado';

    return { media: media.toFixed(2), status };
}


// Função para salvar no localStorage
function salvarResultado(resultado) {
  const historico = JSON.parse(localStorage.getItem('historico')) || [];
  historico.push(resultado);
  localStorage.setItem('historico', JSON.stringify(historico));
}

// Função para exibir modal com resultado
function exibirModal(resultado)
{
  const modal = document.getElementById('modal');
  const conteudo = document.getElementById('resultado');
  conteudo.innerHTML = `
    <h2>Resultado</h2>
    <p><strong>Aluno:</strong> ${resultado.nome}</p>
    <p><strong>Disciplina:</strong> ${resultado.disciplina}</p>
    <p><strong>Notas:</strong> ${resultado.notas.join(', ')}</p>
    <p><strong>Média:</strong> ${resultado.media}</p>
    <p id="resultadoM" ><strong>Status:</strong> ${resultado.status}</p>
  `;
  modal.style.display = 'block';
  const resultadoM = document.getElementById('resultadoM');
  resultadoM.classList.remove('aprovado');
  resultadoM.classList.remove('reprovado');
  if(resultado.status == "Aprovado")
  {
    resultadoM.classList.add('aprovado');
  }
  else
  {
    resultadoM.classList.add('reprovado');
  }
  gerarGrafico(resultado.notas);
  }

  // Função para gerar gráfico com Chart.js
function gerarGrafico(notas) {
  const ctx = document.getElementById('graficoDesempenho').getContext('2d');
  if (window.graficoAtual) window.graficoAtual.destroy();

  window.graficoAtual = new Chart(ctx, 
  {
    type: 'line',
    data: {
      labels: ['1º Tri', '2º Tri', '3º Tri', '4º Tri'],
      datasets: [{
        label: 'Notas por Trimestre',
        data: notas,
        backgroundColor: 'rgba(108, 99, 255, 0.2)',
        borderColor: 'rgba(108, 99, 255, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.3,
        pointBackgroundColor: 'rgba(108, 99, 255, 1)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 10
        }
      }
    }
  });
}

// Função para exibir histórico (com filtro opcional)
function exibirHistorico(filtro = '')
{
  const historico = JSON.parse(localStorage.getItem('historico')) || [];
  const secao = document.getElementById('historico');
  secao.innerHTML = '<h3>Histórico de Resultados</h3>';

  const filtrados = filtro
    ? historico.filter(item => item.nome.toLowerCase().includes(filtro.toLowerCase()))
    : historico;

  if (filtrados.length === 0) {
    secao.innerHTML += '<p>Nenhum resultado encontrado.</p>';
  } else {
    filtrados.forEach((item, index) => {
      secao.innerHTML += `
        <div>
	  <p>
    		<strong>${index + 1}. ${item.nome}</strong> - ${item.disciplina} | Média: ${item.media} | 
    		<span style="color: ${item.status === 'Aprovado' ? 'green' : 'red'};">
      			${item.status}
    		</span>
  	  </p>
        </div>
      `;
    });
  }

  secao.style.display = 'block';
}
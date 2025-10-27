// Aguarda o carregamento completo do DOM para garantir que todos os elementos HTML existam
document.addEventListener('DOMContentLoaded', () =>
{
    // 1. SELEÇÃO DOS ELEMENTOS DO DOM (A INTERFACE)
    // Guardamos em variáveis as referências aos elementos HTML que vamos manipular.
    const inputNumero1 = document.getElementById('numero1');
    const inputNumero2 = document.getElementById('numero2');
    const botoesOperacao = document.querySelectorAll('.grupo-operacoes button');
    const elementoResultado = document.getElementById('texto-resultado');

    // 2. ADIÇÃO DOS "OUVINTES DE EVENTOS" (EVENT LISTENERS)
    // Percorremos cada botão de operação para adicionar um evento de clique.
    botoesOperacao.forEach(botao =>
    {
        botao.addEventListener('click', () =>
        {
            // Quando um botão é clicado, chamamos a função principal 'realizarCalculo'.
            // O 'dataset.operacao' pega o valor do atributo 'data-operacao' do HTML (ex: "+", "-").
            realizarCalculo(botao.dataset.operacao);
        });
    });
    /**
     * Função principal que orquestra todo o processo de cálculo.
     * @param {string} operacao - O símbolo da operação a ser realizada ('+', '-', '*', '/').
     */
    function realizarCalculo(operacao)
    {
        // 3. COLETA E VALIDAÇÃO DAS ENTRADAS
        // Convertemos o valor dos inputs para números de ponto flutuante (com casas decimais).
        const numero1 = parseFloat(inputNumero1.value);
        const numero2 = parseFloat(inputNumero2.value);

        // Validação 1: Verifica se os campos estão vazios ou não são números.
        // A função isNaN() retorna 'true' se o valor não for um número.

        if(operacao === 'C')
        {
            inputNumero1.value = '';
            inputNumero2.value = '';
            exibirMensagem('', 'sucesso');
            return; // Encerra a execução.
        }
        else
        {
            if (isNaN(numero1) || isNaN(numero2))
            {
                exibirMensagem('Por favor, preencha ambos os campos com números válidos.', 'erro');
                return; // Encerra a execução da função se a validação falhar.
            }
        }
        
        // Validação 2: Verifica a divisão por zero, que é uma impossibilidade matemática.
        if (operacao === '/' && numero2 === 0)
        {
            exibirMensagem('Não é possível dividir por zero.', 'erro');
            return; // Encerra a execução.
        }

        // 4. REALIZAÇÃO DO CÁLCULO
        // Se todas as validações passaram, calculamos o resultado.
        const resultado = calcular(numero1, numero2, operacao);

        // 5. EXIBIÇÃO DO RESULTADO
        // Mostra o resultado formatado na tela.
        exibirMensagem(`Resultado: ${formatarNumero(resultado)}`, 'sucesso');
    }

        /**
     * Função pura que recebe os números e a operação, e retorna o resultado.
     * @param {number} num1 - O primeiro número.
     * @param {number} num2 - O segundo número.
     * @param {string} operacao - O símbolo da operação.
     * @returns {number} O resultado do cálculo.
     */

    function calcular(num1, num2, operacao)
    {
        switch (operacao) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                // Caso alguma operação inesperada ocorra.
                return 0;
        }
    }

    /**
     * Função responsável por atualizar a interface com uma mensagem (de sucesso ou erro).
     * @param {string} mensagem - O texto a ser exibido.
     * @param {string} tipo - 'sucesso' ou 'erro', para aplicar a classe CSS correta.
     */
    function exibirMensagem(mensagem, tipo)
    {
        elementoResultado.textContent = mensagem;

        // Remove classes antigas para limpar o estado
        elementoResultado.classList.remove('sucesso', 'erro');
        
        // Adiciona a classe correspondente ao tipo de mensagem
        elementoResultado.classList.add(tipo);

        // Força uma re-animação ao remover e adicionar a classe da animação
        elementoResultado.style.animation = 'none';
        elementoResultado.offsetHeight; /* truque para forçar o navegador a refazer o layout */
        elementoResultado.style.animation = ''; 
    }

        /**
     * Formata um número para ter uma apresentação mais amigável.
     * Limita as casas decimais para evitar números muito longos (ex: 1/3 = 0.333...)
     * @param {number} numero - O número a ser formatado.
     * @returns {string} O número formatado como texto.
     */
    
    function formatarNumero(numero)
    {
        // Se o número não for inteiro, fixa em no máximo 4 casas decimais.
        if (numero % 1 !== 0) {
            return numero.toFixed(4);
        }
        return numero.toString();
    }

});    
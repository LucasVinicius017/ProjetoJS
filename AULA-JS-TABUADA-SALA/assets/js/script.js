
const botaoGerar = document.getElementById("botaoGerar");

function gerarATabuada ()
{
    const entradaNumero = document.getElementById("entradaNumero");
    const resultado = document.getElementById("resultado");

    //Limpar o resultado anterior

    let numero = parseInt(entradaNumero.value);

    //Validação do número coletado da console que foi informado pelo usuário
    if(isNaN(numero) || numero < 1 || numero > 10)
    {
        resultado.innerText = "Número informado , Inválido. Verifique!";
        return;
    }

    //Geração da tabuada solicitada a partir do número
    for(let contador=1; contador<=10; contador++)
    {
        const linha = document.createElement("p");
        linha.textContent = `${numero} x ${contador} = ${numero * contador}`;

        resultado.appendChild(linha);
        
    }
}

botaoGerar.addEventListener("click", gerarATabuada);
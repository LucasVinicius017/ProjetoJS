const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');
const operacao = document.getElementById('operacao');
const primeiroNumero = document.getElementById('primeiroNumero');
const segundoNumero = document.getElementById('segundoNumero');
const resultado = document.getElementById('resultado');

//Declara as variáveis

let operacaoJs = "";
let primeiroNumeroJs = 0;
let segundoNumeroJs = 0;
let resultadoJs = 0;

function RealizaOperacao()
{

    //Atualizar o conteúdo das variáveis
    operacaoJs = operacao.value;
    primeiroNumeroJs = parseFloat(primeiroNumero.value);
    segundoNumeroJs = parseFloat(segundoNumero.value);

    if((operacaoJs == "dividir") && (segundoNumeroJs == 0))
    {
        alert("A divisão por zero não é possivel");
        return;
    }
 
    if (operacaoJs == "somar")
    {
        resultadoJs = primeiroNumeroJs + segundoNumeroJs;
    }
    else
    {
        if(operacaoJs == "subtrair")
        {
            resultadoJs = primeiroNumeroJs - segundoNumeroJs;
        }
        else
        {
            if(operacaoJs == "multiplicar")
            {
                resultadoJs = primeiroNumeroJs * segundoNumeroJs;
            }
            else
            {
                if(operacaoJs == "dividir")
                {
                    resultadoJs = primeiroNumeroJs / segundoNumeroJs;
                }
                else
                {
                    alert("Operação Invalida");
                    return;
                }
            }
        }    
    }
    resultado.innerText = resultadoJs;
}

function LimparDados()
{
    primeiroNumero.value = "";
    segundoNumero.value = "";
    resultado.innerText = "";
}

calcular.addEventListener("click", RealizaOperacao);
limpar.addEventListener('click', LimparDados);
const calcular = document.getElementById("calcular");
const limpar = document.getElementById("limpar");
const operacao = document.getElementById("operacao");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const resultado = document.getElementById("resultado");

let opera = "";
let primeiroNumero = 0; 
let segundoNumero = 0;
let terceiroNumero = 0;
let resu = 0;

function RealizaOperacao()
{
  opera = operacao.value;
  primeiroNumero = parseFloat(number1.value);
  segundoNumero = parseFloat(number2.value);
  terceiroNumero = parseFloat(number3.value);   

    if(opera == "somar")
    {
        resu = primeiroNumero + segundoNumero + terceiroNumero;
    }

    else
    {
        if(opera == "subtrair")
        {
            resu = primeiroNumero - segundoNumero - terceiroNumero;
        }

        else
        {
            if(opera == "multiplicar")
            {
                resu = primeiroNumero * segundoNumero * terceiroNumero;
            }
        }    
    }
    resultado.innerText = resu;
}

function LimparCampos()
{
    number1.value = "";
    number2.value = "";
    number3.value = "";
    resultado.innerText = "";
}

calcular.addEventListener("click", RealizaOperacao);
limpar.addEventListener("click", LimparCampos);
// javascript tem diversos metodos para
// manipular elementos html
// manipular = pegar
// primeiro pega o elemento e armazena em memoria
// window (janela) | document (documento)

const btnMudarCor = document.getElementById('btnMudarCor');
console.log(btnMudarCor);

const corpoPagina = document.body
console.log(corpoPagina);

btnMudarCor.addEventListener('click', function()
{
    // const corAzuli = '#52C9EB';
    const corParagon = '#' + Math.floor(Math.random()*1677215).toString(16);


    corpoPagina.style.backgroundColor = corParagon;
});

const botaoZera = document.getElementById('bntZera');
const btnC = document.getElementById('btnC');
const paragrafo = document.querySelector('p');
const paragrafo2 = document.getElementById('p2');

let contador = 0;

btnC.addEventListener('click', function()
{
    contador++;
    paragrafo2.innerText = 'Contador: ' + contador;
});

botaoZera.addEventListener('click', function()
{
    contador = contador - contador;
    paragrafo2.innerText = 'Contador: ' + contador;
});

const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const calcular1 = document.getElementById('calcular1');
const resultado1 = document.getElementById('resultado1');

calcular1.addEventListener('click', function()
{
    const valor1 = Number(number1.value);
    const valor2 = Number(number2.value);
    soma = valor1 + valor2;
    resultado1.innerText = 'Resultado é: ' + soma;
});

const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const calcular2 = document.getElementById('calcular2');
const resultado2 = document.getElementById('resultado2');

calcular2.addEventListener('click', function()
{
    const valor1 = Number(number3.value);
    const valor2 = Number(number4.value);
    sub = valor1 - valor2;
    resultado2.innerText = 'Resultado é: ' + sub;
})

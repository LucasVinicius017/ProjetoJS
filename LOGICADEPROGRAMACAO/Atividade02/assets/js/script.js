const nomeJs = document.getElementById("Nome");
const salarioJs = document.getElementById("Salario");
const totalvendasJs = document.getElementById("TotalVendas");
const calcularJs = document.getElementById("Calcular");
const resultadoJs = document.getElementById("Resultado");

function Atividade02()
{
    let comissaoJs = parseFloat(totalvendasJs.value) * 0.75;
    const paragrafo1 = document.createElement("p");
    paragrafo1.innerText = `O nome do vendendor é ${nomeJs.value}`;
    resultadoJs.appendChild(paragrafo1);

    const paragrafo2 = document.createElement("p");
    paragrafo2.innerText = `Salário do vendedor será ${salarioJs.value}`;
    resultadoJs.appendChild(paragrafo2);

    const paragrafo3 = document.createElement("p");
    paragrafo3.innerText = `Total de Vendas é ${totalvendasJs.value}`;
    resultadoJs.appendChild(paragrafo3);

    const paragrafo4 = document.createElement("p");
    paragrafo4.innerText = `Valor da comissão é ${comissaoJs}`
    resultadoJs.appendChild(paragrafo4);

}
calcularJs.addEventListener("click", Atividade02);
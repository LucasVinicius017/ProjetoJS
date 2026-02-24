const { createContext } = require("react");

const nomeJs = document.getElementById("Nome");
const salarioJs = document.getElementById("Salario");
const totalvendasJs = document.getElementById("TotalVendas");
const comissaoJs = 7.5/100
const resultadoJs = document.getElementById("Resultado");

 
function Atividade02()
{
    const paragrafo1 = createElement("p");
    paragrafo1.innerText = `O nome do vendendor é ${nomeJs.value}`;
    resultadoJs.appendChild(paragrafo1);
    const paragrafo2 = createElement("p");
    paragrafo2.innerText = `Salário do vendedor será ${salarioJs.value}`;
    resultadoJs.appendChild(paragrafo2);
    const paragrafo3 = createContext("p");
    paragrafo3.innerText = `Total de Vendas é ${totalvendasJs.value}`;
    resultadoJs.appendChild(paragrafo3);
 
 
}
botaoOk.addEventListener("click", Atividade01);
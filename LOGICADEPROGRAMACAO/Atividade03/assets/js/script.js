const nomeJs = document.getElementById("Nome");
const idadeJs = document.getElementById("Idade");
const calcularJs = document.getElementById("Calcular");
const resultadoJs = document.getElementById("Resultado");

function Atividade03()
{
    
    let uidadeJs = parseInt(idadeJs.value);
    if (uidadeJs >= 18)
    {
        const paragrafo1 = document.createElement("p");
        paragrafo1.innerText = `Você é maior de idade😎`;
        resultadoJs.appendChild(paragrafo1);
    }
    else
    {
        const paragrafo2 = document.createElement("p");
        paragrafo2.innerText = `Você é menor de idade😊`;
        resultadoJs.appendChild(paragrafo2)
    }
}
calcularJs.addEventListener("click",Atividade03);
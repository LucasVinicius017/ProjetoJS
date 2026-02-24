const nomeJs = document.getElementById("nome");
const resultadoJs = document.getElementById("resultado");
const botaoOk = document.getElementById("botaoOk");
 
function Atividade01(){
    for (let i = 1; i <= 7; i++) {
        const paragrafo = document.createElement("p");
        let mensagem = `Mensagem ${i} - ${nomeJs.value} é um desenvolvedor FullStak`;
        paragrafo.textContent = mensagem.trim();
        resultadoJs.appendChild(paragrafo);
    }
 
 
}
botaoOk.addEventListener("click", Atividade01);
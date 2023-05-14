//Objetivo 1 - Mudar para o tema escuro e mudar botão para a Lua
//Objetivo 2 - Voltar para tema claro e mudar para o Sol

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if(modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");
        
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        body.classList.add("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }

});
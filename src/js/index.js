

// pegar o JS o elemento HTML correspondente ao botão troca de tema 


const botaoAlterarTema = document.getElementById("botao-alterar-tema");


// dar um jeito de pegar o JS o elemento correspondente ao body


const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//dar um jeito de identificar o clique do usuário no botão de tema 

botaoAlterarTema.addEventListener("click",
 () => 
{
//verificar se o body já tem a classe modo-escuro

const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

// pode colocar -body.classList.toggle("modo-escuro")- para trocar as linhas de remoção e adição do modo "if" e "else", tem que colocar em cima do "if" pois não precisa de algo para acontecer

if(modoEscuroEstaAtivo)
{  //  remover a classe do modo escuro
  body.classList.remove("modo-escuro");
  imagemBotaoTrocaDeTema.setAttribute("src","./src/imagem/sol.webp ")   
} 
else
{    //add a classe modo-escuro no body
body.classList.add("modo-escuro");

// trocar a imagem do botão e colocar a lua }
imagemBotaoTrocaDeTema.setAttribute("src"," ./src/imagem/lua 1.png")   
}
})

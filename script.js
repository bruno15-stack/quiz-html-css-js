const perguntaEl = document.getElementById("pergunta");
const botoes =  document.querySelectorAll(".opcao");
const botaoReiniciar = document.getElementById("reiniciar");
const barra = document.getElementById("barra");
const contador = document.getElementById("contador");

const perguntas = [
{
    pergunta: "Qual é a capital do Brasil?",
    opcoes: ["Rio de Janeiro", "Brasília", "Salvador", "São Paulo"],
    correta: 1
},
{
    pergunta: "Quantos planetas existem no sistema solar?",
    opcoes: ["7", "8", "9", "10"],
    correta: 1
},
{
    pergunta: "Qual o único mámifero que não pula?",
    opcoes: ["Cavalo", "Elefante", "Girafa", "Cabra"],
    correta: 1
},
    {pergunta: "Qual pais abriga a maior comunidade japonesa fora do Japão?",
    opcoes: ["China", "Brasil", "Estados unidos", "Coreia do Sul"],
    correta: 1},
    {pergunta: "Qual é o rio mais longo do mundo?",
    opcoes: ["Rio Amazonas", "Rio Nilo", "Rio Mississippi", "Rio São Francisco"],
    correta: 1
    },
    {pergunta: "Qual o bioma exclusivamente brasileiro?",
    opcoes: ["Amazônia", "Caatinga", "Pantanal", "Cerrado"],
    correta: 1
    },
    {pergunta: "Quais os únicos países da américa do sul que não fazem fronteira com o Brasil?",
    opcoes: ["Colômbia e Uruguai", "Chile e Equador", "Chile e Guiana", "Argentina e Bolívia"],
    correta: 1
    },
    {pergunta: "Qual estado brasileiro já foi capital de Portugal?",
    opcoes: ["São Paulo", "Rio de Janbeiro", "Salvador", "Minas Gerais"],
    correta: 1
    },
    {pergunta: "Quantos biomas existem no Brasil?",
    opcoes: ["7", "6", "5", "8"],
    correta: 1
    },
    {pergunta: "Qual a cidade mais populosa da américa do sul?",
    opcoes: ["Buenos Aires", "São Paulo", "Lima", "Rio de Janeiro"],
    correta: 1



    }

    







];

let perguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta(){
    const pergunta = perguntas[perguntaAtual];
    perguntaEl.textContent = pergunta.pergunta;
    botoes.forEach((botao, index) =>{
        botao.textContent = pergunta.opcoes[index];
   
    });  

     atualizarBarra();
    atualizarContador();



}
botoes.forEach((botao, index) =>{
    botao.addEventListener ("click", () =>{
        const pergunta = perguntas[perguntaAtual];
        if (index === pergunta.correta) {
            pontuacao++;

        }
        perguntaAtual++;
        if(perguntaAtual < perguntas.length){
            carregarPergunta();
        } else {
            mostrarResultado();
        }
    });
});
function mostrarResultado(){
    barra.style.width = "100%";
    perguntaEl.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas`;
    botoes.forEach(botao => {
        botao.style.display = "none";
    });
    botaoReiniciar.style.display = "block";
    contador.textContent = "Quiz finalizado";
}
//Esse botão de reiniciar eu criei depois
botaoReiniciar.addEventListener("click", () => {
    perguntaAtual = 0;
    pontuacao = 0;

    botoes.forEach(botao => {
        botao.style.display = "block";
    });

    botaoReiniciar.style.display = "none";

    carregarPergunta();
});
function atualizarBarra(){
    const progresso = ((perguntaAtual) / perguntas.length) * 100;
    barra.style.width = `${progresso}%`;
}

function atualizarContador(){
    contador.textContent = `Pergunta ${perguntaAtual +1 } de ${perguntas.length}`;




}
carregarPergunta();



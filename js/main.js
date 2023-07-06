const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pintura = document.querySelectorAll('.cor__robo')
const combate = document.querySelector('.producao');

combate.addEventListener('click', function() {
    alert('Robotron pronto para combate!');
});

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

pintura.forEach( (e) => {
    e.addEventListener('click', () => {
        var p = e.attributes.cor.value
        var i = document.querySelector('.robo')
        if (p === "branco"){
             i.src = "img/robotron-branco.png"
        } else if (p === "amarelo") {
             i.src = "img/robotron-amarelo.png"
        } else if (p === "azul") {
             i.src = "img/robotron-azul.png"
        } else if (p === "preto") {
             i.src = "img/robotron-preto.png"
        } else if (p === "rosa") {
             i.src = "img/robotron-rosa.png"
        }else if (p === "vermelho") {
             i.src = "img/robotron-vermelho.png"
        }
    })
})

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1;
    } else {
        peca.value = parseInt(peca.value) - 1;
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent  = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

const cor = document.querySelectorAll('.cor-label')
const imagem = document.querySelector('.robo')

cor.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        mudaCor(evento.target.id)
    })
})

function mudaCor(coradquirida) {
    imagem.setAttribute('src', `img/${coradquirida}.png`)
}

let iniciar = document.querySelector("#iniciar");
let tentar = document.querySelector("#tentar");
let caixaTexto = document.querySelector("input");
let textoPontuacao = document.querySelector("p");
let pontuacao = 0;

let img = document.querySelector("img");

function aleatorio() {
    let sortPersonagem = Math.ceil(Math.random()* 493);
    fetch(`https://rickandmortyapi.com/api/character/${sortPersonagem}`)
    .then(function(result){
        return result.json();
    })
    .then(function(data){
        img.src = data.image;
        console.log(data.name);
        tentar.onclick = function () {
            if(caixaTexto.value !== "" && caixaTexto.value === data.name){
                setTimeout(() => {
                    acertou();
                }, 1000);
                aleatorio();
            }
            else{
                setTimeout(() => {
                    errou();
                }, 1000);
                aleatorio();
            }
        }
    })
    
}

function acertou() {
    pontuacao++;
    textoPontuacao.innerHTML = pontuacao;
}

function errou() {
    pontuacao--;
    textoPontuacao.innerHTML = pontuacao;
}

iniciar.onclick = aleatorio;
function escolhaPersonagem(escolha) {
    if (escolha === "1") { 
        return window.location.href = "../Html/dickVigarista/Fase1/situacao1.html";
    }
    else if (escolha === "2") {
        return window.location.href = "../Html/penelopeCharmosa/Fase1/situacao1.html";
    }
    else {
        return window.location.href = "../Html/professorAereo/Fase1/situacao1.html";
    }
}

function validaEscolha(opcoes = []) {
    do {
        const escolha = prompt("Escolha sua opção: " + opcoes);

        if (opcoes.indexOf(escolha) !== -1) {
            return escolha;
        }
        alert("Escolha incorreta! Escolha:" + opcoes);

    } while (true);
}

function decisao(escolha, link1, link2) {
    if (escolha === "1") {
        return window.location.href = link1;
    }
    else {
        return window.location.href = link2;
    }
}